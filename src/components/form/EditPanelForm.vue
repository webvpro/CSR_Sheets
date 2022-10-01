<template>
  <FormSchema v-model="model" :schema="schema" @submit.prevent="submit">
    <button type="submit">Subscribe</button>
  </FormSchema>
</template>

<script>
import FormSchema from "@formschema/native";
import schema from "./schemas/example-schema.json";

export default {
  components: {
    FormSchema,
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
          descriptor: {
            id: "ABCD",
            name: "Clever",
            description: "CSR Page 133",
            sub: {},
          },
          type: { id: "arkus123", name: "Arkus", description: "NDES page 133" },
          focus: {
            id: "focus-123",
            name: "Entertains",
            description: "CSR page 133",
          },
          pools: [
            { name: "Might", base: 10, current: 10 },
            { name: "Speed", base: 10, current: 10 },
            { name: "Intellect", base: 10, current: 10 },
            { name: "TestO", base: 10, current: 10 },
          ],
        },
        schema,
      },
      {
        _uid: "nameblock2",
        component: "NameBlock",
        headline: "Name",
      },
      {
        _uid: "nameblock3",
        component: "NameBlock",
        headline: "Name",
      },
      {
        _uid: "nameblock4",
        component: "NameBlock",
        headline: "Name",
      },
    ]);
    const Formstate = reactive({
      openForm: false,
      loading: false,
      game: { live: false, id: "1234XYZ" },
      jsonSchema: {},
      data: {},
      blockId: "",
    });

    const editBlock = (id) => {
      state.blockId = id;
      console.log(state);
      state.openForm = true;
    };

    provide(
      "formState",
      computed(() => Formstate)
    );
    provide("editBlock", editBlock);

    const { user } = useAuthState();

    return {
      user,
      open,
      blocks,
      ...toRefs(Formstate),
    };
  },
};
</script>
