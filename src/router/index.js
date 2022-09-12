import { createWebHistory, createRouter } from "vue-router";
import { useAuthState, getUserState, hasAdmin } from "@/modules/firebase";

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  {
    name: "Home",
    path: "/",
    component: () => import("../views/Home.vue"),
    meta: { title: "Home" },
  },
  {
    path: "/admin",
    component: () => import("@/views/Admin.vue"),
    meta: { title: "Admin Dashboard", secure: true, admin: true },
    children: [
      {
        path: "",
        component: () => import("../views/admin/Dashboard.vue"),
        meta: { title: "Admin Dashboard", secure: true },
      },
    ],
  },
  {
    path: "/games",
    component: () => import("@/views/Games.vue"),
    meta: { title: "Games", secure: true },
  },
  {
    path: "/game",
    component: () => import("@/views/Game.vue"),
    meta: { title: "Game", secure: true },
  },
  {
    path: "/source/:id",
    component: () => import("@/views/Source.vue"),
    meta: { title: "Source", secure: true },
    children: [
      {
        path: "collection/:name",
        component: () => import("@/views/source/Collection.vue"),
        meta: { title: "Source Collection", secure: true },
      },
      {
        path: "",
        component: () => import("@/views/source/Home.vue"),
        meta: { title: "Source Collections", secure: true },
      },
    ],
  },
  {
    path: "/sources",
    component: () => import("@/views/Sources.vue"),
    meta: { title: "Sources", secure: true },
  },
  {
    path: "/sheet",
    component: () => import("@/views/Sheet.vue"),
    meta: { title: "Sources", secure: true },
  },
  {
    path: "/profile",
    component: () => import("@/views/Profile.vue"),
    meta: { title: "Profile", secure: true },
  },
  {
    path: "/signup",
    component: () => import("@/components/auth/Signup.vue"),
    meta: { title: "Sign Up" },
  },
  {
    path: "/about",
    meta: { title: "About" },
    component: () => import("@/views/About.vue"),
  },
  {
    name: "login",
    path: "/login",
    component: () => import("@/components/auth/Login.vue"),
    meta: { title: "Sign In" },
  },
  {
    path: "/:path(.*)",
    component: () => import("@/views/NotFound.vue"),
    meta: { title: "Not Found" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active-item",
  linkExactActiveClass: "exact-active-item",
});
const { startLoading, endLoading } = useAuthState();
router.beforeEach(async (to, from, next) => {
  const isSecure = to.matched.some((record) => record.meta.secure);
  const isAdminOnly = to.matched.some((record) => record.meta.admin);
  const userState = await getUserState();
  const isAdmin = await hasAdmin();
  const isAuth = !!userState;
  startLoading();

  if (isSecure && !isAuth) {
    const redirectPath = to.path;
    document.title = to.meta.title ? to.meta.title : "Stormbringer.io POC";
    next({ name: "login", query: { from: redirectPath } });
  } else if (isSecure && isAdminOnly && isAuth && !isAdmin) {
    next({ name: "Home" });
  } else {
    document.title = to.meta.title ? to.meta.title : "Stormbringer.io POC";
    next();
  }
});

router.afterEach(() => {
  endLoading();
});

export default router;
