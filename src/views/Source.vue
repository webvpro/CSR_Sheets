<template>
  <div class="container mx-auto">
    <div class="mx-6 mt-3 text-sm breadcrumbs">
      <ul>
        <li><router-link to="/sources">Sources</router-link></li>
        <li v-if="route.params.id">
          <router-link :to="`/source/${route.params.id}`">
            {{ source.name }}
          </router-link>
        </li>
        <li v-if="route.params.name" class="capitalize">
          {{ route.params.name }}
        </li>
      </ul>
    </div>
    <router-view :key="route.fullPath" />
  </div>
</template>

<script>
import { toRefs, reactive, computed, provide, ref, watchEffect } from "vue";
import { useRoute } from "vue-router";
import useCollection from "@/modules/use-collection";

export default {
  setup() {
    const state = reactive({
      errors: [],
      sourceId: "",
      docRef: {},
      loading: false,
      source: {},
    });
    const route = useRoute();
    const sourceName = ref();
    const routeParams = ref();
    const { documentData, document } = useSourceDocument("sources", {
      onMount: true,
      documentId: route.params.id,
    });
    state.source = computed(() => documentData);
    state.sourceDoc = computed(() => document);
    provide("sourceDoc", state.sourceDoc);
    watchEffect(() => {
      routeParams.value = route.params;
    });

    return {
      ...toRefs(state),
      route,
      sourceName,
    };
  },
};
</script>
