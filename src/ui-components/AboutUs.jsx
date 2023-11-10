/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import ConversationallyHeader from "./Conversationallyheader";
import Routerbutton from "./Routerbutton";
import Teammembers from "./Teammembers";
import { Flex } from "@aws-amplify/ui-react";
export default function AboutUs(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="37px"
      direction="column"
      width="unset"
      height="unset"
      // width="2157px"
      // height="1391px"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(245,233,227,1)"
      {...getOverrideProps(overrides, "AboutUs")}
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
        backgroundColor="rgba(244,233,227,1)"
        {...getOverrideProps(overrides, "router button")}
      ></Routerbutton>
      <ConversationallyHeader
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
      ></ConversationallyHeader>
      <Teammembers
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
        padding="25px 54px 25px 54px"
        backgroundColor="rgba(245,233,227,1)"
        {...getOverrideProps(overrides, "team members")}
      ></Teammembers>
    </Flex>
  );
}
