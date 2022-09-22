/* eslint-disable vue/multi-word-component-names */
<template>
  <div class="scroll-smooth">
    <div class="min-h-screen hero bg-base-200">
      <div class="flex-col hero-content lg:flex-row">
        <img
          src="/assets/images/strange-planet-bg.png"
          class="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 class="text-5xl font-bold">Coming Soon!</h1>
          <p class="py-6">
            Currate and Build Cypher System, Characters, Settings, Abililtes,
            Types, Cyphers, NPCs, and More!
          </p>
          <a
            href="javascript:document.getElementById('main-content').scrollIntoView(true);"
            class="btn btn-primary"
            >Get Started</a
          >
        </div>
      </div>
    </div>
    <div class="relative py-16 sm:py-24 lg:py-32">
      <div
        class="max-w-md px-4 mx-auto text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl"
      >
        <a id="main-content"></a>
        <h2 class="text-base font-semibold tracking-wider"></h2>
        <p class="mt-2 text-3xl font-extrabold tracking-tight">
          Everything you need to play
        </p>
        <p class="mx-auto mt-5 text-xl text-gray-500 max-w-prose">
          Phasellus lorem quam molestie id quisque diam aenean nulla in.
          Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend
          condimentum id viverra nulla.
        </p>
        <div class="mt-12 snap-start">
          <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div v-for="feature in features" :key="feature.name" class="pt-6">
              <div class="shadow-xl card card-compact w-96 bg-base-100">
                <div class="">
                  <div>
                    <span class="inline-flex items-center justify-center p-3">
                      <v-icon
                        :name="feature.icon"
                        scale="1"
                        class="btn btn-square btn-primary"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                  <div class="card-body">
                    <h2 class="card-title">
                      {{ feature.name }}
                    </h2>
                    <p class="mt-5 text-base">
                      Ac tincidunt sapien vehicula erat auctor pellentesque
                      rhoncus. Et magna sit morbi lobortis.
                    </p>
                    <div class="justify-end card-actions">
                      <router-link
                        :to="`${feature.path}/`"
                        class="btn btn-primary"
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
