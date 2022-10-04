<template>
  <div id="page-top" class="h-full my-3 drawer drawer-end scroll-mt-0">
    <input
      id="setting-form-drawer"
      v-model="toggleSourceDrawer"
      type="checkbox"
      class="drawer-toggle"
    />
    <div class="overflow-hidden drawer-content">
      <div class="container justify-center w-full mx-auto">
        <div
          class="grid justify-center grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4"
        >
          <setting-card
            v-for="setting in sources"
            :key="setting.id"
            setting-img="https://source.unsplash.com/random/400x225"
            :setting-data="setting"
            @open-setting="editSource(setting.id)"
            @view-setting="gotoSource(setting.id)"
          />
        </div>
        <label
          for="setting-form-drawer"
          title="Create Source"
          class="fixed z-[5] flex items-center justify-center text-4xl duration-300 rounded-full w-9 h-9 md:w-16 md:h-16 drawer-button text-secondary-content bg-secondary bottom-1.5 right-1.5 drop-shadow-lg hover:bg-primary-focus hover:drop-shadow-2xl hover:animate-bounce"
          @click.prevent="createSource"
        >
          <v-icon name="hi-solid-plus" label="View Source" scale="1.5" />
        </label>
      </div>
    </div>
    <div class="drawer-side">
      <label
        for="setting-form-drawer"
        class="overflow-hidden drawer-overlay"
      ></label>
      <div
        v-if="sourceId"
        class="h-full p-4 w-96 bg-base-100 text-base-content"
      >
        <!-- Sidebar content here -->
        <source-form
          :key="sourceId"
          :source-id="sourceId"
          @cancel-form="closeForm"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, toRefs, reactive, onMounted, provide, computed } from "vue";
import { useRouter } from "vue-router";
import useSourceCollection from "@/modules/use-collection";
import SourceForm from "@/components/form/SourceForm.vue";
import SettingCard from "@/components/ListCards/SettingCard.vue";
import { useAuthState, auth } from "@/modules/firebase";

export default {
  components: {
    SourceForm,
    SettingCard,
  },
  setup() {
    const router = useRouter();
    const toggleSourceDrawer = ref(false);
    const sourceId = ref("");
    const settings = ref("");
    const userId = ref("");
    const createSource = () => {
      sourceId.value = "";
      return (toggleSourceDrawer.value = true);
    };
    const closeForm = () => {
      sourceId.value = "";
      return (toggleSourceDrawer.value = false);
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
    const { user } = useAuthState();
    userId.value = computed(() => user.uid);
    const { getCollection, collectionData } = useSourceCollection("sources", {
      onMouted: true,
      where: ["owner", "==", auth.currentUser.uid],
    });
    state.sources = collectionData;
    settings.value = collectionData;

    onMounted(() => {
      getCollection();
    });
    return {
      createSource,
      editSource,
      closeForm,
      SourceForm,
      ...toRefs(state),
      gotoSource,
      sourceId,
      toggleSourceDrawer,
      SettingCard,
      settings,
      auth,
    };
  },
};
</script>
