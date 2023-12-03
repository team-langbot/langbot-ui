/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text } from "@aws-amplify/ui-react";
import mon from "./images/mon.jpeg"
import linkedin from "./images/linkedin.png"
export default function Mon(props) {
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
      {...getOverrideProps(overrides, "Mon")}
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
        src={mon}
        {...getOverrideProps(overrides, "Rectangle 8")}
      ></Image>
      {/* <a href="https://www.linkedin.com/in/mon-young-a510901/" target="_blank" rel="noreferrer"> */}
      <Text
        fontFamily="Inter"
        fontSize="24px"
        fontWeight="600"
        color="rgba(69,67,16,1)"
        textTransform="uppercase"
        // lineHeight="33.049102783203125px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="20px"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="mon young &#xA;CSO"
        ></Text>
      {/* </a> */}
      <Text
        fontFamily="Inter"
        fontSize="18px"
        color="rgba(69,67,16,1)"
        // lineHeight="33.049102783203125px"
        textAlign="left"
        display="block"
        height="60px"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 5px 0px 5px"
        whiteSpace="pre-wrap"
        children="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        {...getOverrideProps(overrides, "jess matthews / product + UX")}
      ></Text>
      <a href="https://www.linkedin.com/in/mon-young-a510901/" target="_blank" rel="noreferrer">
        <img height="32px" width="32px" src={linkedin} alt="Mon Young"></img>
      </a>
    </Flex>
  );
}
