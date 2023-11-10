/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text } from "@aws-amplify/ui-react";
import jess from "./images/jess.jpeg"
import linkedin from "./images/linkedin.png"
export default function Jess(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="32px"
      direction="column"
      width="unset"
      height="500px"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Jess")}
      {...rest}
    >
      <Image
        width="95%"
        height="unset"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        grow="1"
        shrink="1"
        basis="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={jess}
        {...getOverrideProps(overrides, "Rectangle 9")}
      ></Image>
      <a href="https://www.linkedin.com/in/jessmatth/" target="_blank" rel="noreferrer">
        <Text
          fontFamily="Inter"
          fontSize="27.30817985534668px"
          fontWeight="600"
          color="rgba(69,67,16,1)"
          textTransform="uppercase"
          // lineHeight="33.049102783203125px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="300px"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="jess matthews /&#xA;product + UX"
          {...getOverrideProps(overrides, "jess matthews / product + UX")}
        ></Text>
      </a>
      <Text
        fontFamily="Inter"
        fontSize="14px"
        color="rgba(69,67,16,1)"
        lineHeight="33.049102783203125px"
        textAlign="left"
        display="block"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Jess Matthews is VP of Global Product Management at Gartner where she oversees a portfolio of data-driven products supporting HR executives."
        {...getOverrideProps(overrides, "jess matthews / product + UX")}
      ></Text>
      <a href="https://www.linkedin.com/in/jessmatth/" target="_blank" rel="noreferrer">
        <img height="32px" width="32px" src={linkedin} alt="Jess Mathews"></img>
      </a>

    </Flex>
  );
}
