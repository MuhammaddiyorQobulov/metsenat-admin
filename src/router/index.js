import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import DashboardTab from "@/views/Home/DashboardTab.vue";
import SponsorsList from "@/views/Home/Sponsor/SponsorsList.vue";
import StudentsList from "@/views/Home/students/StudentsList.vue";
import SponsorDetail from "@/views/Home/Sponsor/SponsorDetail.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: { requiresAuth: true },
    children: [
      {
        path: "",
        name: "dashboard",
        component: DashboardTab,
      },
      {
        path: "sponsors",
        name: "sponsors",
        component: SponsorsList,
      },
      {
        path: "students",
        name: "students",
        component: StudentsList,
      },
    ],
  },
  {
    path: "/sponsor-detail/:id",
    name: "sponsor-detail",
    component: SponsorDetail,
    meta: { requiresAuth: true },
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notFound",
    component: NotFoundView,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
function isAuthenticated() {
  return !!localStorage.getItem("token");
}

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!isAuthenticated()) {
      next({
        path: "/login",
        query: { redirect: to.fullPath },
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
