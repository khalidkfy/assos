import { createRouter, createWebHistory } from "vue-router";
import login from "../views/auth/login.vue";
import add from "../views/beneficiary/add/add.vue";
import lists from "../views/beneficiary/list/list.vue";
import edit from "../views/beneficiary/edit/edit.vue";
import show from "../views/beneficiary/show/show.vue";
import subs from "../views/subscriptions/subscriptions.vue";
import listSubs from "../views/subscriptions/listubs.vue";
import print from "../views/subscriptions/print.vue";
import setting from "../views/subscriptions/setting.vue";
import setting2 from "../views/subscriptions/setting2.vue";
import edit2 from "../views/subscriptions/edit.vue";
// START source 
import addsurce from "../views/source/add.vue";
import addman from "../views/source/addman.vue";
import showsource from "../views/source/show.vue";
import shwsorce from "../views/source/shwsorce.vue";

// END source 

// START COURSE 
import addcourse from "../views/course/add.vue";
import addmanc from "../views/course/addman.vue";
import showcorse from "../views/course/show.vue";
import showpcorse from "../views/course/showcorse.vue";

// END COURSE 

// START AID 
import addaid from "../views/aid/add.vue";
import addmanaid from "../views/aid/addman.vue";
import showaid from "../views/aid/show.vue";
import showman from "../views/aid/showman.vue";
// END AID 
// start subscription
import addsubs from "../views/subscriptions/addsubs.vue";
import adds from "../views/subscriptions/new.vue";
import shwsubs from "../views/subscriptions/shwsubs.vue";


const routes = [
  {
    path: "/",
    name: "login",
    component: login,
  }, 

  {
    path: "/addsubs",
    name: "addsubs",
    component: addsubs,
  },

  
  {
    path: "/shwsubs",
    name: "shwsubs",
    component: shwsubs,
  },

  
  {
    path: "/adds",
    name: "adds",
    component: adds,
  },
  
  {
    path: "/showpcorse",
    name: "showpcorse",
    component: showpcorse,
  },
  
  {
    path: "/showsource",
    name: "showsource",
    component: showsource,
  },
  
  {
    path: "/showman",
    name: "showman",
    component: showman,
  },
  {
    path: "/showcorse",
    name: "showcorse",
    component: showcorse,
  },
  
  
  {
    path: "/shwsorce",
    name: "shwsorce",
    component: shwsorce,
  },
  
  {
    path: "/subs",
    name: "subs",
    component: subs,
  },
  {
    path: "/showaid",
    name: "showaid",
    component: showaid,
  },
  {
    path: "/addaid",
    name: "addaid",
    component: addaid,
  },
  {
    path: "/addmanaid",
    name: "addmanaid",
    component: addmanaid,
  },

  {
    path: "/addcourse",
    name: "addcourse",
    component: addcourse,
  },

  
  
  {
    path: "/addmanc",
    name: "addmanc",
    component: addmanc,
  },
  
  {
    path: "/addsurce",
    name: "addsurce",
    component: addsurce,
  },
  {
    path: "/addman",
    name: "addman",
    component: addman,
  },
  {
    path: "/listSubs",
    name: "listSubs",
    component: listSubs,
  },
  {
    path: "/print",
    name: "print",
    component: print,
  },
  {
    path: "/add",
    name: "add",
    component: add,
  },
  {
    path: "/table",
    name: "lists",
    component: lists,
  },
  {
    path: "/edit",
    name: "edit",
    component: edit,
  },
  {
    path: "/show",
    name: "show",
    component: show,
  },
  {
    path: "/setting",
    name: "setting",
    component: setting,
  },
  {
    path: "/setting2",
    name: "setting2",
    component: setting2,
  },
  {
    path: "/editsub",
    name: "editsub",
    component: edit2,
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// router.beforeEach((to, from, next) => {
// 	const token = sessionStorage.getItem("token");
// 	if (token) next('/login')
// 	else next()
//   })
export default router;
