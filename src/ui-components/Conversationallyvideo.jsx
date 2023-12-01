/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image } from "@aws-amplify/ui-react";
import conversationally_logo_video from "./images/conversationally_logo_video.mp4"
export default function Conversationallyvideo(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      position="relative"
      border="1px SOLID rgba(255,255,255,0.1)"
      borderRadius="2px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(245,233,227,1)"
      {...getOverrideProps(overrides, "Conversationallyvideo")}
      {...rest}
    >
      <video
          style={{ maxWidth: "100%", width: "800px", margin: "0 auto" }}
          autoPlay
          playsInline
          loop
          muted
          controls
          alt="All the devices"
          src={conversationally_logo_video}
        />

    </Flex>
  );
}
