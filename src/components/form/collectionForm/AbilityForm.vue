/* eslint-disable vue/no-parsing-error */ /* eslint-disable vue/valid-v-else */
<template>
  <form class="" @submit="saveForm">
    <!-- Divider container -->
    <div
      class="py-6 px-6 space-y-6 xs:py-0 xs:space-y-0 divide-y divide-gray-200"
    >
      <!-- Ablility name -->
      <div
        class="py-6 px-6 space-y-6 xs:py-0 xs:space-y-0 divide-y divide-gray-200"
      >
        <label for="name" class="block text-sm font-medium text-gray-700"
          >{{ formSettings.name }} Name</label
        >
        <div class="mt-4 relative rounded-md shadow-sm">
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

      <!-- Ablility description -->
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

      <fieldset>
        <div
          class="space-y-2 px-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:px-6 sm:py-5"
        >
          <div class="col-span-3">
            <legend class="text-base font-medium text-gray-900">
              Settings
            </legend>
          </div>
          <div class="space-y-5 sm:col-span-3">
            <div class="space-y-5 sm:mt-0">
              <label class="text-base font-medium text-gray-900"
                >Ability Type</label
              >
              <fieldset class="mt-4">
                <legend class="sr-only">Ablility Type</legend>
                <div
                  class="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10"
                >
                  <div
                    v-for="(type, key) in abilityTypes"
                    :key="key"
                    class="flex items-center"
                  >
                    <input
                      :id="key"
                      v-model="ability_type"
                      name="ability_type"
                      type="radio"
                      :checked="false"
                      :value="key"
                      class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                    />
                    <label
                      :for="key"
                      class="ml-3 block text-sm font-medium text-gray-700"
                    >
                      {{ type.label }}
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>
            <hr class="border-gray-200" />
            <div class="space-y-5 sm:mt-0">
              <label class="text-base font-medium text-gray-900"
                >Pool Cost</label
              >
              <fieldset class="mt-4">
                <legend class="sr-only">Stat Pool Cost</legend>
                <div
                  class="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10"
                >
                  <div class="flex items-center flex-wrap">
                    <label
                      for="stat_pool"
                      class="block w-full text-sm font-medium text-gray-700"
                    >
                      Pool
                    </label>
                    <select
                      id="stat_pool"
                      v-model="stat_pool"
                      name="stat_pool"
                      class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    >
                      <option value="">Stat Pool</option>
                      <option
                        v-for="(pool, key) in pools"
                        :key="key"
                        :value="key"
                      >
                        {{ pool.label }}
                      </option>
                    </select>
                  </div>
                  <div class="flex items-center flex-wrap">
                    <label
                      for="pool_cost"
                      class="block w-full text-sm font-medium text-gray-700"
                    >
                      Cost
                    </label>
                    <div class="mt-1">
                      <input
                        id="pool_cost"
                        v-model="pool_cost"
                        type="number"
                        name="pool_cost"
                        autocomplete="given-name"
                        class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-28 sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>
              </fieldset>
            </div>
            <hr class="border-gray-200" />
            <ability-mods />
            <hr class="border-gray-200" />
            <div class="space-y-5 sm:mt-0">
              <label class="text-base font-medium text-gray-900"
                >Tier Range</label
              >
              <p class="text-sm leading-5 text-gray-500">
                What Tier is best for this Ablility?
              </p>
              <fieldset class="mt-4">
                <legend class="sr-only">Tier Range</legend>
                <div
                  class="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10"
                >
                  <div
                    v-for="(grp, key) in tierGroup"
                    :key="key"
                    class="flex items-center"
                  >
                    <input
                      :id="key"
                      v-model="tier_range"
                      :name="`tier_range`"
                      type="radio"
                      :checked="false"
                      :value="key"
                      class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                    />
                    <label
                      :for="key"
                      class="ml-3 block text-sm font-medium text-gray-700"
                    >
                      {{ grp.label }}
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>
            <hr class="border-gray-200" />
            <ability-cats input-name="categories" title="Categories" />
          </div>
        </div>
      </fieldset>
    </div>

    <!-- Action buttons -->
    <div class="flex-shrink-0 px-4 border-t border-gray-200 py-5 sm:px-6">
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
          Save Collection
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import { inject, ref, reactive, toRefs } from "vue";
import { useField, useForm, Field } from "vee-validate";

import * as yup from "yup";
import AbilityMods from "@/components/form/fieldsets/abilityMods.vue";
import AbilityCats from "@/components/form/fieldsets/abilityCats.vue";
export default {
  components: {
    Field,
    AbilityMods,
    AbilityCats,
  },

  setup() {
    const initState = {
      loading: false,
      error: "",
      form: {},
      formSettings: {},
    };
    const formInputRefs = reactive({
      tierGroup: {
        LOW: { label: "Low", description: "Tier 1 or 2" },
        MID: { label: "Mid", description: "Tier 3 or 4" },
        HIGH: { label: "High", description: "Tier 5 or 6" },
      },
      pools: {
        MIGHT: { label: "Might" },
        SPEED: { label: "Speed" },
        INTELLECT: { label: "Intellect" },
      },
      abilityTypes: {
        ENABLER: { label: "Enabler" },
        ACTION: { label: "Action" },
      },
    });
    const selectedMod = ref();
    const state = reactive({ ...initState });
    state.formSettings = inject("formSettings");
    //form validation scheme
    const schema = yup.object({
      name: yup.string().required().min(6).label("Source Name"),
    });
    const { handleSubmit, resetForm, errors } = useForm({
      validationSchema: schema,
      initialValues: {
        abliliyMod: [],
        categories: [],
        stat_pool: "",
      },
    });
    const { value: name } = useField("name");
    const { value: description } = useField("description");
    const { value: tier_range } = useField("tier_range");
    const { value: stat_pool } = useField("stat_pool");
    const { value: pool_cost } = useField("pool_cost");
    const { value: ability_type } = useField("ability_type");
    const { value: ability_mod } = useField("ability_type");

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
      console.log(values);
      resetForm();
    }, onInvalidSubmit);
    return {
      open,
      close,
      ...toRefs(state),
      ...toRefs(formInputRefs),
      saveForm,
      name,
      description,
      tier_range,
      ability_type,
      stat_pool,
      pool_cost,
      ability_mod,
      resetForm,
      errors,
      Field,
      selectedMod,
      AbilityMods,
      AbilityCats,
    };
  },
};
</script>
