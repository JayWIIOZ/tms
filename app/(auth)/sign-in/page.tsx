"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

type Stage = "form" | "sent";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [stage, setStage] = useState<Stage>("form");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const res = await signIn("email", {
        email,
        callbackUrl: "/home",
        redirect: false,
      });

      if (res?.error) {
        setError("发送验证邮件失败，请稍后重试");
      } else {
        setStage("sent");
      }
    } catch {
      setError("网络异常，请检查连接后重试");
    } finally {
      setIsLoading(false);
    }
  };

  if (stage === "sent") {
    return (
      <div className="group relative">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-2xl">
          <div className="absolute -left-20 -top-20 h-40 w-40 rounded-full bg-white/5 blur-3xl" />

          <div className="relative z-10 text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-purple-500/10 ring-1 ring-purple-500/20">
              <svg
                className="h-10 w-10 text-purple-400"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
            </div>

            <h1 className="text-2xl font-light tracking-tight text-white">
              验证邮件已发送
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              我们已向{" "}
              <span className="font-medium text-purple-400">{email}</span>{" "}
              发送了一封验证邮件，请点击邮件中的链接登录。
            </p>
            <p className="mt-2 text-xs text-gray-500">
              验证成功后将自动跳转至首页
            </p>
            <p className="mt-2 text-xs text-gray-500">
              如果验证后没有反应，请点击这里跳转
              <a href="/home" className="text-purple-400 hover:underline">
                首页
              </a>{" "}
              页面。
            </p>

            <div className="mt-8">
              <button
                onClick={() => {
                  setStage("form");
                  setEmail("");
                }}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white transition-all hover:bg-white/10"
              >
                使用其他邮箱
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group relative">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-2xl transition-all duration-500 hover:border-white/20">
        <div className="absolute -left-20 -top-20 h-40 w-40 rounded-full bg-white/5 blur-3xl transition-all duration-700 group-hover:bg-white/10" />

        <div className="relative z-10">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-light tracking-tight text-white">
              Welcome{" "}
              <span className="font-semibold text-purple-400">Back</span>
            </h1>
            <p className="mt-2 text-sm text-gray-400">请使用您的凭据登录系统</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <input
                type="email"
                value={email}
                placeholder="Email address"
                required
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-all placeholder:text-gray-500 focus:border-purple-500/50 focus:bg-white/10"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {error && (
              <p className="text-center text-sm text-red-400">{error}</p>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="relative w-full overflow-hidden rounded-xl bg-white px-4 py-3 font-medium text-black transition-all hover:bg-gray-200 active:scale-[0.98] disabled:opacity-50"
            >
              {isLoading ? "发送中..." : "Continue"}
            </button>
          </form>

          <div className="relative my-8 flex items-center justify-center">
            <span className="absolute h-px w-full bg-white/10" />
            <span className="relative bg-[#0a0a0a]/50 px-3 text-xs uppercase tracking-widest text-gray-500 backdrop-blur-md">
              Or with
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => signIn("google", { callbackUrl: "/home" })}
              className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 py-2.5 text-sm font-medium text-white transition-all hover:bg-white/10"
            >
              Google
            </button>
            <button
              onClick={() => signIn("github", { callbackUrl: "/home" })}
              className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 py-2.5 text-sm font-medium text-white transition-all hover:bg-white/10"
            >
              GitHub
            </button>
          </div>
        </div>
      </div>

      <p className="mt-8 text-center text-xs text-gray-500">
        New here?{" "}
        <a href="/sign-up" className="text-purple-400 hover:underline">
          Create an account
        </a>
      </p>
    </div>
  );
}
