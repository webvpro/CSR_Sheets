import { createWebHistory, createRouter } from "vue-router";
import { useAuthState, getUserState, hasAdmin } from "@/modules/firebase";

/** @type {import('vue-router').RouterOptions['routes']} */
const settings = {};
settings.preTitle = "CypherSystem.Games";
export const routes = [
  {
    name: "Home",
    path: "/",
    component: () => import("../views/Home.vue"),
    meta: { title: (route) => `${settings.preTitle}-Home` },
  },
  {
    path: "/admin",
    component: () => import("@/views/Admin.vue"),
    meta: {
      title: (route) => `${settings.preTitle}-Admin Dashboard`,
      secure: true,
      admin: true,
    },
    children: [
      {
        path: "",
        component: () => import("../views/admin/Dashboard.vue"),
        meta: {
          title: (route) => `${settings.preTitle}-Admin Dashboard`,
          secure: true,
        },
      },
    ],
  },
  {
    path: "/games",
    component: () => import("@/views/Games.vue"),
    meta: { title: (route) => `${settings.preTitle}-Games`, secure: true },
  },
  {
    path: "/game",
    component: () => import("@/views/Game.vue"),
    meta: { title: (route) => `${settings.preTitle}-Game`, secure: true },
  },
  {
    path: "/source/:id",
    component: () => import("@/views/Collections.vue"),
    meta: {
      title: (route) => `${settings.preTitle}-Source Collections`,
      secure: true,
    },
    children: [
      {
        path: "collection/:name",
        component: () => import("@/views/source/Collection.vue"),
        meta: {
          title: (route) =>
            `${settings.preTitle}-${
              route.params.name.charAt(0).toUpperCase() +
              route.params.name.slice(1)
            } Collection`,
          secure: true,
        },
      },
      {
        path: "",
        component: () => import("@/views/source/Home.vue"),
        meta: {
          title: (route) => `${settings.preTitle}-Collections`,
          secure: true,
        },
      },
    ],
  },
  {
    path: "/sources",
    component: () => import("@/views/Sources.vue"),
    meta: { title: (route) => `${settings.preTitle}-Sources`, secure: true },
  },
  {
    path: "/sheet",
    component: () => import("@/views/Sheet.vue"),
    meta: { title: (route) => `${settings.preTitle}-Sheet`, secure: true },
  },
  {
    path: "/profile",
    component: () => import("@/views/Profile.vue"),
    meta: { title: (route) => `${settings.preTitle}-Profile`, secure: true },
  },
  {
    path: "/signup",
    component: () => import("@/components/auth/Signup.vue"),
    meta: { title: (route) => `${settings.preTitle}-Sign Up` },
  },
  {
    path: "/about",
    meta: { title: (route) => `${settings.preTitle}-About Us` },
    component: () => import("@/views/About.vue"),
  },
  {
    name: "login",
    path: "/login",
    component: () => import("@/components/auth/Login.vue"),
    meta: { title: (route) => `${settings.preTitle}-Sign In` },
  },
  {
    path: "/:path(.*)",
    component: () => import("@/views/NotFound.vue"),
    meta: { title: (route) => `${settings.preTitle}-Not Found` },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active-item",
  linkExactActiveClass: "exact-active-item",
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 1 };
  },
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
    document.title = to.meta.title ? to.meta.title : "CypherSystem.Games";
    next({ name: "login", query: { from: redirectPath } });
  } else if (isSecure && isAdminOnly && isAuth && !isAdmin) {
    next({ name: "Home" });
  } else {
    document.title = to.meta.title ? to.meta.title(to) : "CypherSystem.Games";
    next();
  }
});

router.afterEach(() => {
  //window.scrollTo(1, 1);
  endLoading();
});

export default router;
