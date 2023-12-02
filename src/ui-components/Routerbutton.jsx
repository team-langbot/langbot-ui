/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function Routerbutton(props) {
  const { overrides, ...rest } = props;
  const aboutUsOnClick = useNavigateAction({
    type: "url",
    url: "/about-us",
  });
  const homeOnClick = useNavigateAction({
    type: "url",
    url: "/",
  });
  const letsTalkOnClick = useNavigateAction({
    type: "url",
    url: "/lobby",
  });
  return (
    <Flex
      gap="10px"
      direction="row"
      // width="450px"
      // height="146px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="10px 10px 10px 10px"
      backgroundColor="rgba(244,233,227,1)"
      {...getOverrideProps(overrides, "Routerbutton")}
      {...rest}
    >
      <Text
        className="button-text"
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="400"
        textTransform="uppercase"
        // lineHeight="38.727272033691406px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="8px 8px 8px 8px"
        whiteSpace="pre-wrap"
        children="Home"
        {...getOverrideProps(overrides, "Home")}
        onClick={() => {
          homeOnClick();
        }}
      ></Text>
      {/* <Text
        className="button-text"
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="400"
        textTransform="uppercase"
        // lineHeight="38.727272033691406px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="8px 8px 8px 8px"
        whiteSpace="pre-wrap"
        children="Let's Talk"
        {...getOverrideProps(overrides, "Let's Talk")}
        onClick={() => {
          letsTalkOnClick();
        }}
      ></Text> */}
      <Text
        className="button-text"
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="400"
        textTransform="uppercase"
        // lineHeight="38.727272033691406px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="8px 8px 8px 8px"
        whiteSpace="pre-wrap"
        children="About Us"
        {...getOverrideProps(overrides, "About Us")}
        onClick={() => {
          aboutUsOnClick();
        }}

      ></Text>
    </Flex>
  );
}
