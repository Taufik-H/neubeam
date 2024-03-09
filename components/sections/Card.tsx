import React, { ReactNode } from "react";
interface CardProps {
  children?: ReactNode;
  /**
   * Width of the Card. Should be a valid Tailwind CSS width value.
   * For example: "1/2", "w-full", etc.
   */
  width?: string;
  /**
   * Height of the Card. Should be a valid Tailwind CSS height value.
   * For example: "1/2", "full", etc.
   */
  height: string;
  /**
   * Rounded of the Card. Should be a valid Tailwind CSS rounded value.
   * For example: "md", "full", etc.
   */
  rounded?: string;
  /**
   * Additional className for the Card.
   */
  className?: string;
  /**
   * Whether the Card should have a hover effect.
   */
  hover: boolean;
}
const Card = ({
  children,
  width,
  height,
  rounded,
  className,
  hover,
}: CardProps) => {
  return (
    <div className={`${width} ${className}`}>
      <div className={`relative w-full bg-slate-900 ${height} ${rounded}`}>
        <div
          className={`absolute flex h-full w-full cursor-default items-center justify-center  ${rounded} -left-1 -top-1 border border-slate-900 bg-white ${
            hover
              ? "cursor-default transition-all duration-200 ease-in-out hover:-left-0 hover:-top-0 lg:cursor-pointer"
              : ""
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Card;
