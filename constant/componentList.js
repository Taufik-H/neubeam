// componentsList.js
import AlertWithAction from "@/ui/alert/AlertWithAction";
import UiSimpleAlert from "@/ui/alert/UiSimpleAlert";
import SimpleBadge from "@/ui/badges/SimpleBadge";
import UiSimpleButton from "@/ui/buttons/UiSimpleButton";
import UiSimpleCard from "@/ui/cards/UiSimpleCard";
import SimpleFooter from "@/ui/footers/SimpleFooter";
import SimpleInput from "@/ui/inputs/SimpleInput";
import SimpleNavbar from "@/ui/navbars/SimpleNavbar";
import SimplePagination from "@/ui/pagination/SimplePagination";

export const alerts = [
  {
    component: <UiSimpleAlert />,
    name: "Simple Alert",
  },
  {
    component: <AlertWithAction />,
    name: "Alert with action",
  },
];

export const badges = [
  {
    component: <SimpleBadge />,
    name: "Simple Badge",
  },
];
export const buttons = [
  {
    component: <UiSimpleButton />,
    name: "Simple Button",
  },
];
export const cards = [
  {
    component: <UiSimpleCard />,
    name: "Simple Card",
  },
];

export const footers = [
  {
    component: <SimpleFooter />,
    name: "Simple Footer",
  },
];

export const inputs = [
  {
    component: <SimpleInput />,
    name: "Simple Input",
  },
];

export const navbars = [
  {
    component: <SimpleNavbar />,
    name: "Simple Navbar",
  },
];

export const paginations = [
  {
    component: <SimplePagination />,
    name: "Simple Pagination",
  },
];
