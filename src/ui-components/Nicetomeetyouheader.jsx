/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image } from "@aws-amplify/ui-react";
import nice_to_meet_you_header from "./images/nice_to_meet_you_header.png"
export default function Nicetomeetyouheader(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="10px 10px 10px 10px"
      {...getOverrideProps(overrides, "Nicetomeetyouheader")}
      {...rest}
    >
      <Image
        width="480px"
        // height="366px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        // objectFit="cover"
        src={nice_to_meet_you_header}
        {...getOverrideProps(overrides, "nice_to_meet_you_header 1")}
      ></Image>
    </Flex>
  );
}
