/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text } from "@aws-amplify/ui-react";
import aastha from "./images/aastha.jpeg"
import linkedin from "./images/linkedin.png"
export default function Aastha(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="32px"
      direction="column"
      width="unset"
      height="535px"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Isabel")}
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
        src={aastha}
        {...getOverrideProps(overrides, "Rectangle 8")}
      ></Image>
      {/* <a href="https://www.linkedin.com/in/aasthakh/" target="_blank" rel="noreferrer"> */}
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="600"
        color="rgba(69,67,16,1)"
        textTransform="uppercase"
        lineHeight="0px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="0px"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        >Aastha Khanna <a href="https://www.linkedin.com/in/aasthakh/" target="_blank" rel="noreferrer">
      <img height="18px" width="18px" src={linkedin} alt="Aastha Khanna"></img>
    </a></Text>

      <Text
        fontFamily="Inter"
        fontSize="18px"
        // fontWeight="400"
        color="rgba(69,67,16,1)"
        textTransform="uppercase"
        lineHeight="10px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="0px"
        top="-24px"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
      >
        CEO
      </Text>

      <Text
        fontFamily="Inter"
        fontSize="18px"
        color="rgba(69,67,16,1)"
        // lineHeight="33.049102783203125px"
        textAlign="left"
        display="block"
        height="120px"
        top="-32px"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 5px 0px 5px"
        whiteSpace="pre-wrap"
        children="Aastha Khanna is a software development engineer at Amazon, currently working on Ring Virtual Security Guard security system."
        {...getOverrideProps(overrides, "jess matthews / product + UX")}
      ></Text>
    </Flex>
  );
}
