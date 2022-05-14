<template>
  <TransitionRoot as="template" :show="openForm">
    <Dialog as="div" class="fixed inset-0 overflow-hidden" @close="close">
      <div class="absolute inset-0 overflow-hidden">
        <DialogOverlay class="absolute inset-0" />

        <div class="fixed inset-y-0 right-0 pl-10 max-w-full flex sm:pl-16">
          <TransitionChild
            as="template"
            enter="transform transition ease-in-out duration-500 sm:duration-700"
            enter-from="translate-x-full"
            enter-to="translate-x-0"
            leave="transform transition ease-in-out duration-500 sm:duration-700"
            leave-from="translate-x-0"
            leave-to="translate-x-full"
          >
            <div class="w-screen max-w-2xl">
              <div
                class="h-full flex flex-col bg-white shadow-xl overflow-y-scroll"
              >
                <div class="flex-1">
                  <!-- Header -->
                  <div class="px-4 py-6 bg-gray-50 sm:px-6">
                    <div class="flex items-start justify-between space-x-3">
                      <div class="space-y-1">
                        <DialogTitle class="text-lg font-medium text-gray-900">
                          Edit {{ formSettings.name }}
                        </DialogTitle>
                        <p class="text-sm text-gray-500">
                          Define or Upadte an {{ formSettings.name }}
                        </p>
                      </div>

                      <div class="h-7 flex items-center">
                        <button
                          type="button"
                          class="text-gray-400 hover:text-gray-500"
                          @click.prevent="close"
                        >
                          <span class="sr-only">Close panel</span>
                          <v-icon name="hi-solid-x" scale="2" title="" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <!-- Divider container -->
                  <div
                    class="py-6 px-6 space-y-6 xs:py-0 xs:space-y-0 divide-y divide-gray-200"
                  >
                    <component :is="formSettings.component"></component>
                  </div>
                </div>
              </div>
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import { inject, ref, reactive, toRefs, computed, provide } from "vue";
import {
  Dialog,
  DialogOverlay,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { LinkIcon, QuestionMarkCircleIcon } from "@heroicons/vue/solid";
import DefaultForm from "@/components/form/collectionForm/DefaultForm.vue";
import AbilityForm from "@/components/form/collectionForm/AbilityForm.vue";

export default {
  components: {
    Dialog,
    DialogOverlay,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
    LinkIcon,
    QuestionMarkCircleIcon,
    DefaultForm,
    AbilityForm,
  },
  setup() {
    const state = reactive({
      collection: {},
      form: {},
      loading: false,
      openForm: false,
      errors: {},
    });
    const forms = {
      DEFAULT: {
        component: "DefaultForm",
        name: "Item",
        icon: "gi-3d-meeple",
      },
      ABLILTIES: {
        component: "AbilityForm",
        name: "Ability",
        href: "ablilties",
        icon: "gi-embrassed-energy",
        bgColor: "bg-red-600",
      },
      TYPES: {
        component: "DefaultForm",
        name: "Type",
        href: "types",
        icon: "gi-3d-meeple",
        bgColor: "bg-pink-600",
      },
      POWERSHIFTS: {
        component: "DefaultForm",
        name: "Power Shifts",
        href: "powershifts",
        icon: "gi-impact-point",
        bgColor: "bg-orange-600",
      },
      DESCRIPTORS: {
        component: "DefaultForm",
        name: "Descriptors",
        href: "descriptors",
        icon: "gi-artificial-intelligence",
        bgColor: "bg-green-600",
      },
      FOCI: {
        component: "DefaultForm",
        name: "Foci",
        href: "foci",
        icon: "gi-all-seeing-eye",
        bgColor: "bg-yellow-600",
      },
      CYPHERS: {
        component: "DefaultForm",
        name: "Cyphers",
        href: "cyphers",
        icon: "gi-abstract-077",
        bgColor: "bg-rose-600",
      },
      ARTIFACTS: {
        component: "DefaultForm",
        name: "Artifacts",
        href: "artifacts",
        icon: "gi-glowing-artifact",
        bgColor: "bg-lime-600",
      },
      EQUIPMENT: {
        component: "DefaultForm",
        name: "Equipment",
        href: "equipment",
        icon: "gi-light-backpack",
        bgColor: "bg-cyan-600",
      },
      SKILLS: {
        component: "DefaultForm",
        name: "Skills",
        href: "skills",
        icon: "gi-skills",
        bgColor: "bg-emerald-600",
      },
      POOLS: {
        component: "DefaultForm",
        name: "Pools",
        href: "pools",
        icon: "gi-impact-point",
        bgColor: "bg-violet-600",
      },
      TRACKERS: {
        component: "DefaultForm",
        name: "Trackers",
        href: "trackers",
        icon: "fa-chart-bar",
        bgColor: "bg-amber-600",
      },
    };
    const docId = ref(inject("collectionDocId"));
    state.openForm = inject("openForm");
    const collectionType = ref(inject("collectionKey"));
    const typeKey = computed(() => collectionType.value.toUpperCase());
    const formSettings = ref(forms[typeKey.value]);
    const close = () => {
      state.openForm = false;
      docId.value = "";
    };
    provide("formSettings", formSettings.value);
    return {
      close,
      ...toRefs(state),
      formSettings,
    };
  },
};
</script>
