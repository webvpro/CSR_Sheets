<template>
  <div class="flex-col">
    <!-- Static sidebar for desktop -->
    <div
      class="relative container mx-auto pb-5 pt-5 border-b border-gray-200 sm:pb-0"
    >
      <div class="md:flex md:items-center md:justify-between">
        <h3 class="text-lg leading-6 font-medium text-gray-900">Sources</h3>
        <div class="mt-3 flex md:mt-0 md:absolute md:top-3 md:right-0">
          <button
            type="button"
            class="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            @click="open"
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
            class="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            <option v-for="tab in tabs" :key="tab.name" :selected="tab.current">
              {{ tab.name }}
            </option>
          </select>
        </div>
        <div class="hidden sm:block">
          <nav class="-mb-px flex space-x-8">
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
    <div class="container w-full mx-auto content-evenly p-5 fixed">
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div
          v-for="source in sources"
          :key="source.id"
          class="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
          @click="editSource(source.id)"
        >
          <div class="flex-shrink-0">
            {{ source.name }}
          </div>
          <div class="flex-1 min-w-0">
            <a href="#" class="focus:outline-none">
              <span class="absolute inset-0" aria-hidden="true" />
              <p class="text-sm font-medium text-gray-900">
                {{ source.books }}
              </p>
              <p class="text-sm text-gray-500 truncate">
                {{ source.hasCustom }}
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
    <SourceForm />
  </div>
</template>

<script>
import { ref, toRefs, reactive, onMounted, provide } from "vue";
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
];
export default {
  components: {
    SourceForm,
  },
  setup() {
    const show = ref(false);
    const sourceId = ref("");
    const open = () => (show.value = true);
    const editSource = (docId) => {
      sourceId.value = docId;
      return (show.value = true);
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
    provide("sourceId", sourceId);
    onMounted(() => {
      getCollection();
    });
    return {
      open,
      SourceForm,
      ...toRefs(state),
      tabs,
      editSource,
    };
  },
};
</script>
