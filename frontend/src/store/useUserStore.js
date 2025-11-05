import { create } from "zustand";
import { persist } from "zustand/middleware";

const useUserStore = create(
  persist(
    (set) => ({
      user: null,
      setUser: (userData) => set({ user: userData }),
      clearUser: () => set({ user: null }),
    }),
    {
      name: "user-data-storage",
      partialize: (state) => ({
        user: state.user
          ? {
              username: state.user.name,
              email: state.user.email,
            }
          : null,
      }),
    }
  )
);

export default useUserStore;