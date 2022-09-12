<template>
  <Disclosure v-slot="{ open }" as="nav" class="bg-gray-800">
    <div class="w-full px-2 mx-auto sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="flex items-stretch justify-start">
          <router-link to="/">
            <div class="flex items-center flex-shrink-0">
              <v-icon
                name="gi-magic-portal"
                label="Stormbringer POC"
                class="inline-block"
                scale="2"
                fill="#fcba03"
              />
              <h2 class="font-bold text-yellow-400">Stormbringer POC</h2>
            </div>
          </router-link>
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <a
                v-for="item in navigation"
                :key="item.name"
                :href="item.href"
                :class="[
                  item.current
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'px-3 py-2 rounded-md text-sm font-medium',
                ]"
                :aria-current="item.current ? 'page' : undefined"
                >{{ item.name }}</a
              >
            </div>
          </div>
        </div>
        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <button
            class="p-1 text-gray-400 bg-gray-800 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
          >
            <span class="sr-only">View notifications</span>
            <BellIcon class="w-6 h-6 text-blue-500" aria-hidden="true" />
          </button>

          <!-- Profile dropdown -->
          <Menu as="div" class="relative ml-3">
            <div>
              <MenuButton
                class="flex text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                <span class="sr-only">Open user menu</span>
                <v-icon
                  name="gi-winged-sword"
                  class="w-8 h-8 bg-purple-500 rounded-full"
                  alt=""
                />
              </MenuButton>
            </div>
            <transition
              enter-active-class="transition duration-100 ease-out"
              enter-from-class="transform scale-95 opacity-0"
              enter-to-class="transform scale-100 opacity-100"
              leave-active-class="transition duration-75 ease-in"
              leave-from-class="transform scale-100 opacity-100"
              leave-to-class="transform scale-95 opacity-0"
            >
              <MenuItems
                class="absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <MenuItem v-if="user.token.claims.admin" v-slot="{ active }">
                  <router-link
                    to="/admin"
                    :class="[
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700',
                    ]"
                    >Admin</router-link
                  >
                </MenuItem>
                <MenuItem v-if="user" v-slot="{ active }">
                  <router-link
                    to="../profile"
                    :class="[
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700',
                    ]"
                    >Your Profile</router-link
                  >
                </MenuItem>
                <MenuItem v-if="user" v-slot="{ active }">
                  <a
                    href="#"
                    :class="[
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700',
                    ]"
                    >Settings</a
                  >
                </MenuItem>
                <MenuItem v-slot="{ active }" :v-if="user">
                  <a
                    href="#"
                    :class="[
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700',
                    ]"
                    @click="signOutUser"
                    >Sign Out</a
                  >
                </MenuItem>
                <MenuItem v-if="!user" v-slot="{ active }">
                  <router-link
                    to="/login"
                    :class="[
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700',
                    ]"
                    >Sign In</router-link
                  >
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
    </div>
  </Disclosure>
</template>

<script>
import { toRefs, reactive, computed } from "vue";
import { getAuth, signOut } from "@firebase/auth";
import { useRouter } from "vue-router";
import { useAuthState } from "@/modules/firebase";
import {
  Disclosure,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
import { BellIcon } from "@heroicons/vue/outline";

export default {
  components: {
    Disclosure,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    BellIcon,
  },
  setup() {
    const { user, loading } = useAuthState();
    const auth = getAuth();
    const router = useRouter();
    const state = reactive({});
    state.user = computed(() => user);
    const signOutUser = async () => {
      try {
        await signOut(auth);
        console.log(user);
        router.push("/login");
      } catch (e) {
        alert(e.message);
      }
    };
    return { ...toRefs(state), signOutUser };
  },
};
</script>
