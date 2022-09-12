<!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
  <!--
    This example requires updating your template:

    ```
    <html class="h-full bg-gray-100">
    <body class="h-full overflow-hidden">
    ```
  -->
  <div class="flex flex-col h-full">
    <!-- Top nav-->
    <header class="relative flex items-center flex-shrink-0 h-16 bg-white">
      <!-- Logo area -->
      <div class="absolute inset-y-0 left-0 md:static md:flex-shrink-0">
        <a
          href="/admin"
          class="flex items-center justify-center w-16 h-16 bg-indigo-500 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-indigo-600 md:w-20"
        >
          <v-icon
            name="gi-all-seeing-eye"
            scale="3.88"
            class="w-full h-full text-yellow-500"
          />
        </a>
      </div>

      <!-- Picker area -->
      <div class="mx-auto md:hidden">
        <div class="relative">
          <label for="inbox-select" class="sr-only">Choose inbox</label>
          <select
            id="inbox-select"
            class="pl-3 pr-8 text-base font-medium text-gray-900 border-0 rounded-md bg-none focus:ring-2 focus:ring-indigo-600"
          >
            <option
              v-for="item in sidebarNavigation"
              :key="item.name"
              :selected="item.current"
            >
              {{ item.name }}
            </option>
          </select>
          <div
            class="absolute inset-y-0 right-0 flex items-center justify-center pr-2 pointer-events-none"
          >
            <ChevronDownIcon class="w-5 h-5 text-gray-500" aria-hidden="true" />
          </div>
        </div>
      </div>

      <!-- Menu button area -->
      <div
        class="absolute inset-y-0 right-0 flex items-center pr-4 sm:pr-6 md:hidden"
      >
        <!-- Mobile menu button -->
        <button
          type="button"
          class="inline-flex items-center justify-center p-2 -mr-2 text-gray-400 rounded-md hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <MenuIcon class="block w-6 h-6" aria-hidden="true" />
        </button>
      </div>

      <!-- Desktop nav area -->
      <div
        class="hidden md:flex md:min-w-0 md:flex-1 md:items-center md:justify-between"
      >
        <div class="flex-1 min-w-0">
          <div
            class="relative max-w-2xl text-gray-400 focus-within:text-gray-500"
          >
            <label for="desktop-search" class="sr-only">Search</label>
            <input
              id="desktop-search"
              type="search"
              placeholder="Search"
              class="block w-full pl-12 placeholder-gray-500 border-transparent focus:border-transparent focus:ring-0 sm:text-sm"
            />
            <div
              class="absolute inset-y-0 left-0 flex items-center justify-center pl-4 pointer-events-none"
            >
              <SearchIcon class="w-5 h-5" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile menu, show/hide this `div` based on menu open/closed state -->
      <TransitionRoot as="template" :show="mobileMenuOpen">
        <Dialog
          as="div"
          class="relative z-40 md:hidden"
          @close="mobileMenuOpen = false"
        >
          <TransitionChild
            as="template"
            enter="transition-opacity ease-linear duration-300"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <div
              class="hidden sm:fixed sm:inset-0 sm:block sm:bg-gray-600 sm:bg-opacity-75"
            />
          </TransitionChild>

          <div class="fixed inset-0 z-40">
            <TransitionChild
              as="template"
              enter="transition ease-out duration-150 sm:ease-in-out sm:duration-300"
              enter-from="transform opacity-0 scale-110 sm:translate-x-full sm:scale-100 sm:opacity-100"
              enter-to="transform opacity-100 scale-100  sm:translate-x-0 sm:scale-100 sm:opacity-100"
              leave="transition ease-in duration-150 sm:ease-in-out sm:duration-300"
              leave-from="transform opacity-100 scale-100 sm:translate-x-0 sm:scale-100 sm:opacity-100"
              leave-to="transform opacity-0 scale-110  sm:translate-x-full sm:scale-100 sm:opacity-100"
            >
              <DialogPanel
                class="fixed inset-0 z-40 w-full h-full bg-white sm:inset-y-0 sm:left-auto sm:right-0 sm:w-full sm:max-w-sm sm:shadow-lg"
                aria-label="Global"
              >
                <div
                  class="flex items-center justify-between h-16 px-4 sm:px-6"
                >
                  <a href="#">
                    <img
                      class="block w-auto h-8"
                      src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=500"
                      alt="Workflow"
                    />
                  </a>
                  <button
                    type="button"
                    class="inline-flex items-center justify-center p-2 -mr-2 text-gray-400 rounded-md hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                    @click="mobileMenuOpen = false"
                  >
                    <span class="sr-only">Close main menu</span>
                    <XIcon class="block w-6 h-6" aria-hidden="true" />
                  </button>
                </div>
                <div class="px-4 mx-auto mt-2 max-w-8xl sm:px-6">
                  <div
                    class="relative text-gray-400 focus-within:text-gray-500"
                  >
                    <label for="mobile-search" class="sr-only"
                      >Search all inboxes</label
                    >
                    <input
                      id="mobile-search"
                      type="search"
                      placeholder="Search all inboxes"
                      class="block w-full pl-10 placeholder-gray-500 border-gray-300 rounded-md focus:border-indigo-600 focus:ring-indigo-600"
                    />
                    <div
                      class="absolute inset-y-0 left-0 flex items-center justify-center pl-3"
                    >
                      <SearchIcon class="w-5 h-5" aria-hidden="true" />
                    </div>
                  </div>
                </div>
                <div class="px-2 py-3 mx-auto max-w-8xl sm:px-4">
                  <template v-for="item in navigation" :key="item.name">
                    <a
                      :href="item.href"
                      class="block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-100"
                      >{{ item.name }}</a
                    >
                    <a
                      v-for="child in item.children"
                      :key="child.name"
                      :href="child.href"
                      class="block py-2 pl-5 pr-3 text-base font-medium text-gray-500 rounded-md hover:bg-gray-100"
                      >{{ child.name }}</a
                    >
                  </template>
                </div>
                <div class="pt-4 pb-3 border-t border-gray-200">
                  <div class="flex items-center px-4 mx-auto max-w-8xl sm:px-6">
                    <div class="flex-shrink-0">
                      <img
                        class="w-10 h-10 rounded-full"
                        :src="user.imageUrl"
                        alt=""
                      />
                    </div>
                    <div class="flex-1 min-w-0 ml-3">
                      <div class="text-base font-medium text-gray-800 truncate">
                        {{ user.name }}
                      </div>
                      <div class="text-sm font-medium text-gray-500 truncate">
                        {{ user.email }}
                      </div>
                    </div>
                    <a
                      href="#"
                      class="flex-shrink-0 p-2 ml-auto text-gray-400 bg-white hover:text-gray-500"
                    >
                      <span class="sr-only">View notifications</span>
                      <BellIcon class="w-6 h-6" aria-hidden="true" />
                    </a>
                  </div>
                  <div class="px-2 mx-auto mt-3 space-y-1 max-w-8xl sm:px-4">
                    <a
                      v-for="item in userNavigation"
                      :key="item.name"
                      :href="item.href"
                      class="block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
                      >{{ item.name }}</a
                    >
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </TransitionRoot>
    </header>

    <!-- Bottom section -->
    <div class="flex flex-1 min-h-0 overflow-hidden">
      <!-- Narrow sidebar-->
      <nav
        aria-label="Sidebar"
        class="hidden md:block md:flex-shrink-0 md:overflow-y-auto md:bg-gray-800"
      >
        <div class="relative flex flex-col w-20 p-3 space-y-3">
          <a
            v-for="item in sidebarNavigation"
            :key="item.name"
            :href="item.href"
            :class="[
              item.current
                ? 'bg-gray-900 text-white'
                : 'text-gray-400 hover:bg-gray-700 text-white',
              'flex-shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-lg',
            ]"
          >
            <span class="sr-only">{{ item.name }}</span>
            <v-icon
              :name="item.icon"
              :title="item.name"
              class="w-6 h-6 text-gray-400 hover:text-white"
              aria-hidden="true"
            />
          </a>
        </div>
      </nav>

      <!-- Main area -->
      <main class="flex-1 min-w-0 border-t border-gray-200 lg:flex">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { ChevronDownIcon, SearchIcon } from "@heroicons/vue/solid";

const sidebarNavigation = [
  {
    name: "Users",
    href: "/admin/users",
    icon: "hi-solid-user-group",
    current: false,
  },
  {
    name: "Publications",
    href: "/admin/publications",
    icon: "hi-library",
    current: false,
  },
  {
    name: "Games",
    href: "admin/games",
    icon: "gi-tabletop-players",
    current: false,
  },
  {
    name: "Sheets",
    href: "/admin/sheets",
    icon: "fa-id-card",
    current: false,
  },
  {
    name: "Page Content",
    href: "/admin/pages",
    icon: "hi-solid-table",
    current: false,
  },
];

const mobileMenuOpen = ref(false);
</script>
