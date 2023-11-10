/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useNavigateAction, } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Image, Text } from "@aws-amplify/ui-react";
import lets_have_coffee_header from "./images/lets_have_coffee_header.png";
import future from "./images/future.jpg";
import Routerbutton  from "./Routerbutton";

export default function ConvTwoSample(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="20px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(245,233,227,1)"
      {...getOverrideProps(overrides, "ConvTwoSample")}
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
      <Image
        width="800px"
        // height="366px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        // objectFit="cover"
        src={lets_have_coffee_header}
        {...getOverrideProps(overrides, "nice_to_meet_you_header 1")}
      ></Image>
        <Flex
          gap="0"
          direction="column"
          width="unset"
          height="800px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "your turn")}
        >
          <Image
            width="400px"
            // height="366px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            // objectFit="cover"
            src={future}
            {...getOverrideProps(overrides, "future")}
          ></Image>
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            // textTransform="uppercase"
            lineHeight="38.727272033691406px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Something cool is coming soon..."
            {...getOverrideProps(overrides, "Not ready...")}
          ></Text>
        </Flex>
    </Flex>
  );
}
