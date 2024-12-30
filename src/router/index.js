import LoginPage from "@/components/LoginPage.vue";
import RegistrationPage from "@/components/RegistrationPage.vue";
import TodoPage from "@/components/TodoPage.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "TodoPage",
    component: TodoPage,
  },
  {
    path: "/login",
    name: "LoginPage",
    component: LoginPage,
  },
  {
    path: "/register",
    name: "RegistrationPage",
    component: RegistrationPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
