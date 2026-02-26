"use client";

import { useSession } from "next-auth/react";
import { useEffect, useRef } from "react";
import { useAuthStore } from "@/store/auth-store";
import type { SessionUser } from "@/types/auth";

export const AuthSync = () => {
  const { data: session, status } = useSession();
  const { setUser, clearUser } = useAuthStore();
  const prevStatus = useRef(status);

  useEffect(() => {
    if (status === prevStatus.current && status !== "authenticated") return;

    prevStatus.current = status;

    if (status === "authenticated" && session?.user) {
      const u = session.user as SessionUser;
      setUser({
        id: u.id,
        name: u.name ?? null,
        email: u.email ?? null,
        image: u.image ?? null,
        role: u.role ?? "MEMBER",
      });
    } else if (status === "unauthenticated") {
      clearUser();
    }
  }, [status, session, setUser, clearUser]);

  return null;
};
