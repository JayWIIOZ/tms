"use client";

import { useAuthStore } from "@/store/auth-store";

export const useCurrentUser = () => {
  return useAuthStore((s) => s.user);
};

export const useAuthStatus = () => {
  return useAuthStore((s) => s.status);
};

export const useIsAdmin = () => {
  return useAuthStore(
    (s) => s.user?.role === "ADMIN" || s.user?.role === "OWNER",
  );
};

export const useIsAuthenticated = () => {
    return useAuthStore(s => s.status === "authenticated")
}