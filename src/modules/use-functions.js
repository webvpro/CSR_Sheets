import { functions } from "@/modules/firebase";
import { connectFunctionsEmulator, httpsCallable } from "firebase/functions";
import { reactive, toRefs } from "vue";
connectFunctionsEmulator(functions, "localhost", 5001);

export default function (cloudFunction) {
  let state = reactive({
    // error if one happens
    error: null,
    // the results of the query
    functionData: {},
    // if the query is loading or ot
    loading: false,
  });
  const fnCall = httpsCallable(functions, cloudFunction);
  const callFunction = (options) => {
    state.loading = true;
    fnCall(options)
      .then((result) => {
        state.functionData = result;
        state.loading = false;
      })
      .catch((error) => {
        state.functionError = error;
        state.loading = false;
      });
  };
  return {
    ...toRefs(state),
    callFunction: callFunction,
  };
}
