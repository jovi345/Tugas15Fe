import { axiosInstance } from "@/utils/axios";
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      token: null,
      isLoggedIn: false,
    };
  },
  actions: {
    setToken(token) {
      this.token = token;
    },
    setLogin(isLoggedIn) {
      this.isLoggedIn = isLoggedIn;
    },
  },
});

export const initializeAuth = async () => {
  const userStore = useUserStore();
  try {
    const response = await axiosInstance.post("/user/refreshtoken", {});
    userStore.setToken(response.data.result);
    return true;
  } catch {
    return false;
  }
};
