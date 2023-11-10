/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import Routerbutton from "./Routerbutton";
import ConversationallyHeader from "./Conversationallyheader";
import Conversationally from "./Conversationally";
import Applicationbutton from "./Applicationbutton";
import Triangle from "./Triangle";
import { Flex } from "@aws-amplify/ui-react";
export default function LandingPage(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="10px 10px 0px 10px"
      backgroundColor="rgba(244,233,227,1)"
      {...getOverrideProps(overrides, "LandingPage")}
      {...rest}
    >
      {/* <ConversationallyHeader
        display="flex"
        gap="10px"
        direction="column"
        width="unset"
        height="120px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="10px 10px 10px 10px"
        {...getOverrideProps(overrides, "conversationally header")}
      ></ConversationallyHeader> */}
      <Routerbutton
        display="flex"
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-end"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="10px 10px 10px 10px"
        backgroundColor="rgba(244,233,227,1)"
        {...getOverrideProps(overrides, "router button")}
      ></Routerbutton>
      <Conversationally
        display="flex"
        gap="10px"
        direction="row"
        width="unset"
        height="520px"
        justifyContent="center"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="10px 10px 10px 10px"
        {...getOverrideProps(overrides, "conversationally")}
      ></Conversationally>
      <Applicationbutton
        display="flex"
        gap="10px"
        direction="row"
        width="359px"
        height="60px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="10px 10px 10px 10px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "application button")}
      ></Applicationbutton>
      <Triangle
        display="flex"
        gap="10px"
        direction="row"
        width="unset"
        height="274px"
        justifyContent="space-between"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 10px 10px 10px"
        {...getOverrideProps(overrides, "triangle")}
      >
      </Triangle>
    </Flex>
  );
}
