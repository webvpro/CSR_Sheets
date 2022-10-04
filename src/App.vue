<script setup>
import { useAuthState } from "@/modules/firebase";
import PageHeader from "@/components/PageHeader.vue";
import SkeletonLoader from "@/components/SkeletonLoader.vue";
import CsrdModal from "@/components/modals/csrdModal.vue";

const { user, error, loading, isAuthenicated } = useAuthState();
</script>
<template>
  <div class="flex flex-col h-screen">
    <page-header />
    <main
      id="main-body"
      class="relative flex flex-col flex-1 overflow-x-hidden overflow-y-auto"
    >
      <Suspense>
        <template #default>
          <router-view />
        </template>
        <template #fallback>
          <SkeletonLoader />
        </template>
      </Suspense>
    </main>
    <label for="mcg-modal">
      <img
        src="/assets/images/CompatiblewiththeCypherSystemLogocolorsmall.png"
        class="fixed z-[5] flex items-center justify-center md:w-16 md:h-16 w-9 h-9 bg-slate-100 mask mask-circle bottom-1.5 left-1.5 drop-shadow-lg hover:bg-slate-50 hover:drop-shadow-2xl hover:animate-pulse"
      />
    </label>
    <csrd-modal />
  </div>
</template>
