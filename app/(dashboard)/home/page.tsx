"use client";

import { useCurrentUser, useAuthStatus, useIsAdmin } from "@/hooks/useCurrentUser";


const HomePage = () => {
  const user = useCurrentUser();
  const status = useAuthStatus();
  const isAdmin = useIsAdmin();
  if (status === "loading") return <div>加载中...</div>;
  return (
    <div>
      <p>欢迎, {user?.name ?? user?.email ?? "用户"}</p>
      {isAdmin && <p>管理员功能区域</p>}
    </div>
  );
};

export default HomePage;
