import { create } from "zustand";
import AuthService from "./services/auth/AuthService";
import User from "./types/user.type";

interface coverState {
  userState: boolean;
  currentUser: User | null;
  setCurrentUser: (user: User) => void;
  onLogout: () => void;
}

export const useCoverStore = create<coverState>()((set) => ({
  userState: false,
  currentUser: null,
  onLogout: () => AuthService.logout(),
  setCurrentUser(currentUser) {
    set({ currentUser });
  }
}));
