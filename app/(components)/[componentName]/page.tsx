"use client";
import React from "react";
import components from "@/constant/components";
import ListComponents from "@/components/sections/list-components";
import { notFound } from "next/navigation";
import Link from "next/link";

import { getComponentCode } from "@/utils/getComponentCode";

const Components = ({ params }: { params: { componentName: string } }) => {
  const data = components;

  if (
    !components.some(
      (components) =>
        components.name.toLowerCase() === params.componentName.toLowerCase(),
    )
  ) {
    return notFound();
  }
  return (
    <div>
      {!components.some(
        (component) =>
          component.name.toLowerCase() === params.componentName.toLowerCase(),
      ) ? (
        <>
          <p>
            maybe you mean
            <Link href={params.componentName}>{params.componentName}</Link>
          </p>
        </>
      ) : (
        data.map((component, index) => (
          <div key={index}>
            {component.style
              .filter((style) =>
                style.name
                  .toLowerCase()
                  .includes(params.componentName.toLowerCase()),
              )
              .map((style, index) => (
                <div key={index}>
                  <ListComponents
                    code={getComponentCode(style.componentCode)}
                    name={style.name}
                  />
                </div>
              ))}
          </div>
        ))
      )}
    </div>
  );
};

export default Components;
