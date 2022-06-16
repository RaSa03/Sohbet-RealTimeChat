import LogIn from "@/views/LogIn";
import HomePage from "@/views/HomePage";
import ChatPage from "@/views/ChatPage";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: LogIn,
  },
  {
    path: "/home",
    component: HomePage,
  },
  {
    path: "/chat",
    component: ChatPage,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
