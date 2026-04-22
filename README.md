Crocadee-BE (CodeBite Project)
Dự án Backend cho nền tảng CodeBite.

## 🛠 Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **NestJS** | Node.js Framework (Modular Architecture) |
| **TypeScript** | Type safety |
| **MongoDB Atlas** | Cloud NoSQL Database |
| **Mongoose** | ODM (Object Data Modeling) |
| **Yarn** | Package manager |
| **Husky + lint-staged** | Pre-commit hooks & formatting |
| **Postman** | API Testing & Documentation |

## Setup

```bash
# 1. Install dependencies
yarn  install

# 2. Start development server
yarn start:dev

# 3. Build for production
yarn build


Pre-commit Rules:
Chạy lint-staged — Tự động dò lỗi (ESLint) và format lại code (Prettier) cho các file đã staged.

Kiểm tra Commit Message — Phải tuân thủ chuẩn Conventional Commits (ví dụ: feat: add login, fix: header bug).

Kiểm tra Branch Name — Nhanh làm việc của bạn phải tuân thủ quy tắc dưới đây.

Quy tắc đặt tên nhánh (Branch Naming Convention):
Dành cho tất cả Dev members, nhánh của bạn phải được đặt tên theo cú pháp chứa email:
feature/<your_discord_name>

Ví dụ:

feature/Kina