import { createApp } from "vue";
import MasterLayout from "./layouts/MasterLayout.vue";
import router from "./router/routes";
const app = createApp(MasterLayout);

app.use(router);
app.mount("#appi");
