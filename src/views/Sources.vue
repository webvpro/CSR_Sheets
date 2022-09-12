<template>
  <div class="flex-col justify-center max-w-6xl">
    <!-- Static sidebar for desktop -->
    <div
      class="container relative pt-5 pb-5 mx-auto border-b border-gray-200 sm:pb-0"
    >
      <div class="md:flex md:items-center md:justify-between">
        <h3 class="text-lg font-medium leading-6 text-gray-900">Sources</h3>
        <div class="flex mt-3 md:mt-0 md:absolute md:top-3 md:right-0">
          <button
            type="button"
            class="inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            @click.prevent="createSource"
          >
            Create
          </button>
        </div>
      </div>
      <div class="mt-4">
        <div class="sm:hidden">
          <label for="current-tab" class="sr-only">Select a tab</label>
          <select
            id="current-tab"
            name="current-tab"
            class="block w-full py-2 pl-3 pr-10 text-base border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option v-for="tab in tabs" :key="tab.name" :selected="tab.current">
              {{ tab.name }}
            </option>
          </select>
        </div>
        <div class="hidden sm:block">
          <nav class="flex -mb-px space-x-8">
            <a
              v-for="tab in tabs"
              :key="tab.name"
              :href="tab.href"
              :class="[
                tab.current
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                'whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm',
              ]"
              :aria-current="tab.current ? 'page' : undefined"
            >
              {{ tab.name }}
            </a>
          </nav>
        </div>
      </div>
    </div>
    <div
      class="container justify-center pt-5 pb-5 mx-auto border-b border-gray-200 sm:pb-0"
    >
      <div
        class="grid justify-center grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5"
      >
        <router-link
          v-for="source in sources"
          v-slot="{ href }"
          :key="source.id"
          :to="{ path: `/source/${source.id}` }"
        >
          <a
            :href="href"
            class="relative flex items-center px-6 py-5 space-x-3 bg-white border border-gray-300 rounded-lg shadow-sm hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
          >
            <div class="flex-shrink-0">
              {{ source.name }}
            </div>
            <div class="flex-1 min-w-0">
              <span class="absolute inset-0" aria-hidden="true" />
              <p class="text-sm font-medium text-gray-900">
                {{ source.books }}
              </p>
              <p class="text-sm text-gray-500 truncate">
                {{ source.hasCustom }}
              </p>
            </div>
          </a>
        </router-link>
      </div>
    </div>
    <SourceForm />
  </div>
</template>

<script>
import { ref, toRefs, reactive, onMounted, provide, computed } from "vue";
import { useRouter } from "vue-router";
import useSourceCollection from "@/modules/use-collection";
import SourceForm from "@/components/slideoutforms/SourceForm.vue";

const tabs = [
  { name: "All", href: "#", current: true },
  { name: "Core", href: "#", current: false },
  { name: "Numenera", href: "#", current: false },
  { name: "Strange", href: "#", current: false },
  { name: "Horror", href: "#", current: false },
  { name: "Fantasy", href: "#", current: false },
  { name: "Sci-Fi", href: "#", current: false },
  { name: "Homebrew", href: "#", current: false },
];
export default {
  components: {
    SourceForm,
  },
  setup() {
    const router = useRouter();
    const show = ref(false);
    const sourceId = ref("");
    const createSource = () => {
      sourceId.value = "";
      return (show.value = true);
    };
    const gotoSource = (docId) => {
      const path = `/source/${docId}`;
      router.push(path);
    };

    const state = reactive({
      sources: [],
      loading: false,
      openForm: false,
    });
    const { getCollection, collectionData } = useSourceCollection("sources", {
      onMouted: true,
      //where: ['name','==', '555']
    });
    state.sources = collectionData;

    provide("openForm", show);
    provide(
      "sourceId",
      computed(() => sourceId.value)
    );
    onMounted(() => {
      getCollection();
    });
    return {
      createSource,
      SourceForm,
      ...toRefs(state),
      tabs,
      gotoSource,
      sourceId,
    };
  },
};
</script>
