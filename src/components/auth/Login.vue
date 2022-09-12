<template>
  <div
    class="flex items-center justify-center min-h-screen px-4 py-12 bg-gray-50 sm:px-6 lg:px-8"
  >
    <div class="w-full max-w-md space-y-8">
      <div class="text-center">
        <router-link class="w-auto mx-auto text-center" to="/">
          <v-icon
            class="p-1 bg-purple-600 border-2 rounded-full"
            name="gi-magic-portal"
            label="TTP Overlays"
            scale="5"
            fill="#fff"
          />
        </router-link>
        <h2 class="mt-6 text-3xl font-extrabold text-center text-gray-900">
          Sign in to your account
        </h2>
        <p class="mt-2 text-sm text-center text-gray-600">
          Or
          <a
            href="/signup"
            class="font-medium text-purple-600 hover:text-purple-500"
          >
            Create a new free account
          </a>
        </p>
      </div>
      <div>
        <button
          class="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-purple-600 border border-transparent rounded-md group hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          @click="googlePopupSignIn"
        >
          Login with Google
        </button>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="handleSubmit">
        <input type="hidden" name="remember" value="true" />
        <span
          v-if="message"
          class="flex items-center mt-1 ml-1 text-xs font-medium tracking-wide text-red-500"
        >
          {{ message }}
        </span>
        <div class="-space-y-px rounded-md shadow-sm">
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input
              id="email-address"
              v-model="email"
              name="email"
              type="email"
              autocomplete="email"
              required=""
              class="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Email address"
            />
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input
              id="password"
              v-model="password"
              name="password"
              type="password"
              autocomplete="current-password"
              required=""
              class="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Password"
            />
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              class="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
            />
            <label for="remember-me" class="block ml-2 text-sm text-gray-900">
              Remember me
            </label>
          </div>

          <div class="text-sm">
            <a
              href="#"
              class="font-medium text-purple-600 hover:text-purple-500"
            >
              Forgot your password?
            </a>
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-purple-600 border border-transparent rounded-md group hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
              <LockClosedIcon
                class="w-5 h-5 text-purple-500 group-hover:text-purple-400"
                aria-hidden="true"
              />
            </span>
            Sign in
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref, watch, computed } from "vue";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter, useRoute } from "vue-router";
import { useAuthState, auth, googlePopupSignIn } from "@/modules/firebase";
export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    const message = ref(null);
    const { user, startLoading } = useAuthState();
    const fromRoute = route.query.from ? route.query.from : "/";
    const routeAfterLogin = () => {
      router.push(fromRoute);
    };

    const handleSubmit = (e) => {
      const { email, password } = e.target.elements;
      startLoading();
      signInWithEmailAndPassword(auth, email.value, password.value)
        .then(() => {
          routeAfterLogin();
        })
        .catch((error) => {
          message.value = error.message;
        });
    };
    watch(user, (cv, ov) => {
      if (cv.uid) {
        routeAfterLogin();
      }
    });
    return { handleSubmit, googlePopupSignIn, user, message };
  },
};
</script>
