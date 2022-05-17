/* eslint-disable vue/no-parsing-error */ /* eslint-disable vue/valid-v-else */
<template>
  <div class="space-y-5 sm:mt-0">
    <label class="text-base font-medium text-gray-900"
      >Ability Modifications</label
    >
    <TransitionRoot :show="true"> 
      <TransitionChild
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
              class="flex flex-wrap items-stretch flex-grow"
            >
              <label
                :about="`${mod}[${fgk}][${flk}]`"
                class="block w-full text-sm font-medium text-gray-700"
              >
                {{ fieldset.value[mod].label }}
              </label>
              <template v-if="fieldset.value[mod].type === 'text'">
                <div class="w-full mt-1 mb-2">
                  <Field
                    :name="`${mod}[${fgk}][${flk}]`"
                    :type="fieldset.value[mod].type"
                    class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </template>
              <template v-else-if="fieldset.value[mod].type === 'number'">
                <div class="w-full mt-1 mb-2">
                  <Field
                    :name="`${mod}[${fgk}][${flk}]`"
                    :type="fieldset.value[mod].type"
                    class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </template>
              <template v-else-if="fieldset.value[mod].type === 'select'">
                <div class="w-full mt-1 mb-2">
                  <select
                    class="block w-full pl-3 pr-6 mt-1 text-base border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
            <div class="flex flex-wrap items-center flex-shrink">
              <label
                class="invisible block w-12 text-sm font-medium text-gray-700"
              >
                Remove
              </label>
              <button
                type="button"
                class="inline-flex items-center p-1 ml-auto text-white bg-red-400 border border-transparent rounded-full shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400"
                @click="remove(fgk)"
              >
                <v-icon name="fa-trash-alt" scale="1" :inverse="true" />
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
            <div class="flex flex-wrap items-center">
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
                class="block w-full py-2 pl-3 pr-10 mt-1 text-base border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
            <div class="flex flex-wrap items-stretch">
              <label class="block w-full text-sm font-medium text-gray-700">
              </label>
              <button
                type="button"
                class="inline-flex items-center p-1 text-white bg-indigo-600 border border-transparent rounded-full shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                @click="addMod()"
              >
                <PlusSmIconSolid class="w-5 h-5" aria-hidden="true" />
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
        TASK: {
          name: "Task Modification",
          track: "SKILL",
          fields: {
            TASK_DESCRIPTION: { label: "Task Description", type: "text" },
            TASK_PROFICIENCY: {
              label: "Proficiency",
              type: "select",
              ref: "skillProficiencies",
            },
          },
        },
        ABILITY: {
          name: "Ablility Modification",
          track: "ABILITY",
          fields: {
            ABILITY_DESCRIPTION: {
              label: "Ablility Description",
              type: "text",
            },
          },
        },
        ARMOR: {
          name: "Armor Modification",
          track: "AROMR",
          fields: {
            ARMOR_DESCRIPTION: { label: "Armor Description", type: "text" },
            ARMOR_MOD: { label: "Mod", type: "number" },
          },
        },
        DAMAGE: {
          name: "Damage Modification",
          track: "DAMAGE",
          fields: {  
            DAMAGE_DESCRIPTION: { label: "Damage Description", type: "text" },
            DAMAGE_MOD: { label: "Mod", type: "number" },
          },
        },
        DEFENSE: {
          name: "Defense Modification",
          track: "DEFENSE",
          fields: {
            DEFENSE_DESCRIPTION: { label: "Defense Description", type: "text" },
            DEFENSE_MOD: { label: "Mod", type: "number" },
          },
        },
        ATTACK: {
          name: "Attack Modification",
          track: "ATTACK",
          fields: {
            ATTACK_DESCRIPTION: { label: "Attack Description", type: "text" },
            ATTACK_MOD: { label: "Mod", type: "number" },
          },
        },
        POOL: {
          name: "Pool Modification",
          track: "POOL",
          fields: {
            POOL_TYPE: { label: "Pool", type: "select", ref: "pools" },
            POOL_GRANT: {
              label: "Apply",
              type: "select",
              ref: "poolApplyOptions",
            },
            POOL_MOD: { label: "Mod", type: "number" },
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
