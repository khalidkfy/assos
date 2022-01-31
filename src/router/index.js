import { createRouter, createWebHistory } from "vue-router";
import login from "../views/auth/login.vue";
import add from "../views/beneficiary/add/add.vue";
import lists from "../views/beneficiary/list/list.vue";
import edit from "../views/beneficiary/edit/edit.vue";
import show from "../views/beneficiary/show/show.vue";
import subs from "../views/subscriptions/subscriptions.vue";
import listSubs from "../views/subscriptions/listubs.vue";
import print from "../views/subscriptions/print.vue";

const routes = [
  {
    path: "/",
    name: "login",
    component: login,
  }, 

  {
    path: "/subs",
    name: "subs",
    component: subs,
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
