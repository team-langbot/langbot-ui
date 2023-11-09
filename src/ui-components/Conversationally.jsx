/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image } from "@aws-amplify/ui-react";
import conversationally_photo_logo from "./images/conversationally_photo.png"
export default function Conversationally(props) {
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
      {...getOverrideProps(overrides, "Conversationally")}
      {...rest}
    >
      <Image
        width="80%"
        // width="1495px"
        // height="1255px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        // objectFit="cover"
        src={conversationally_photo_logo}
        {...getOverrideProps(
          overrides,
          "Olive Green Pink Modern Minimalist Company Logo 1"
        )}
      ></Image>
    </Flex>
  );
}
