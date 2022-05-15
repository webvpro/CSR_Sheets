/* eslint-disable vue/no-parsing-error */ /* eslint-disable vue/valid-v-else */
<template>
  <div class="space-y-5 sm:mt-0">
    <label class="text-base font-medium text-gray-900"
      >Ability Modifications</label
    >
    <TransitionRoot :show="isShowing">
      <TransitionChild
        appear
        enter="transition-opacity ease-linear duration-800"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="transition-opacity ease-linear duration-800"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <fieldset v-for="(fieldset, fgk) in fields" :key="fgk" class="mt-4">
          <legend class="sr-only">{{ fgk }} Modifaction</legend>
          <div
            class="space-y-4 sm:flex sm:flex-grow sm:items-center sm:space-y-0 sm:space-x-3"
          >
            <div
              v-for="(mod, flk) in Object.keys(fieldset.value)"
              :key="flk"
              class="flex flex-grow items-stretch flex-wrap"
            >
              <label
                for="cost-pool"
                class="block w-full text-sm font-medium text-gray-700"
              >
                {{ fieldset.value[mod].label }}
              </label>
              <template v-if="fieldset.value[mod].type === 'text'">
                <div class="mt-1 mb-2 w-full">
                  <Field
                    :name="`${mod}[${fgk}][${flk}]`"
                    :type="fieldset.value[mod].type"
                    class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </template>
              <template v-else-if="fieldset.value[mod].type === 'number'">
                <div class="mt-1 mb-2 w-full">
                  <Field
                    :name="`${mod}[${fgk}][${flk}]`"
                    :type="fieldset.value[mod].type"
                    class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </template>
              <template v-else-if="fieldset.value[mod].type === 'select'">
                <div class="mt-1 mb-2 w-full">
                  <select
                    class="mt-1 block w-full pl-3 pr-6 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  >
                    <option
                      v-for="(item, ik) in fetchRef(fieldset.value[mod].ref)"
                      :key="ik"
                    >
                      {{ item.label }}
                    </option>
                  </select>
                </div>
              </template>
            </div>
            <div class="flex flex-shrink items-center flex-wrap">
              <label
                class="block w-12 text-sm font-medium text-gray-700 invisible"
              >
                Remove
              </label>
              <button
                type="button"
                class="inline-flex ml-auto items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-red-400 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400"
                @click="remove(fgk)"
              >
                <v-icon name="fa-trash-alt" scale="1" inverse="true" />
              </button>
            </div>
          </div>
        </fieldset>
      </TransitionChild>
      <TransitionChild
        appear
        enter="transition ease-in-out duration-800 transform"
        enter-from="-translate-x-full"
        enter-to="translate-x-0"
        leave="transition ease-in-out duration-800 transform"
        leave-from="translate-x-0"
        leave-to="-translate-x-full"
      >
        <hr class="border-gray-200" />
        <fieldset class="mt-4">
          <legend class="sr-only">Ablility Modifaction</legend>
          <div
            class="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10"
          >
            <div class="flex items-center flex-wrap">
              <label
                for="cost-pool"
                class="block w-full text-sm font-medium text-gray-700"
              >
                Ablility Modifaction
              </label>
              <select
                id="ability-mod"
                v-model="selectedMod"
                name="ability-mod"
                class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                @change="onModChange()"
              >
                <option :value="undefined">Select Modification</option>
                <option
                  v-for="(mod, key) in abilityMods"
                  :key="key"
                  :value="key"
                >
                  {{ mod.name }}
                </option>
              </select>
            </div>
            <div class="flex items-stretch flex-wrap">
              <label class="block w-full text-sm font-medium text-gray-700">
              </label>
              <button
                type="button"
                class="inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                @click="addMod()"
              >
                <PlusSmIconSolid class="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </fieldset>
      </TransitionChild>
    </TransitionRoot>
  </div>
</template>

<script>
import { ref, reactive, toRefs } from "vue";
import { Field, useFieldArray, FieldArray } from "vee-validate";
import { PlusSmIcon as PlusSmIconSolid } from "@heroicons/vue/solid";
import { TransitionRoot, TransitionChild } from "@headlessui/vue";
export default {
  components: {
    Field,
    PlusSmIconSolid,
    TransitionRoot,
    TransitionChild,
  },

  setup() {
    const formInputRefs = reactive({
      abilityMods: {
        TASKMOD: {
          name: "Task Modification",
          track: "SKILL",
          fields: {
            DESCRIPTION: { label: "Task Description", type: "text" },
            PROFICIENCY: {
              label: "Proficiency",
              type: "select",
              ref: "skillProficiencies",
            },
          },
        },
        ABLILITYMOD: {
          name: "Ablility Modification",
          track: "ABILITY",
          fields: {
            DESCRIPTION: { label: "Ablility Description", type: "text" },
          },
        },
        ARMORMOD: {
          name: "Armor Modification",
          track: "AROMR",
          fields: {
            DESCRIPTION: { label: "Armor Description", type: "text" },
            MOD: { label: "Mod", type: "number" },
          },
        },
        DAMAGEMOD: {
          name: "Damage Modification",
          track: "DAMAGE",
          fields: {
            DESCRIPTION: { label: "Damage Description", type: "text" },
            MOD: { label: "Mod", type: "number" },
          },
        },
        DEFENSEMOD: {
          name: "Defense Modification",
          track: "DEFENSE",
          fields: {
            DESCRIPTION: { label: "Defense Description", type: "text" },
            MOD: { label: "Mod", type: "number" },
          },
        },
        ATTACKMOD: {
          name: "Attack Modification",
          track: "ATTACK",
          fields: {
            DESCRIPTION: { label: "Attack Description", type: "text" },
            MOD: { label: "Mod", type: "number" },
          },
        },
        POOLMOD: {
          name: "Pool Modification",
          track: "POOL",
          fields: {
            POOL: { label: "Pool", type: "select", ref: "pools" },
            GRANT: { label: "Apply", type: "select", ref: "poolApplyOptions" },
            MOD: { label: "Mod", type: "number" },
          },
        },
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
      skillProficiencies: {
        HINDERED: { label: "Hindered" },
        UNTRAINED: { label: "Untrained" },
        TRAINED: { label: "Trained" },
        SPECIALIZED: { label: "Specialized" },
      },
      poolApplyOptions: {
        EDGE: { label: "to Edge" },
        TEMPPOOL: { label: "Temporary Points" },
        POOL: { label: "More points to Pool" },
      },
    });
    const selectedMod = ref();
    const onModChange = () => {
      console.log(`Mod Seleted Value:${selectedMod.value}`);
    };
    const fetchRef = (rv) => {
      console.log(rv);
      return formInputRefs[rv];
    };
    const addMod = () => {
      console.log({ ...formInputRefs.abilityMods[selectedMod.value].fields });
      if (selectedMod.value) {
        push({ ...formInputRefs.abilityMods[selectedMod.value].fields });
        console.log(fields);
      }
      selectedMod.value = undefined;
    };
    const { remove, push, fields } = useFieldArray("mods");
    return {
      open,
      close,
      ...toRefs(formInputRefs),
      Field,
      push,
      remove,
      PlusSmIconSolid,
      onModChange,
      selectedMod,
      addMod,
      fetchRef,
      FieldArray,
      fields,
      TransitionRoot,
      TransitionChild,
    };
  },
};
</script>
