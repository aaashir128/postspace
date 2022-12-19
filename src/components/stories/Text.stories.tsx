import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TextString } from "../atoms";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Text",
  component: TextString,
} as ComponentMeta<typeof TextString>;

export const Primary: ComponentStory<typeof TextString> = () => (
  <TextString
    onClick={() => console.log("alert")}
    // className={`text ${className}`}
    textAlign="align"
    fontWeight="500"
    fontSize=" size"
    color="color"
    fontFamily="fontFamily"
    width="width"
    cursor="cursor"
    marginLeft="marginLeft"
  >
    Button
  </TextString>
);
