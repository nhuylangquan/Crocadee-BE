import { readFileSync, writeFileSync } from 'fs';

const content = readFileSync('src/rearrange/rearrange.seed.ts', 'utf-8');

// Parse the file to extract each question object, then transform
const lines = content.split('\n');
const result = [];
let i = 0;

while (i < lines.length) {
  const line = lines[i];
  
  // Look for a question object start: `{` after a `{` or `,`
  if (line.trim() === '{') {
    const startIdx = i;
    // Collect lines until we find `},` or `},`
    const objLines = [];
    let depth = 0;
    let found = false;
    for (let j = i; j < lines.length; j++) {
      objLines.push(lines[j]);
      const trimmed = lines[j].trim();
      if (trimmed.includes('{')) depth += (trimmed.match(/{/g) || []).length;
      if (trimmed.includes('}')) depth -= (trimmed.match(/}/g) || []).length;
      if (depth <= 0 && (trimmed === '},' || trimmed === '}]' || trimmed === '},]' || trimmed === '},]))')) {
        i = j;
        found = true;
        break;
      }
    }
    
    if (found) {
      const objStr = objLines.join('\n');
      // Extract q value (full text including instruction + code block)
      const qMatch = objStr.match(/q: `([\s\S]*?)`/);
      if (qMatch) {
        const qFull = qMatch[1];
        // Split instruction from code
        const parts = qFull.split('\n');
        const instruction = parts[0].trim();
        // The code lines are from parts[1] onwards (after instruction)
        const codeLines = parts.slice(1).filter(l => l.trim() !== '');
        
        // Build the lines array entries (with proper escaping)
        const linesEntries = codeLines.map(l => '    `' + l.replace(/`/g, '\\`') + '`');
        const linesStr = '  lines: [\n' + linesEntries.join(',\n') + ',\n  ],';
        
        // Build new object
        const newObj = objStr
          .replace(/q: `[\s\S]*?`/, `q: \`${instruction}\`,`)
          .replace(/difficulty:/, `${linesStr}\n  difficulty:`);
        
        result.push(newObj);
        i++;
        continue;
      }
    }
  }
  result.push(line);
  i++;
}

writeFileSync('src/rearrange/rearrange.seed.ts', result.join('\n'), 'utf-8');
console.log('Transform complete');