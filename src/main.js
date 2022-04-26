import { createApp } from "vue";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import * as GiIcons from "oh-vue-icons/icons/gi";
import * as FaIcons from "oh-vue-icons/icons/fa";
import * as HiIcons from "oh-vue-icons/icons/hi";
import VuePdf from "vue3-pdfjs";

import App from "./App.vue";
import router from "./router";
import "./tailwind.css";

const Gi = Object.values({ ...GiIcons });
const Fa = Object.values({ ...FaIcons });
const Hi = Object.values({ ...HiIcons });
addIcons(...Gi, ...Fa, ...Hi);

const app = createApp(App);
app.component("VIcon", OhVueIcon);
app.use(VuePdf);
app.use(router);
app.mount("#app");
