<template>
  <form class="flex flex-col flex-grow h-full" @submit="saveForm">
    <div class="flex justify-end w-full">
      <button
        type="button"
        class="flex items-center justify-center w-6 h-6 duration-300 rounded-full drawer-button text-secondary-content bg-secondary z-90 bottom-10 right-8 drop-shadow-lg"
        @click.prevent="cancel"
      >
        <span class="sr-only">Close panel</span>
        <v-icon name="hi-solid-x" scale="1" title="" />
      </button>
    </div>
    <div class="px-6 py-6 space-y-6 xs:py-0 xs:space-y-0">
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
            v-model="name"
            name="name"
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
      <fieldset class="form-control">
        <legend class="text-lg font-bold">Books to Import</legend>
        <div class="form-control">
          <label class="justify-start cursor-pointer label">
            <input
              id="books"
              v-model="CSRD"
              aria-describedby="candidates-description"
              name="CSRD"
              type="checkbox"
              disabled
              checked
              class="checkbox"
            />
            <span class="text-xs capitalize label-text ml-1.5"
              >cypher system reference document</span
            >
          </label>
        </div>
        <div class="form-control">
          <label class="justify-start cursor-pointer label">
            <input
              id="books"
              aria-describedby="candidates-description"
              name="WAAMH"
              type="checkbox"
              class="checkbox"
            />
            <span class="text-xs capitalize label-text ml-1.5"
              >We are all mad here</span
            >
          </label>
        </div>
      </fieldset>
    </div>
    <div class="divider"></div>
    <!-- Action buttons -->
    <div class="flex justify-end flex-grow">
      <button type="button" class="w-1/3 mt-auto btn" @click.prevent="cancel">
        Cancel
      </button>
      <button type="submit" class="w-1/3 mt-auto ml-2 btn btn-primary">
        {{ sourceId ? `Save` : `Create` }}
      </button>
    </div>
  </form>
</template>

<script>
import { ref, reactive, toRefs, watchEffect, watch, computed } from "vue";
import { useField, useForm, Field } from "vee-validate";
import * as yup from "yup";
import useSourceDoc from "@/modules/use-doc";

export default {
  name: "SourceForm",
  components: {
    Field,
  },
  props: {
    sourceId: { type: String, default: "" },
  },
  emits: ["CancelForm"],
  async setup(props, { emit }) {
    const initState = {
      loading: false,
      error: "",
      form: {},
      source: {},
      pubs: ["WAAMD"],
    };
    const CSRD = true;
    const state = reactive({ ...initState });
    const docId = ref(props.sourceId);
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
    const loadDocument = async (id) => {
      return id ? await getDocument(id) : (docId.value = "");
    };
    //form validation scheme
    const schema = yup.object({
      name: yup.string().required().min(6).label("Setting Name"),
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
        emit("CancelForm", docId.value);
      }
    });

    const { value: name } = useField("name");
    const { value: description } = useField("description");

    function onInvalidSubmit({ values, errors, results }) {
      console.log(values); // current form values
      console.log(errors); // a map of field names and their first error message
      console.log(results); // a detailed map of field names and their validation results
    }
    const cancel = (evt) => {
      emit("CancelForm", evt.target.value);
      docId.value = "";
    };
    const saveForm = handleSubmit((values, { resetForm }) => {
      //save doc
      saveDocument(values);
      resetForm();
    }, onInvalidSubmit);
    return {
      open,
      cancel,
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
