<template>
  <header class="sticky top-0 z-40 bg-indigo-900 shadow">
    <div class="navbar bg-base-100">
      <div class="flex-none">
        <button class="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-5 h-5 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      <div class="flex-1">
        <router-link to="/" class="text-xl normal-case btn btn-ghost"
          >CypherSystem.games</router-link
        >
      </div>
      <div class="flex-none gap-2">
        <div class="form-control">
          <select data-choose-theme class="w-full max-w-xs select">
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
        <div class="dropdown dropdown-end">
          <label tabindex="0" class="btn btn-ghost btn-circle avatar">
            <div class="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" />
            </div>
          </label>
          <ul
            tabindex="0"
            class="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li v-if="hasAdmin">
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
    return { ...toRefs(state), signOutUser, hasAuth, hasAdmin, themes };
  },
};
</script>
