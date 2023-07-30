import { create } from "zustand";

interface coverState {
  userState: boolean;
  onLogout: () => void;
}

export const useCoverStore = create<coverState>()((set) => ({
  userState: false,
  onLogout: () => null,
}));
