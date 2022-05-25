/* eslint-disable vue/no-parsing-error */ /* eslint-disable vue/valid-v-else */
<template>
  <form class="" @submit="saveForm">
    <!-- Divider container -->
    <div
      class="px-6 py-6 space-y-6 divide-y divide-gray-200 xs:py-0 xs:space-y-0"
    >
      <!-- Ablility name -->
      <div
        class="px-6 py-6 space-y-6 divide-y divide-gray-200 xs:py-0 xs:space-y-0"
      >
        <label for="name" class="block text-sm font-medium text-gray-700"
          >{{ formSettings.name }} Name</label
        >
        <div class="relative mt-4 rounded-md shadow-sm">
          <input
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

      <!-- Ablility description -->
      <div
        class="px-6 py-6 space-y-6 divide-y divide-gray-200 xs:py-0 xs:space-y-0"
      >
        <div>
          <label
            for="description"
            class="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
        </div>
        <div class="relative mt-1 rounded-md shadow-sm">
          <textarea
            v-model="description"
            name="description"
            rows="3"
            class="block w-full border border-gray-300 rounded-md shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
      </div>

      <fieldset>
        <div
          class="px-4 space-y-2 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:px-6 sm:py-5"
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
                      class="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                    />
                    <label
                      :for="key"
                      class="block ml-3 text-sm font-medium text-gray-700"
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
                  <div class="flex flex-wrap items-center">
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
                      class="block w-full py-2 pl-3 pr-10 mt-1 text-base border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                  <div class="flex flex-wrap items-center">
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
                        class="block border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 w-28 sm:text-sm"
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
                      class="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                    />
                    <label
                      :for="key"
                      class="block ml-3 text-sm font-medium text-gray-700"
                    >
                      {{ grp.label }}
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>
            <hr class="border-gray-200" />
            {{ categories.value }}
            <ability-cats
              input-name="categories"
              title="Categories"
              :item-list="categoryList"
              :selected-items="categories"
            />
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
          @click.prevent="resetForm"
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
import { inject, ref, reactive, toRefs, computed, watchEffect } from "vue";
import { useField, useForm } from "vee-validate";

import * as yup from "yup";
import AbilityMods from "@/components/form/fieldsets/abilityMods.vue";
import AbilityCats from "@/components/form/fieldsets/abilityCats.vue";
export default {
  components: {
    AbilityMods,
    AbilityCats,
  },

  setup() {
    const initState = {
      loading: false,
      error: "",
      form: {},
      formSettings: {},
      collectionDoc: {},
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
      categoryList: {
        ATTACKSKILL: { label: "Attack Skill" },
        COMPANION: { label: "Companion" },
        CONTROL: { label: "Control" },
        CRAFT: { label: "Craft" },
        CURE: { label: "Cure" },
        ENVIRONMENT: { label: "Environment" },
        INFORMATION: { label: "Information" },
        META: { label: "Meta" },
        MOVEMENT: { label: "Movement" },
        PROTECTION: { label: "Protection" },
        SENSES: { label: "Senses" },
        SPECIALATTACK: { label: "Special Attack" },
        SUPPORT: { label: "Support" },
        TASK: { label: "Task" },
        TRANSFORM: { label: "Transform" },
      },
    });
    const selectedMod = ref();
    const state = reactive({ ...initState });
    state.formSettings = inject("formSettings");
    state.collectionDoc = computed(() => inject("collectionDoc"));
    //form validation scheme
    const schema = yup.object({
      name: yup.string().required().min(6).label("Source Name"),
    });
    const { handleSubmit, resetForm, errors, setValues } = useForm({
      validationSchema: schema,
      initialValues: {
        abliliy_mod: [{}],
        categories: [],
        stat_pool: "",
        pool_cost: 0,
        description: "",
        ability_type: "",
      },
    });
    state.form = computed(() => inject("collectionForm"));
    const { value: name } = useField("name");
    const { value: description } = useField("description");
    const { value: tier_range } = useField("tier_range");
    const { value: stat_pool } = useField("stat_pool");
    const { value: categories } = useField("categories");
    const { value: pool_cost } = useField("pool_cost");
    const { value: ability_type } = useField("ability_type");
    const { value: ability_mod } = useField("ability_mod");
    // set init form values for edit

    const setSelectedChecks = (selAry, items) => {
      const itemsArray = Object.keys(items);
      const ary = Array(itemsArray.length);
      selAry.forEach((selVal) => {
        ary[itemsArray.findIndex((itm) => itm === selVal)] = selVal;
      });
      return ary;
    };
    const loadSelectedDocValues = (doc) => {
      if (doc.value.name) {
        const docVal = doc.value;
        return setValues({
          name: docVal.name,
          description: docVal.description
            ? docVal.description
            : ` Found in ${docVal.source} on Page #${docVal.pageNum}`,
          ability_type: docVal.abilityType ? docVal.abilityType : "ACTION",
          stat_pool: docVal.pool
            ? docVal.pool.toUpperCase()
            : docVal.statPool.toUpperCase(),
          pool_cost: docVal.cost ? docVal.cost : docVal.poolCost,
          tier_range: docVal.tierRange ? docVal.tierRange : "LOW",
          categories: docVal.categories
            ? setSelectedChecks(docVal.categories, formInputRefs.categoryList)
            : [],
        });
      }
    };
    function onInvalidSubmit({ values, errors, results }) {
      console.log(values); // current form values
      console.log(errors); // a map of field names and their first error message
      console.log(results); // a detailed map of field names and their validation results
    }
    const close = () => {
      resetForm();
      open.value = false;
    };
    const writeAbility = (formVals) => {
      state.form.value = {
        name: formVals.name,
        description: formVals.description,
        abilityType: formVals.ability_type,
        statPool: formVals.stat_pool,
        poolCost: formVals.pool_cost,
        tierRange: formVals.tier_range,
        categories: formVals.categories.filter((v) => v !== undefined),
      };
      open.value = close;
    };
    const saveForm = handleSubmit((values) => {
      writeAbility(values);
    }, onInvalidSubmit);
    watchEffect(() => loadSelectedDocValues(state.collectionDoc));
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
      selectedMod,
      AbilityMods,
      AbilityCats,
      loadSelectedDocValues,
      categories,
    };
  },
};
</script>
