/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import Lessonbuttons from "./Lessonbuttons";
// import Conversationallyphoto from "./Conversationallyphoto";
import Conversationallyvideo from "./Conversationallyvideo";
import { Flex } from "@aws-amplify/ui-react";
export default function Lobbymainframe(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="20px"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(245,233,227,1)"
      {...getOverrideProps(overrides, "Lobbymainframe")}
      {...rest}
    >
      <Lessonbuttons
        className="lessonButtons"
        display="flex"
        gap="35px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "lesson buttons")}
      ></Lessonbuttons>
      <Conversationallyvideo
        className="video"
        display="flex"
        gap="0px"
        direction="row"
        width="800px"
        height="440px"
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
