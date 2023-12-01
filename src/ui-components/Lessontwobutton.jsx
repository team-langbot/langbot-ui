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
export default function Lessontwobutton(props) {
  const { overrides, ...rest } = props;
  const lessontwoColonletshavecoffeeOnClick = useNavigateAction({
    type: "url",
    url: "/ConvTwoSample",
  });
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
      backgroundColor="rgba(245,233,227,1)"
      onClick={() => {
        lessontwoColonletshavecoffeeOnClick();
      }}
    {...getOverrideProps(overrides, "Lessontwobutton")}
      {...rest}
    >
      <Text
        className="button-text"
        fontFamily="Inter"
        fontSize="24px"
        fontWeight="500"
        textTransform="uppercase"
        lineHeight="39.54689407348633px"
        textAlign="left"
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
        children="lesson two:&#xA;Get Coffee"
        onClick={() => {
          lessontwoColonletshavecoffeeOnClick();
        }}
        {...getOverrideProps(overrides, "lesson two: let\u2019s have coffee")}
      ></Text>
    </Flex>
  );
}
