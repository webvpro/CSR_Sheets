import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";
import {
  onAuthStateChanged,
  getRedirectResult,
  getIdTokenResult,
  initializeAuth,
  browserPopupRedirectResolver,
  browserLocalPersistence,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { reactive, computed, onMounted, onUnmounted, toRefs } from "vue";
import firebaseConfig from "../../firebase.config";

export const state = reactive({
  user: null,
  error: false,
  loading: true,
  claims: [],
});

export const firebaseApp = initializeApp(firebaseConfig.config);
export const db = getFirestore();
export const functions = getFunctions(firebaseApp);
export const auth = initializeAuth(firebaseApp, {
  persistence: browserLocalPersistence,
  popupRedirectResolver: browserPopupRedirectResolver,
});
connectFunctionsEmulator(functions, "localhost", 5001);
export const getUserState = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      unsubscribe();
      resolve(user);
    }, reject);
  });
};

export const hasAdmin = async () => {
  const tokens = auth.currentUser
    ? await auth.currentUser.getIdTokenResult()
    : { claims: {} };
  return !!tokens.claims.admin ?? false;
};
export const getAuthRedirect = () => {
  return getRedirectResult(auth);
};

export const googlePopupSignIn = () =>
  signInWithPopup(auth, new GoogleAuthProvider());

export const useAuthState = () => {
  state.user = null;
  state.error = false;
  state.loading = true;
  let unsubscribe;
  onMounted(() => {
    unsubscribe = auth.onAuthStateChanged(
      async (u) => {
        state.user = u ? { ...u } : null;
        if (u) {
          state.user.token = await getIdTokenResult(u);
        }
        state.loading = false;
      },
      (e) => {
        state.error = e;
        state.loading = false;
      }
    );
  });

  const startLoading = () => {
    state.loading = true;
  };

  const endLoading = () => {
    state.loading = false;
  };

  onUnmounted(() => unsubscribe());

  const isAuthenticated = computed(() => state.user != null);

  return { ...toRefs(state), isAuthenticated, startLoading, endLoading };
};
