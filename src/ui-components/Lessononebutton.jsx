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
export default function Lessononebutton(props) {
  const { overrides, ...rest } = props;
  const lessononeColonNicetomeetyouOnClick = useNavigateAction({
    type: "url",
    url: "/convOneSample",
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
      backgroundColor="rgba(247,238,231,1)"
      {...getOverrideProps(overrides, "Lessononebutton")}
      {...rest}
    >
      <Flex
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 1")}
      >
        <Text
          fontFamily="Inter"
          fontSize="24px"
          fontWeight="500"
          color="rgba(69,67,16,1)"
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
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="lesson one:&#xA;Nice to meet you"
          onClick={() => {
            lessononeColonNicetomeetyouOnClick();
          }}
          {...getOverrideProps(overrides, "lesson one: Nice to meet you")}
        ></Text>
      </Flex>
    </Flex>
  );
}
