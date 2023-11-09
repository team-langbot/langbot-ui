/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import Letstalkandhomerouter from "./Letstalkandhomerouter";
import Conversationallyheader from "./Conversationallyheader";
import Teammembers from "./Teammembers";
import { Flex } from "@aws-amplify/ui-react";
export default function AboutUs(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="37px"
      direction="column"
      width="2157px"
      height="1391px"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(245,233,227,1)"
      {...getOverrideProps(overrides, "AboutUs")}
      {...rest}
    >
      <Letstalkandhomerouter
        display="flex"
        gap="36px"
        direction="row"
        width="unset"
        height="94px"
        justifyContent="flex-end"
        alignItems="flex-end"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 30px 0px 30px"
        backgroundColor="rgba(245,233,227,1)"
        {...getOverrideProps(overrides, "let's talk and home router")}
      ></Letstalkandhomerouter>
      <Conversationallyheader
        display="flex"
        gap="10px"
        direction="column"
        width="unset"
        height="403px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="10px 10px 10px 10px"
        {...getOverrideProps(overrides, "conversationally header")}
      ></Conversationallyheader>
      <Teammembers
        display="flex"
        gap="10px"
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
