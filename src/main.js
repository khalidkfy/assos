import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap"
import 'bootstrap/dist/js/bootstrap.bundle';
import  Axios from 'axios'
import VueNextSelect from 'vue-next-select'



/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
library.add(faUserSecret)

/* add font awesome icon component */
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

// basic URL for this page
Axios.defaults.baseURL = 'http://134.122.119.130:8080/';
// http://134.122.119.130:8080/
//http://association.test/
const app = createApp(App).use(store).use(router).use(VueSweetalert2);
app.component("v-select", VueNextSelect);
app.mixin({
  mounted() {
    this.permissions = JSON.parse(sessionStorage.getItem('permissions'));
  },
  data() {
    return {
      permissions:[]
    }
  },
  methods: {
    hasPermission(key) {
      let status = false;
      if (this.permissions) {
        this.permissions.forEach((permission) => {
          if (permission.name == key) {
            status = true;
          }
        })
      }
      return status;
    },
    getEvent(event) {
      let text = "";
      switch (event) {
        case "created":
          text = "إضافة";
          break;
        case "updated":
          text = "تعديل";
          break;
        case "deleted":
          text = "حذف";
          break;
      }
      return text;
    }
  },
});

app.mount("#app");
