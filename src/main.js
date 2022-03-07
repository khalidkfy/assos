import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap"
import 'bootstrap/dist/js/bootstrap.bundle';
import  Axios from 'axios'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
library.add(faUserSecret)

/* add font awesome icon component */


import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

// basic URL for this page 
Axios.defaults.baseURL = 'https://associationapi.awtar-tech.com/';

createApp(App).use(store).use(router).use(VueSweetalert2).mount("#app");
