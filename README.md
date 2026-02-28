This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Dashboard 开发与启动

- **首页入口**：登录后固定入口为 [http://localhost:3000/home](http://localhost:3000/home)。根路径 `/` 会根据登录状态重定向到 `/home` 或 `/sign-in`。
- **本地运行**：
  1. 复制 `.env.example` 为 `.env`，填写 `DATABASE_URL`、`NEXTAUTH_SECRET`、`NEXTAUTH_URL` 等（见文件内注释）。
  2. 执行 `npx drizzle-kit push` 或 `npx drizzle-kit migrate` 同步数据库（若需）。
  3. `npm run dev` 启动开发服务器。
- **校验**：提交前请执行 `npm run lint` 与 `npm run build` 确保通过。