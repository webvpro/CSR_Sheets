<template>
  <header class="sticky top-0 z-40 bg-indigo-900 shadow">
    <div class="navbar bg-base-100">
      <div class="flex-none sm:hidden">
        <div class="dropdown">
          <label tabindex="1" class="btn btn-ghost btn-circle">
            <v-icon name="hi-solid-menu" />
          </label>
          <ul
            tabindex="1"
            class="px-1 py-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <template v-for="(item, idx) in pgNav" :key="idx">
              <li :class="[item?.subs ? 'menu-title' : '']">
                <span v-if="item?.subs">{{ item.label }}</span>
                <router-link v-else :to="item.href">{{
                  item.label
                }}</router-link>
              </li>
              <template v-if="item?.subs">
                <li v-for="(sub, i) in item.subs" :key="`${idx}-${i}`">
                  <router-link :to="sub.href">{{ sub.label }}</router-link>
                </li>
              </template>
            </template>
          </ul>
        </div>
      </div>
      <div class="text-xs max-w-fit md:flex-none md:text-xl">
        <router-link to="/" class="normal-case btn btn-ghost"
          >CypherSystem.games</router-link
        >
      </div>
      <div class="flex-none hidden md:flex-1 md:flex">
        <ul class="p-0 mx-auto menu menu-horizontal">
          <template v-for="(mItem, ix) in pgNav" :key="ix">
            <li v-if="mItem?.href">
              <router-link :to="mItem.href">{{ mItem.label }}</router-link>
            </li>
            <li v-else tabindex="ix">
              <a>{{ mItem.label }} <v-icon name="hi-solid-chevron-down" /></a>
              <ul class="p-2 bg-base-100">
                <li v-for="(subM, x) in mItem.subs" :key="`${ix}-${x}`">
                  <router-link :to="subM.href">{{ subM.label }}</router-link>
                </li>
              </ul>
            </li>
          </template>
        </ul>
      </div>
      <div class="justify-end flex-1 md:flex-none">
        <div class="dropdown dropdown-end">
          <label tabindex="0" class="btn btn-ghost btn-circle avatar">
            <div class="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" />
            </div>
          </label>
          <ul
            tabindex="3"
            class="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <div class="py-1 form-control">
                <select
                  data-choose-theme
                  class="w-full px-1 mx-0 bg-transparent outline-0 foucs:ring-transparent ring-0 ring-offset-0 select"
                >
                  <option disabled selected>Change Theme</option>
                  <option value="default">Default</option>
                  <option
                    v-for="theme in themes"
                    :key="theme"
                    :value="theme"
                    class="capitalize"
                  >
                    {{ theme }}
                  </option>
                </select>
              </div>
            </li>
            <li v-if="!!user?.token.claims.admin" class="px-1">
              <router-link to="/admin">Admin</router-link>
            </li>
            <li v-if="hasAuth">
              <router-link
                to="../profile"
                :class="[
                  active ? 'bg-gray-100' : '',
                  'block px-4 py-2 text-sm text-gray-700',
                ]"
                >Profile
                <span class="badge">New</span>
              </router-link>
            </li>
            <li v-if="hasAuth">
              <a href="#" @click="signOutUser">Sign Out</a>
            </li>
            <li v-else>
              <router-link to="/login">Sign In</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { themeChange } from "theme-change";
import { toRefs, reactive, computed, ref, onMounted } from "vue";
import { getAuth, signOut } from "@firebase/auth";
import { useRouter } from "vue-router";
import { useAuthState } from "@/modules/firebase";
const themes = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
];

export default {
  setup() {
    const { user, isAuthenticated, hasAdmin } = useAuthState();
    const auth = getAuth();
    const router = useRouter();
    const state = reactive({});
    const hasAuth = ref(isAuthenticated);
    const pgNav = [
      { label: "Games", icon: "fa-dice-d20", href: "/games" },
      {
        label: "Create",
        icon: "gi-toolbox",
        subs: [
          { label: "Characters", icon: "gi-bookshelf", href: "/characters" },
          { label: "Sources", icon: "gi-bookshelf", href: "/sources" },
          {
            label: "NPCs/Creatures",
            icon: "gi-monster-grasp",
            href: "/npcs",
          },
        ],
      },
      { label: "Shop", icon: "gi-shopping-cart", href: "/shop" },
    ];
    state.user = computed(() => user);
    onMounted(() => {
      themeChange(false);
    });
    const signOutUser = async () => {
      try {
        await signOut(auth);
        console.log(user);
        router.push("/login");
      } catch (e) {
        alert(e.message);
      }
    };
    return {
      ...toRefs(state),
      pgNav,
      signOutUser,
      hasAuth,
      themes,
    };
  },
};
</script>
