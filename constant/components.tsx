import UISimpleAlert from "@/ui/alert/UiSimpleAlert";

import RoundedAlert from "@/ui/alert/rounded-alert";
import ButtonGroup from "@/ui/button/button-group";
import SimpleCard from "@/ui/card/simple-card";

import ButtonToggle from "@/ui/button/button-toggle";
import CardImageFull from "@/ui/card/card-image-full";

import SimpleForm from "@/ui/form/simple-form";

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
      {
        name: " Full image Card",
        componentCode: <CardImageFull />,
      },
    ],
  },
  {
    link: "/form",
    name: "Form",
    style: [
      {
        name: "Simple form",
        componentCode: <SimpleForm />,
      },
    ],
  },
];

export default components;
