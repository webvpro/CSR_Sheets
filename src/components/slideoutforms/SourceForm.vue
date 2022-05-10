<template>
  <TransitionRoot as="template" :show="open">
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
              <form
                class="h-full flex flex-col bg-white shadow-xl overflow-y-scroll"
                @submit="saveForm"
              >
                <div class="flex-1">
                  <!-- Header -->
                  <div class="px-4 py-6 bg-gray-50 sm:px-6">
                    <div class="flex items-start justify-between space-x-3">
                      <div class="space-y-1">
                        <DialogTitle class="text-lg font-medium text-gray-900">
                          Create Source
                        </DialogTitle>
                        <p class="text-sm text-gray-500">
                          Define a Cypher Ruleset
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
                    <!-- Source name -->
                    <div>
                      <label
                        for="name"
                        class="block text-sm font-medium text-gray-700"
                        >Source Name</label
                      >
                      <div class="mt-1 relative rounded-md shadow-sm">
                        <Field
                          v-model="name"
                          name="name"
                          type="text"
                          :class="{
                            formTextInput: true,
                            inputError: errors.name,
                          }"
                          placeholder="Source Name"
                        />
                        <div
                          v-if="errors.name"
                          class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
                        >
                          <v-icon
                            name="hi-exclamation-circle"
                            class="h-5 w-5 text-red-500"
                            aria-hidden="true"
                          />
                        </div>
                      </div>
                      <p class="mt-2 text-sm text-red-600">{{ errors.name }}</p>
                    </div>

                    <!-- Source description -->
                    <div
                      class="py-6 px-6 space-y-6 xs:py-0 xs:space-y-0 divide-y divide-gray-200"
                    >
                      <div>
                        <label
                          for="description"
                          class="block text-sm font-medium text-gray-700"
                        >
                          Description
                        </label>
                      </div>
                      <div class="mt-1 relative rounded-md shadow-sm">
                        <textarea
                          v-model="description"
                          name="description"
                          rows="3"
                          class="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
                        />
                      </div>
                    </div>

                    <!-- Imported Resources -->
                    <fieldset>
                      <div
                        class="space-y-2 px-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:px-6 sm:py-5"
                      >
                        <div class="col-span-3">
                          <legend class="text-sm font-medium text-gray-900">
                            Books to Import
                          </legend>
                        </div>
                        <div class="space-y-5 sm:col-span-3">
                          <div class="space-y-5 sm:mt-0">
                            <fieldset class="space-y-5">
                              <legend class="sr-only">Notifications</legend>
                              <div class="relative flex items-start">
                                <div class="flex items-center h-5">
                                  <input
                                    id="comments"
                                    aria-describedby="comments-description"
                                    name="comments"
                                    type="checkbox"
                                    class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                  />
                                </div>
                                <div class="ml-3 text-sm">
                                  <label
                                    for="comments"
                                    class="font-medium text-gray-700"
                                    >Comments</label
                                  >
                                  <p
                                    id="comments-description"
                                    class="text-gray-500"
                                  >
                                    Get notified when someones posts a comment
                                    on a posting.
                                  </p>
                                </div>
                              </div>
                              <div class="relative flex items-start">
                                <div class="flex items-center h-5">
                                  <input
                                    id="candidates"
                                    aria-describedby="candidates-description"
                                    name="candidates"
                                    type="checkbox"
                                    class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                  />
                                </div>
                                <div class="ml-3 text-sm">
                                  <label
                                    for="candidates"
                                    class="font-medium text-gray-700"
                                    >Candidates</label
                                  >
                                  <p
                                    id="candidates-description"
                                    class="text-gray-500"
                                  >
                                    Get notified when a candidate applies for a
                                    job.
                                  </p>
                                </div>
                              </div>
                              <div class="relative flex items-start">
                                <div class="flex items-center h-5">
                                  <input
                                    id="offers"
                                    aria-describedby="offers-description"
                                    name="offers"
                                    type="checkbox"
                                    class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                  />
                                </div>
                                <div class="ml-3 text-sm">
                                  <label
                                    for="offers"
                                    class="font-medium text-gray-700"
                                    >Offers</label
                                  >
                                  <p
                                    id="offers-description"
                                    class="text-gray-500"
                                  >
                                    Get notified when a candidate accepts or
                                    rejects an offer.
                                  </p>
                                </div>
                              </div>
                            </fieldset>
                          </div>
                          <hr class="border-gray-200" />
                          <div
                            class="flex flex-col space-between space-y-4 sm:flex-row sm:items-center sm:space-between sm:space-y-0"
                          >
                            <div class="flex-1">
                              <a
                                href="#"
                                class="group flex items-center text-sm text-indigo-600 hover:text-indigo-900 font-medium space-x-2.5"
                              >
                                <LinkIcon
                                  class="h-5 w-5 text-indigo-500 group-hover:text-indigo-900"
                                  aria-hidden="true"
                                />
                                <span> Copy link </span>
                              </a>
                            </div>
                            <div>
                              <a
                                href="#"
                                class="group flex items-center text-sm text-gray-500 hover:text-gray-900 space-x-2.5"
                              >
                                <QuestionMarkCircleIcon
                                  class="h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                  aria-hidden="true"
                                />
                                <span> Learn more about sharing </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                </div>

                <!-- Action buttons -->
                <div
                  class="flex-shrink-0 px-4 border-t border-gray-200 py-5 sm:px-6"
                >
                  <div class="space-x-3 flex justify-end">
                    <button
                      type="button"
                      class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      @click.prevent="close"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Create Source
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import { inject, ref, reactive, toRefs } from "vue";
import { useField, useForm, Field } from "vee-validate";
import * as yup from "yup";
import useCloudFunction from "@/modules/use-functions";
import {
  Dialog,
  DialogOverlay,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { LinkIcon, QuestionMarkCircleIcon } from "@heroicons/vue/solid";

export default {
  components: {
    Dialog,
    DialogOverlay,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
    LinkIcon,
    QuestionMarkCircleIcon,
    Field,
  },

  setup() {
    const initState = {
      loading: false,
      error: "",
    };
    const { callFunction, functionData } = useCloudFunction("createSource");

    const open = ref(inject("openForm"), false);
    const state = reactive({ ...initState });
    const saveDocument = async (form) => {
      state.loading = true;
      try {
        await callFunction(form);
        console.log(`Function return${functionData}`);
        open.value = false;
      } catch (error) {
        state.error = error;
      }
      state.loading = false;
    };

    //form validation scheme
    const schema = yup.object({
      name: yup.string().required().min(6).label("Source Name"),
    });

    const { handleSubmit, resetForm, errors } = useForm({
      validationSchema: schema,
      initialValues: state.source,
    });

    const { value: name } = useField("name");
    const { value: description } = useField("description");

    function onInvalidSubmit({ values, errors, results }) {
      console.log(values); // current form values
      console.log(errors); // a map of field names and their first error message
      console.log(results); // a detailed map of field names and their validation results
    }
    const close = () => {
      resetForm();
      open.value = false;
    };
    const saveForm = handleSubmit((values, { resetForm }) => {
      //save doc
      saveDocument(values);
      resetForm();
    }, onInvalidSubmit);
    return {
      open,
      close,
      ...toRefs(state),
      saveForm,
      name,
      description,
      resetForm,
      errors,
    };
  },
};
</script>
<style lang="postcss">
.formTextInput {
  @apply block w-full shadow-sm sm:text-sm;
  @apply focus:ring-indigo-500 focus:border-indigo-500;
  @apply border-gray-300 rounded-md;
}
.inputError {
  @apply border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500;
}
</style>
