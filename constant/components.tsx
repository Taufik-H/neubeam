import UISimpleAlert from "@/ui/alert/UiSimpleAlert";
import AlertWithAction from "@/ui/alert/AlertWithAction";
import RoundedAlert from "@/ui/alert/rounded-alert";

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
      {
        name: "alert with action",
        componentCode: <AlertWithAction />,
      },
    ],
  },
];

export default components;
