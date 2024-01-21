import React from "react";

const Alert = ({ params }: { params: { componentName: string } }) => {
  return <div>sekarang berada di {params.componentName}</div>;
};

export default Alert;
