<template>
  <form class="" @submit="saveForm">
    <!-- Divider container -->
    <div class="flex justify-end w-full">
      <button
        type="button"
        class="flex items-center justify-center w-12 h-12 text-4xl duration-300 rounded-full drawer-button text-secondary-content bg-secondary z-90 bottom-10 right-8 drop-shadow-lg"
        @click.prevent="close"
      >
        <span class="sr-only">Close panel</span>
        <v-icon name="hi-solid-x" scale="2" title="" />
      </button>
    </div>
    <div
      class="px-6 py-6 space-y-6 divide-y divide-gray-200 xs:py-0 xs:space-y-0"
    >
      <div>
        <label for="name" class="w-full font-medium text-gray-700 text-md"
          >Source Name</label
        >
        <div class="relative mt-6 rounded-md shadow-sm">
          <Field
            v-model="name"
            name="name"
            type="text"
            class="w-full max-w-xs input input-bordered"
            placeholder="Source Name"
          />
          <div
            v-if="errors.name"
            class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
          >
            <v-icon
              name="hi-exclamation-circle"
              class="w-5 h-5 text-red-500"
              aria-hidden="true"
            />
          </div>
        </div>
        <p class="mt-2 text-sm text-red-600">{{ errors.name }}</p>
      </div>

      <!-- Source description -->
      <div class="py-6 space-y-6 divide-y divide-gray-200 xs:py-0 xs:space-y-0">
        <div>
          <label
            for="description"
            class="w-full font-medium text-gray-700 text-md"
          >
            Description
          </label>
        </div>
        <div class="relative w-full mt-1 rounded-md shadow-sm">
          <textarea
            v-model="description"
            name="description"
            rows="3"
            class="w-full textarea textarea-primary"
          />
        </div>
      </div>

      <!-- Imported Resources -->
      <fieldset>
        <div
          class="px-4 space-y-2 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:px-6 sm:py-5"
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
                      id="books"
                      v-model="CSRD"
                      aria-describedby="candidates-description"
                      name="CSRD"
                      type="checkbox"
                      class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                      @click="CSRD = true"
                    />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="candidates" class="font-medium text-gray-700">
                      CSRD
                    </label>
                    <p id="csrd-description" class="text-gray-500">
                      CYPHER SYSTEM REFERENCE DOCUMENT 2022-07-15
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
                      class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                    />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="offers" class="font-medium text-gray-700"
                      >Offers</label
                    >
                    <p id="offers-description" class="text-gray-500">
                      Get notified when a candidate accepts or rejects an offer.
                    </p>
                  </div>
                </div>
              </fieldset>
            </div>
            <hr class="border-gray-200" />
            <div
              class="flex flex-col space-y-4 space-between sm:flex-row sm:items-center sm:space-between sm:space-y-0"
            >
              <div class="flex-1">
                <a
                  href="#"
                  class="group flex items-center text-sm text-indigo-600 hover:text-indigo-900 font-medium space-x-2.5"
                >
                  <LinkIcon
                    class="w-5 h-5 text-indigo-500 group-hover:text-indigo-900"
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
                    class="w-5 h-5 text-gray-400 group-hover:text-gray-500"
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

    <!-- Action buttons -->
    <div class="flex-shrink-0 px-4 py-5 border-t border-gray-200 sm:px-6">
      <div class="flex justify-end space-x-3">
        <button
          type="button"
          class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          @click.prevent="close"
        >
          Cancel
        </button>
        <button
          type="submit"
          class="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Save Collection
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import {
  inject,
  ref,
  reactive,
  toRefs,
  watchEffect,
  watch,
  computed,
} from "vue";
import { useField, useForm, Field } from "vee-validate";
import * as yup from "yup";
import useSourceDoc from "@/modules/use-doc";
import { LinkIcon, QuestionMarkCircleIcon } from "@heroicons/vue/solid";

export default {
  name: "SourceForm",
  components: {
    LinkIcon,
    QuestionMarkCircleIcon,
    Field,
  },
  async setup() {
    const initState = {
      openForm: false,
      loading: false,
      error: "",
      form: {},
      source: {},
    };
    const CSRD = true;
    const state = reactive({ ...initState });
    const docId = ref(inject("selectedSourceId"), "");
    state.openForm = inject("openForm");
    const saveDocument = (form) => {
      console.log(form);
    };
    const { getDocument, setDocument, documentData, error } = useSourceDoc(
      `sources`,
      {
        documentId: docId.value,
      }
    );
    state.source = computed(() => documentData);
    const loadDocument = (id) => {
      console.log(`Loading Data for:${id}`);
      return id ? getDocument(id) : (docId.value = "");
    };
    //form validation scheme
    const schema = yup.object({
      name: yup.string().required().min(6).label("Source Name"),
    });

    const { handleSubmit, resetForm, errors } = useForm({
      validationSchema: schema,
      initialValues: state.source,
    });
    watchEffect(() => loadDocument(docId.value));
    watch(state.form, (formData) => {
      if (formData) {
        console.log({ id: docId.value, ...formData.value });
        setDocument({ id: docId.value, ...formData.value });
        close();
      }
    });

    const { value: name } = useField("name");
    const { value: description } = useField("description");

    function onInvalidSubmit({ values, errors, results }) {
      console.log(values); // current form values
      console.log(errors); // a map of field names and their first error message
      console.log(results); // a detailed map of field names and their validation results
    }
    const close = () => {
      docId.value = "";
      state.source.value = {};
      state.openForm = false;
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
      docId,
      CSRD,
    };
  },
};
</script>
