<template>
  <div
    class="container grid grid-cols-1 gap-4 md:grid-cols-4 m-1 md:m-4 grid-rows-none"
  >
    <component
      :is="block.component"
      v-for="block in blocks"
      :key="block._uid"
      :block-id="block._uid"
      :block-data="block.data"
    ></component>
  </div>
</template>
<script>
import { toRefs, reactive, ref, provide, computed } from "vue";
import {
  Dialog,
  DialogOverlay,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { XIcon } from "@heroicons/vue/outline";
import { useAuthState } from "@/modules/firebase";
import NameBlock from "@/components/blocks/NameBlock.vue";
import TierBlock from "@/components/blocks/TierBlock.vue";
import StatusBlock from "@/components/blocks/StatusBlock.vue";

export default {
  components: {
    Dialog,
    DialogOverlay,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
    XIcon,
    NameBlock,
    TierBlock,
    StatusBlock,
  },
  setup() {
    const open = ref(true);
    const blocks = ref([
      {
        _uid: "nameblock1",
        component: "NameBlock",
        headline: "Name",
        data: {
          name: "Nubus",
          imageSrc: "../assets/images/ArmadaSpire.png",
          descriptor: {
            id: "ABCD",
            name: "Clever",
            description: "CSR Page 133",
            sub: { name: "elf", description: "pointy ears" },
          },
          type: { id: "arkus123", name: "Arkus", description: "NDES page 133" },
          focus: {
            id: "focus-123",
            name: "Entertains",
            description: "CSR page 133",
          },
        },
      },
    ]);
    const state = reactive({
      openForm: false,
      loading: false,
      game: { live: false, id: "1234XYZ" },
      schema: {},
      data: {},
      blockId: "",
    });

    const editBlock = (id) => {
      state.blockId = id;
      console.log(id);
      state.openForm = true;
    };

    provide(
      "formState",
      computed(() => state)
    );
    provide("editBlock", editBlock);

    const { user } = useAuthState();

    return {
      user,
      open,
      blocks,
      ...toRefs(state),
    };
  },
};
</script>
