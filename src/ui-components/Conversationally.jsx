/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image } from "@aws-amplify/ui-react";
import Conversationallyvideo from "./Conversationallyvideo";
import conversationally_photo_logo from "./images/conversationally_photo.png"
export default function Conversationally(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0px"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Conversationally")}
      {...rest}
    >
      <Conversationallyvideo
        display="flex"
        gap="10px"
        direction="row"
        width="800px"
        height="445px"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="100"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "conversationally video")}
      ></Conversationallyvideo>
    </Flex>
  );
}
