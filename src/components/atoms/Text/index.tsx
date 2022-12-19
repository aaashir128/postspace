import React from "react";
import { TextProps } from "../@types";
import "./styles.scss";

function TextString({
  text,
  align,
  weight,
  size,
  color,
  className,
  fontFamily,
  onClick,
  width,
  cursor,
  marginLeft,
  ...props
}: TextProps) {
  return (
    <div
      onClick={onClick}
      className={`text ${className}`}
      style={{
        // textAlign: align,
        fontWeight: weight,
        fontSize: size,
        color: color,
        fontFamily: fontFamily,
        width: width,
        cursor: cursor,
        marginLeft: marginLeft,
      }}
      {...props}
    >
      {text}
    </div>
  );
}

export default TextString;
