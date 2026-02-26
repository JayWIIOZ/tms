import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type { SessionUser } from "@/types/auth";

type AuthStatus = "loading" | "authenticated" | "unauthenticated";

interface AuthState {
  user: SessionUser | null;
  status: AuthStatus;
  setUser: (user: SessionUser) => void;
  clearUser: () => void;
}

export const useAuthStore = create<AuthState>()(
  devtools(
    (set) => ({
      user: null,
      status: "loading",
      setUser: (user) =>
        set({ user, status: "authenticated" }, false, "auth/setUser"),
      clearUser: () =>
        set({ user: null, status: "unauthenticated" }, false, "auth/clearUser"),
    }),
    { name: "auth-store" },
  ),
);
