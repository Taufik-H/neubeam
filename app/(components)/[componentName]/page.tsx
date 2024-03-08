"use client";
import React from "react";
import components from "@/constant/components";
import ListComponents from "@/components/sections/list-components";
import { notFound } from "next/navigation";
import Link from "next/link";

import { getComponentCode } from "@/utils/getComponentCode";

const Components = ({ params }: { params: { componentName: string } }) => {
  const filteredComponents = components.filter((component) =>
    component.style.some((style) =>
      style.name.toLowerCase().includes(params.componentName.toLowerCase()),
    ),
  );

  if (filteredComponents.length === 0) {
    return notFound();
  }

  return (
    <div>
      {filteredComponents.map((component, index) => (
        <div key={index} className="">
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
      ))}
      {filteredComponents.length === 0 && (
        <p>
          Maybe you meant{" "}
          <Link href={`/${params.componentName}`}>
            <a>{params.componentName}</a>
          </Link>
        </p>
      )}
    </div>
  );
};

export default Components;
