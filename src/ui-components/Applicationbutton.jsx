/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function Applicationbutton(props) {
  const { overrides, ...rest } = props;
  const letstalkOnClick = useNavigateAction({ type: "url", url: "/lobby" });
  return (
    <Flex
      className="button-text"
      gap="10px"
      direction="row"
      width="359px"
      height="105px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Applicationbutton")}
      {...rest}
      onClick={() => {
        letstalkOnClick();
      }}
  >
      <Text
        className="button-text"
        fontFamily="Inter"
        fontSize="32px"
        fontWeight="600"
        textTransform="uppercase"
        lineHeight="38.727272033691406px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="100%"
        height="100%"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="10px 10px 10px 10px"
        whiteSpace="pre-wrap"
        children="Let’s talk"
        onClick={() => {
          letstalkOnClick();
        }}
        {...getOverrideProps(overrides, "Let\u2019s talk")}
      ></Text>
    </Flex>
  );
}
