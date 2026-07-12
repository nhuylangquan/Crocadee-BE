import { Injectable, Logger } from '@nestjs/common';
import { exec } from 'child_process';
import { promisify } from 'util';
import * as fs from 'fs/promises';
import * as path from 'path';
import * as os from 'os';
import * as crypto from 'crypto';

const execAsync = promisify(exec);

interface ExecError extends Error {
  stdout?: string;
  stderr?: string;
  killed?: boolean;
}

@Injectable()
export class SandboxService {
  private readonly logger = new Logger(SandboxService.name);
  private readonly tempDir = path.join(os.tmpdir(), 'crocadee-sandbox');

  constructor() {
    this.initTempDir().catch((err: unknown) => {
      this.logger.error(
        'Failed to init temp dir',
        err instanceof Error ? err.message : String(err),
      );
    });
  }

  private async initTempDir() {
    try {
      await fs.mkdir(this.tempDir, { recursive: true });
    } catch (error) {
      this.logger.error('Failed to create temp directory for sandbox', error);
    }
  }

  async executeCpp(code: string): Promise<{
    success: boolean;
    output: string;
    error?: string;
    compilationError?: string;
  }> {
    const fileId = crypto.randomUUID();
    const cppFilePath = path.join(this.tempDir, `${fileId}.cpp`);
    const isWindows = os.platform() === 'win32';
    const exeExt = isWindows ? '.exe' : '';
    const exeFilePath = path.join(this.tempDir, `${fileId}${exeExt}`);

    try {
      // 1. Write code to file
      await fs.writeFile(cppFilePath, code, 'utf-8');

      // 2. Compile code
      try {
        await execAsync(`g++ "${cppFilePath}" -o "${exeFilePath}"`);
      } catch (err: unknown) {
        const compileError = err as ExecError;
        return {
          success: false,
          output: '',
          compilationError:
            compileError.stderr || compileError.message || String(err),
        };
      }

      // 3. Execute code with a timeout
      try {
        const { stdout, stderr } = await execAsync(`"${exeFilePath}"`, {
          timeout: 3000,
        });
        return {
          success: true,
          output: stdout,
          error: stderr || undefined,
        };
      } catch (err: unknown) {
        const runError = err as ExecError;
        const isTimeout = runError.killed;
        return {
          success: false,
          output: runError.stdout ? runError.stdout.toString() : '',
          error: isTimeout
            ? 'Execution timed out (Limit: 3 seconds).'
            : runError.stderr || runError.message || String(err),
        };
      }
    } catch (err: unknown) {
      this.logger.error(
        'Unexpected error in executeCpp',
        err instanceof Error ? err.message : String(err),
      );
      return {
        success: false,
        output: '',
        error: 'An unexpected error occurred during execution.',
      };
    } finally {
      // 4. Cleanup
      try {
        await fs.unlink(cppFilePath).catch(() => {});
        await fs.unlink(exeFilePath).catch(() => {});
      } catch {
        this.logger.warn(`Failed to cleanup files for ${fileId}`);
      }
    }
  }
}
