<template>
  <div id="page-top" class="h-full my-3 drawer drawer-end scroll-mt-0">
    <div class="container justify-center w-full mx-auto">
      <div
        class="grid justify-center grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4"
      >
        <character-card
          character-img="https://source.unsplash.com/random/400x225"
          character-data=""
          @open-sheet="open(character.id)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, toRefs, reactive, onMounted, provide, computed } from "vue";
import { useRouter } from "vue-router";
import useSourceCollection from "@/modules/use-collection";
import CharacterCard from "@/components/ListCards/CharacterCard.vue";
import { useAuthState, auth } from "@/modules/firebase";

export default {
  components: {
    CharacterCard,
  },
  setup() {
    const router = useRouter();
    const toggleCharacterDrawer = ref(false);
    const characterId = ref("");
    const settings = ref("");
    const userId = ref("");
    const createCharacter = () => {
      characterId.value = "";
      return (toggleCharacterDrawer.value = true);
    };
    const closeForm = () => {
      characterId.value = "";
      return (toggleCharacterDrawer.value = false);
    };
    const editSource = (srcId) => {
      characterId.value = srcId;
      return (toggleCharacterDrawer.value = true);
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
      createCharacter,
      editSource,
      closeForm,
      CharacterForm,
      ...toRefs(state),
      gotoSource,
      characterId,
      toggleCharacterDrawer,
      CharacterCard,
      settings,
      auth,
    };
  },
};
</script>
