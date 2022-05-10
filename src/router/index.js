import { createWebHistory, createRouter } from "vue-router";
import {
  getUserState,
  getAuthRedirect,
  useAuthState,
} from "@/modules/firebase";

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  {
    path: "/",
    component: () => import("../views/Home.vue"),
    meta: { title: "Home" },
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
  const isAuth = await getUserState();
  startLoading();
  getAuthRedirect()
    .then((result) => {
      document.title = from.meta.title
        ? `'Stormbringer.io POC: '${from.meta.title}`
        : "Stormbringer.io POC";
      const authRedirectPath = to.query.from ? to.query.from : "/";
      if (result && result.user) {
        console.log(to.query.from);
        next({ path: authRedirectPath });
      }
    })
    .catch((error) => {
      console.log(error);
    });

  if (isSecure && !isAuth) {
    const redirectPath = to.path;
    document.title = to.meta.title ? to.meta.title : "Stormbringer.io POC";
    next({ name: "login", query: { from: redirectPath } });
  } else {
    document.title = to.meta.title ? to.meta.title : "Stormbringer.io POC";
    next();
  }
});

router.afterEach(() => {
  endLoading();
});

export default router;
