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
import upcourse from "../views/course/upcourse.vue";

// END COURSE

// START AID
import addaid from "../views/aid/add.vue";
import addmanaid from "../views/aid/addman.vue";
import showaid from "../views/aid/show.vue";
import showman from "../views/aid/showman.vue";
import upaid from "../views/aid/upaid.vue";
// END AID
// start subscription
import addsubs from "../views/subscriptions/addsubs.vue";
import adds from "../views/subscriptions/new.vue";
import shwsubs from "../views/subscriptions/shwsubs.vue";
import update from "../views/subscriptions/upsub.vue";

// end subsc
import sources from "../views/beneficiary/list/sources.vue";

// start edit
import incoedit from "../views/beneficiary/edit/incoedit.vue";

// start reports
import ReportsIndex from "../views/reports/index";
// end reports

// start settings
import SettingsIndex from "../views/settings/index";
import GovernoratesIndex from "../views/settings/governorates/index";
import GovernoratesForm from "../views/settings/governorates/form";
import DistrictIndex from "../views/settings/districts/index";
import DistrictForm from "../views/settings/districts/form";
import IncomesIndex from "../views/settings/incomes/index";
import IncomesForm from "../views/settings/incomes/form";
import CategsIndex from "../views/settings/categories/index";
import CategsForm from "../views/settings/categories/form";
import SpecsIndex from "../views/settings/specs/index";
import SpecsForm from "../views/settings/specs/form";
import HousingIndex from "../views/settings/housing/index";
import HousingForm from "../views/settings/housing/form";
import HousingTypeIndex from "../views/settings/housing_types/index";
import HousingTypeForm from "../views/settings/housing_types/form";
import FurnitureCasesIndex from "../views/settings/furniture_cases/index";
import FurnitureCasesForm from "../views/settings/furniture_cases/form";
import JobsIndex from "../views/settings/jobs/index";
import JobsForm from "../views/settings/jobs/form";
import PermissionsIndex from "../views/settings/permissions/index";
import PermissionsForm from "../views/settings/permissions/form";
import EmployeesIndex from "../views/settings/employees/index";
import EmployeesForm from "../views/settings/employees/form";
import EmployeesShow from "../views/settings/employees/show";
import LogsShow from "../views/settings/logs/index";
// end settings

const routes = [
  {
    path: "/",
    name: "login",
    component: login,
  },
  {
    path: "/update",
    name: "update",
    component: update,
  },
  {
    path: "/addsubs",
    name: "addsubs",
    component: addsubs,
  },
  {
    path: "/sources",
    name: "sources",
    component: sources,
  },

  {
    path: "/upaid",
    name: "upaid",
    component: upaid,
  },
  {
    path: "/upcourse",
    name: "upcourse",
    component: upcourse,
  },

  {
    path: "/incoedit",
    name: "incoedit",
    component: incoedit,
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
  {
    path: "/reports",
    name: "reports",
    component: ReportsIndex,
  },
  {
    path: "/settings",
    name: "settings",
    component: SettingsIndex,
  },
  {
    path: "/governorates",
    name: "settings.governorates.index",
    component: GovernoratesIndex,
  },
  {
    path: "/add-governorates",
    name: "settings.governorates.create",
    component: GovernoratesForm,
  },
  {
    path: "/edit-governorates",
    name: "settings.governorates.edit",
    component: GovernoratesForm,
  },
  {
    path: "/districts",
    name: "settings.districts.index",
    component: DistrictIndex,
  },
  {
    path: "/add-district",
    name: "settings.districts.create",
    component: DistrictForm,
  },
  {
    path: "/edit-district",
    name: "settings.districts.edit",
    component: DistrictForm,
  },
  {
    path: "/incomes",
    name: "settings.incomes.index",
    component: DistrictForm,
  },
  {
    path: "/incomes",
    name: "settings.incomes.index",
    component: IncomesIndex,
  },
  {
    path: "/add-incomes",
    name: "settings.incomes.create",
    component: IncomesForm,
  },
  {
    path: "/edit-incomes",
    name: "settings.incomes.edit",
    component: IncomesForm,
  },
  {
    path: "/categories",
    name: "settings.categs.index",
    component: CategsIndex,
  },
  {
    path: "/add-category",
    name: "settings.categs.create",
    component: CategsForm,
  },
  {
    path: "/edit-category",
    name: "settings.categs.edit",
    component: CategsForm,
  },
  {
    path: "/specialities",
    name: "settings.specs.index",
    component: SpecsIndex,
  },
  {
    path: "/add-speciality",
    name: "settings.specs.create",
    component: SpecsForm,
  },
  {
    path: "/edit-speciality",
    name: "settings.specs.edit",
    component: SpecsForm,
  },
  {
    path: "/housings",
    name: "settings.housings.index",
    component: HousingIndex,
  },
  {
    path: "/add-housing",
    name: "settings.housings.create",
    component: HousingForm,
  },
  {
    path: "/edit-housing",
    name: "settings.housings.edit",
    component: HousingForm,
  },
  {
    path: "/housing_types",
    name: "settings.housingTypes.index",
    component: HousingTypeIndex,
  },
  {
    path: "/add-housing_types",
    name: "settings.housingTypes.create",
    component: HousingTypeForm,
  },
  {
    path: "/edit-housing_types",
    name: "settings.housingTypes.edit",
    component: HousingTypeForm,
  },
  {
    path: "/furniture_cases",
    name: "settings.fur_cases.index",
    component: FurnitureCasesIndex,
  },
  {
    path: "/add-furniture_case",
    name: "settings.fur_cases.create",
    component: FurnitureCasesForm,
  },
  {
    path: "/edit-furniture_case",
    name: "settings.fur_cases.edit",
    component: FurnitureCasesForm,
  },
  {
    path: "/jobs",
    name: "settings.jobs.index",
    component: JobsIndex,
  },
  {
    path: "/add-jobs",
    name: "settings.jobs.create",
    component: JobsForm,
  },
  {
    path: "/edit-jobs",
    name: "settings.jobs.edit",
    component: JobsForm,
  },
  {
    path: "/permissions",
    name: "settings.permissions.index",
    component: PermissionsIndex,
  },
  {
    path: "/add-permission",
    name: "settings.permissions.create",
    component: PermissionsForm,
  },
  {
    path: "/edit-permission",
    name: "settings.permissions.edit",
    component: PermissionsForm,
  },
  {
    path: "/employees",
    name: "settings.employees.index",
    component: EmployeesIndex,
  },
  {
    path: "/add-employee",
    name: "settings.employees.create",
    component: EmployeesForm,
  },
  {
    path: "/edit-employee",
    name: "settings.employees.edit",
    component: EmployeesForm,
  },
  {
    path: "/show-employee",
    name: "settings.employees.show",
    component: EmployeesShow,
  },
  {
    path: "/logs",
    name: "settings.logs.index",
    component: LogsShow,
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
