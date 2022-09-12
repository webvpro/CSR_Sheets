/* eslint-disable vue/multi-word-component-names */
<template>
  <div class="bg-gray-50">
    <div
      class="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between"
    >
      <h2
        class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
      >
        <br />
        <span class="text-indigo-600">Stormbringer.poc</span>
      </h2>
    </div>
    <div class="relative py-16 bg-white sm:py-24 lg:py-32">
      <div
        class="max-w-md px-4 mx-auto text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl"
      >
        <h2
          class="text-base font-semibold tracking-wider text-indigo-600 uppercase"
        >
          <button class="btn">Hello daisyui</button>firebase
        </h2>
        <p
          class="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
        >
          Everything you need to play
        </p>
        <p class="mx-auto mt-5 text-xl text-gray-500 max-w-prose">
          Phasellus lorem quam molestie id quisque diam aenean nulla in.
          Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend
          condimentum id viverra nulla.
        </p>
        <div class="mt-12">
          <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div v-for="feature in features" :key="feature.name" class="pt-6">
              <div class="flow-root px-6 pb-8 rounded-lg bg-gray-50">
                <div class="-mt-6">
                  <div>
                    <span
                      class="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg"
                    >
                      <v-icon
                        :name="feature.icon"
                        scale="2"
                        class="w-full h-6 text-lg font-bold text-white"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                  <h3
                    class="mt-8 text-lg font-medium tracking-tight text-gray-900"
                  >
                    {{ feature.name }}
                  </h3>
                  <p class="mt-5 text-base text-gray-500">
                    Ac tincidunt sapien vehicula erat auctor pellentesque
                    rhoncus. Et magna sit morbi lobortis.
                  </p>
                  <div class="flex-1 w-full mt-8 lg:flex-shrink-0 lg:mt-0">
                    <div class="inline-flex rounded-md shadow">
                      <router-link :to="feature.path" class="page-button"
                        >More {{ feature.name }}</router-link
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const features = [
  { name: "Games", icon: "gi-winged-sword", path: "/games" },
  { name: "Characters", icon: "gi-character", path: "/sheet" },
  { name: "Sources", icon: "gi-bookshelf", path: "/sources" },
  { name: "Shopping", icon: "gi-shop", path: "/games" },
  { name: "News", icon: "gi-newspaper", path: "/games" },
  { name: "Streams", icon: "fa-youtube-square", path: "/games" },
];

export default {
  setup() {
    return {
      features,
    };
  },
};
</script>
