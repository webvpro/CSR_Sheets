<template>
  <div id="page-top" class="pt-3 scroll-mt-0 drawer drawer-end">
    <input
      id="my-drawer-1"
      v-model="toggleSourceDrawer"
      type="checkbox"
      class="drawer-toggle"
    />
    <div class="drawer-content">
      <div class="container justify-center mx-auto">
        <div
          class="grid justify-center grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4"
        >
          <div
            v-for="source in sources"
            :key="source.id"
            class="justify-center w-8/12 sm:w-full card bg-primary text-primary-content justify-self-center"
          >
            <div class="card-body">
              <h2 class="card-title">{{ source.name }}</h2>
              <p>{{ source.description }}</p>
              <div class="justify-end card-actions">
                <label
                  for="my-drawer-1"
                  class="drawer-button btn btn-secondary btn-circle"
                  @click.prevent="editSource(source.id)"
                >
                  <v-icon
                    name="hi-solid-pencil-alt"
                    label="Edit Source"
                    scale="1.5"
                  />
                </label>

                <router-link
                  :key="source.id"
                  :to="{ path: `/source/${source.id}` }"
                >
                  <button class="btn btn-secondary btn-circle">
                    <v-icon name="hi-eye" label="View Source" scale="1.5" />
                  </button>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <label
          for="my-drawer-1"
          title="Create Source"
          class="fixed flex items-center justify-center text-4xl duration-300 rounded-full w-14 h-14 drawer-button text-secondary-content bg-secondary z-90 bottom-10 right-8 drop-shadow-lg hover:bg-primary-focus hover:drop-shadow-2xl hover:animate-bounce"
        >
          <v-icon name="hi-solid-plus" label="View Source" scale="1.5" />
        </label>
      </div>
    </div>
    <div class="drawer-side">
      <label for="my-drawer-1" class="drawer-overlay"></label>
      <ul
        class="w-3/4 h-screen p-4 overflow-y-auto md:w-96 md:max-w-lg menu bg-base-100 text-base-content"
      >
        <!-- Sidebar content here -->
        <source-form />
      </ul>
    </div>
  </div>
</template>

<script>
import { ref, toRefs, reactive, onMounted, provide, computed } from "vue";
import { useRouter } from "vue-router";
import useSourceCollection from "@/modules/use-collection";
import SourceForm from "@/components/form/SourceForm.vue";

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
    const toggleSourceDrawer = ref(false);
    const sourceId = ref("");
    const createSource = () => {
      sourceId.value = "";
      return (toggleSourceDrawer.value = true);
    };
    const editSource = (srcId) => {
      sourceId.value = srcId;
      return (toggleSourceDrawer.value = true);
    };
    const gotoSource = (docId) => {
      const path = `/source/${docId}`;
      router.push(path);
    };

    const state = reactive({
      sources: [],
      loading: false,
    });
    const { getCollection, collectionData } = useSourceCollection("sources", {
      onMouted: true,
      //where: ['name','==', '555']
    });
    state.sources = collectionData;

    provide(
      "selectedSourceId",
      computed(() => sourceId.value)
    );
    provide("openForm", toggleSourceDrawer);
    onMounted(() => {
      getCollection();
    });
    return {
      createSource,
      editSource,
      SourceForm,
      ...toRefs(state),
      tabs,
      gotoSource,
      sourceId,
      toggleSourceDrawer,
    };
  },
};
</script>
