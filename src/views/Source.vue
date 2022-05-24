<template>
  <div class="flex-col">
    <div>
      <div>
        <img
          class="object-cover w-full h-32 lg:h-48"
          src="https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt=""
        />
      </div>
      <div
        class="container relative p-4 pt-5 pb-5 mx-auto border-b border-gray-200"
      >
        <div class="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
          <div class="flex">
            <v-icon
              class="w-24 h-24 bg-purple-600 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
              name="gi-at-sea"
              :label="source.name"
              scale="5"
              fill="#fff"
            />
          </div>
          <div
            class="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1"
          >
            <div class="flex-1 min-w-0 mt-6 sm:hidden md:block"></div>
            <div
              class="flex flex-col mt-6 space-y-3 justify-stretch sm:flex-row sm:space-y-0 sm:space-x-4"
            >
              <button
                type="button"
                class="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
              >
                <span>Delete</span>
              </button>
              <button
                type="button"
                class="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
              >
                <v-icon
                  class="p-1 bg-purple-600 border-2 rounded-full"
                  name="gi-settings-knobs"
                  label="Configure"
                  scale="1"
                  fill="#fff"
                />
                <span>Configure</span>
              </button>
            </div>
          </div>
        </div>
        <div class="flex-1 min-w-0 p-4 mt-6 sm:block">
          <router-link
            v-slot="{ href, navigate, isActive }"
            :to="{ path: `/source/${route.params.id}` }"
            custom
          >
            <h1
              :class="`${{
                active: isActive,
              }}text-2xl font-bold text-gray-900 truncate`"
            >
              <a :href="href" @click="navigate"> Source: {{ source.name }} </a>
            </h1>
          </router-link>
        </div>
      </div>
    </div>
    <div class="flex-1 min-w-0 p-4 mt-6 sm:block">
      <BreadCrumbs />
    </div>
    <div class="container relative p-4 pt-5 pb-5 mx-auto">
      <router-view :key="route.fullPath" />
    </div>
  </div>
</template>

<script>
import { toRefs, reactive, computed, provide, ref, watchEffect } from "vue";
import { useRoute } from "vue-router";
import useSourceDocument from "@/modules/use-doc";
import BreadCrumbs from "@/components/BreadCrumbs.vue";

export default {
  components: { BreadCrumbs },
  setup() {
    const state = reactive({
      errors: [],
      sourceId: "",
      docRef: {},
      loading: false,
      source: {},
    });
    const route = useRoute();
    const sourceNav = ref({});
    const sourceName = ref();
    const { documentData, document } = useSourceDocument("sources", {
      onMount: true,
      documentId: route.params.id,
    });
    state.source = computed(() => documentData);
    state.sourceDoc = computed(() => document);
    provide("sourceDoc", state.sourceDoc);
    provide("source", state.source);
    provide("crumbPgs", sourceNav);
    watchEffect(() => {
      sourceNav.value = {
        rootPg: {
          title: "All Sources",
          path: "sources",
          icon: "gi-book-self",
        },
        pgs: [
          {
            title: `${state.source.value.name} Collections`,
            path: `/source/${route.params.id}`,
            icon: "gi-book-cover",
            show: true,
          },
          {
            title: `${
              route.params.name
                ? route.params.name.charAt(0).toUpperCase() +
                  route.params.name.slice(1)
                : undefined
            } Collection `,
            path: `/source/${route.params.id}/collection/${route.params.name}`,
            icon: "gi-notebook",
            show: route.params.name !== undefined ? true : false,
          },
        ],
      };
    });

    return {
      BreadCrumbs,
      ...toRefs(state),
      route,
      sourceName,
    };
  },
};
</script>
