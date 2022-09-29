<template>
  <form class="flex-1" @submit="saveForm">
    <div class="w-full form-control">
      <label class="capitalize label">
        <span class="label-text">{{ itemType }} Title</span>
      </label>
      <div class="w-full indicator">
        <span
          v-if="errors.title"
          class="w-5 h-5 text-error-content indicator-item indicator-middle badge badge-error"
        >
          <v-icon name="hi-exclamation-circle" class="" aria-hidden="true" />
        </span>
        <Field
          v-model="title"
          name="title"
          type="text"
          class="w-full input input-bordered"
          placeholder="Title Here"
        />
      </div>
      <div
        class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
      ></div>
      <label class="mt-2 text-sm text-red-600">{{ errors.title }}</label>
    </div>
    <!-- item description -->
    <div class="form-control">
      <label class="label">
        <span class="label-text">Description</span>
      </label>
      <textarea
        v-model="description"
        name="description"
        class="w-full h-32 textarea textarea-bordered"
      ></textarea>
      <label class="label"> </label>
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

<script async setup>
import { reactive, ref } from "vue";
import { useField, useForm, Field } from "vee-validate";
import * as yup from "yup";
import useItemDoc from "@/modules/use-doc";
const props = defineProps({
  itemId: { default: "", type: String },
  itemType: { type: String, required: true },
  sourceId: { type: String, required: true },
});
const initState = {
  openForm: false,
  loading: false,
  error: "",
  form: {},
  item: {},
  source: {},
  collection: "",
};
const docId = ref("");
const state = reactive({ ...initState });
const saveDocument = (form) => {
  console.log(form);
};
const { getDocument, setDocument, documentData, error } = useItemDoc(
  `sources,${props.sourceId},${props.itemType}`,
  {
    documentId: props.itemId,
  }
);

const loadDocument = (id) => {
  console.log(`Loading Data for:${id}`);
  return id ? getDocument(id) : (docId.value = "");
};
//form validation scheme
const schema = yup.object({
  name: yup.string().required().min(6).label("Title"),
});

const { handleSubmit, resetForm, errors } = useForm({
  validationSchema: schema,
  initialValues: state.source,
});

const { value: name } = useField("title");
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
</script>
