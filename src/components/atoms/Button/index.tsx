import React from "react";
import "./styles.scss";
import { Button } from "react-bootstrap";
import { ButtonProps } from "../@types";

function ButtonComponent({
  type,
  className,
  disabled,
  // onClick,
  bgcolor,
  width,
  opacity,
}: ButtonProps) {
  return (
    <Button
      //   {...props}
      //   type={type || "button"}
      disabled={disabled}
      className={`social-login-button ${className}`}
      // onClick={onClick}
      style={{ backgroundColor: bgcolor, width: width, opacity: opacity }}
    >
      {/* {props.children} */}
      Click Here
    </Button>
  );
}

export default ButtonComponent;
