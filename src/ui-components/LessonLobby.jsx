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

import Lobbymainframe from "./Lobbymainframe";
import Triangle from "./Triangle";
import { Flex } from "@aws-amplify/ui-react";
export default function LessonLobby(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="10px 10px 0px 10px"
      backgroundColor="rgba(245,233,227,1)"
      {...getOverrideProps(overrides, "LessonLobby")}
      {...rest}
    >
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
        backgroundColor="rgba(245,233,227,1)"
        {...getOverrideProps(overrides, "router button")}
      ></Routerbutton>
      <ConversationallyHeader
        display="flex"
        gap="0px"
        direction="column"
        width="unset"
        height="70px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="10px 10px 10px 160px"
        {...getOverrideProps(overrides, "conversationally header")}
      ></ConversationallyHeader>
      <Lobbymainframe
        display="flex"
        gap="0px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(245,233,227,1)"
        {...getOverrideProps(overrides, "lobby main frame")}
      ></Lobbymainframe>
      <Triangle
        className="triangle"
        display="flex"
        gap="10px"
        direction="row"
        top="-150px"
        width="unset"
        height="474px"
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
