import { createRouter, createWebHistory } from "vue-router";
import RegistrationHome from "../views/RegistrationHome.vue";
import PANVerificationView from "../views/PANVerificationView.vue";
import BasicDetailsView from "../views/BasicDetailsView.vue";
import BankDetailsView from "../views/BankDetailsView.vue";
import LinkBankAccountView from "../views/LinkBankAccountView.vue";
import SearchBankView from "../views/SearchBankView.vue";
import SearchStateView from "../views/SearchStateView.vue";
import FallbackMessageView from "../views/FallbackMessageView.vue";
import NotFoundView from "../views/NotFoundView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: RegistrationHome,
  },
  {
    path: "/pan-verification",
    name: "pan-verification",
    component: PANVerificationView,
  },
  {
    path: "/basicdetails",
    name: "basic-details",
    component: BasicDetailsView,
  },
  {
    path: "/bankdetails",
    name: "bank-details",
    component: BankDetailsView,
  },
  {
    path: "/linkbankaccount",
    name: "link-a-bank-account",
    component: LinkBankAccountView,
  },
  {
    path: "/searchbank",
    name: "search-bank",
    component: SearchBankView,
  },
  {
    path: "/searchstate",
    name: "search-state",
    component: SearchStateView,
  },
  {
    path: "/fallback",
    name: "fallback-page",
    component: FallbackMessageView,
  },
  {
    path: "/:catchAll(.*)",
    name: "not-found",
    component: NotFoundView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
