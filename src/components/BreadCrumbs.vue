<template>
  <nav class="bg-white border-b border-gray-200 flex" aria-label="Breadcrumb">
    <ol
      role="list"
      class="max-w-screen-xl w-full mx-auto px-4 flex space-x-4 sm:px-6 lg:px-8"
    >
      <li class="flex">
        <div class="flex items-center">
          <router-link
            v-slot="{ href }"
            custom
            :to="{ path: `/${bcPgs.rootPg.path}` }"
          >
            <a :href="href" class="text-gray-400 hover:text-gray-500">
              <v-icon
                name="gi-book-cover"
                class="flex-shrink-0 h-5 w-5"
                aria-hidden="true"
              />
              {{ bcPgs.rootPg?.title }}
            </a>
          </router-link>
        </div>
      </li>
      <li v-for="pg in bcPgs.pgs" :key="pg.title" class="flex">
        <div class="flex items-center">
          <svg
            class="flex-shrink-0 w-6 h-full text-gray-200"
            viewBox="0 0 24 44"
            preserveAspectRatio="none"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
          </svg>
          <router-link v-slot="{ href }" custom :to="{ path: pg.path }">
            <a
              v-show="pg.show"
              :href="href"
              class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
              aria-current="page"
            >
              {{ pg.title }}
            </a>
          </router-link>
        </div>
      </li>
    </ol>
  </nav>
</template>

<script>
import { inject, ref } from "vue";
export default {
  setup() {
    const source = ref(inject("source"));
    const bcPgs = ref(inject("crumbPgs"));
    console.log(bcPgs.value.pgs);
    return {
      bcPgs,
      source,
    };
  },
};
</script>
