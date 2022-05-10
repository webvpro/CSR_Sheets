<template>
  <Disclosure v-slot="{ open }" as="nav" class="bg-gray-800">
    <div class="w-full mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="flex items-stretch justify-start">
          <router-link to="/">
            <div class="flex-shrink-0 flex items-center">
              <v-icon
                name="gi-magic-portal"
                label="Stormbringer POC"
                class="inline-block"
                scale="2"
                fill="#fcba03"
              />
              <h2 class="text-yellow-400 font-bold">Stormbringer POC</h2>
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
            class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
          >
            <span class="sr-only">View notifications</span>
            <BellIcon class="h-6 w-6 text-blue-500" aria-hidden="true" />
          </button>

          <!-- Profile dropdown -->
          <Menu as="div" class="ml-3 relative">
            <div>
              <MenuButton
                class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                <span class="sr-only">Open user menu</span>
                <v-icon
                  name="gi-winged-sword"
                  class="h-8 w-8 rounded-full bg-purple-500"
                  alt=""
                />
              </MenuButton>
            </div>
            <transition
              enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <MenuItems
                class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
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
                <MenuItem v-slot="{ active }" v-if="!user">
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
import { getAuth, signOut } from "@firebase/auth";
import { useRouter } from "vue-router";

import { useAuthState } from "@/modules/firebase";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/vue/outline";

export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    BellIcon,
    MenuIcon,
    XIcon,
  },
  setup() {
    const { user } = useAuthState();
    const auth = getAuth();
    const router = useRouter();
    const signOutUser = async () => {
      try {
        await signOut(auth);
        console.log(user);
        router.push("/login");
      } catch (e) {
        alert(e.message);
      }
    };
    return { user, signOutUser };
  },
};
</script>
