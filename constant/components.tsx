import UISimpleAlert from "@/ui/alert/UiSimpleAlert";
import AlertWithAction from "@/ui/alert/AlertWithAction";
import RoundedAlert from "@/ui/alert/rounded-alert";
import ButtonGroup from "@/ui/button/button-group";
import SimpleCard from "@/ui/card/simple-card";
import Checkbox from "@/ui/button/button-checkbox";
import ButtonToggle from "@/ui/button/button-toggle";

const components = [
  {
    link: "/alert",
    name: "Alert",
    style: [
      {
        name: "simple alert",
        componentCode: <UISimpleAlert />,
      },
      {
        name: "rounded alert",
        componentCode: <RoundedAlert />,
      },
      // {
      //   name: "alert with action",
      //   componentCode: <AlertWithAction />,
      // },
    ],
  },
  {
    link: "/button",
    name: "Button",
    style: [
      {
        name: "Button group",
        componentCode: <ButtonGroup />,
      },
      {
        name: "Button toggle",
        componentCode: <ButtonToggle />,
      },
    ],
  },
  {
    link: "/card",
    name: "Card",
    style: [
      {
        name: "Simple Card",
        componentCode: <SimpleCard />,
      },
    ],
  },
];

export default components;
