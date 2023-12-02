/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useNavigateAction, } from "@aws-amplify/ui-react/internal";
import { Flex, Image } from "@aws-amplify/ui-react";
import Routerbutton  from "./Routerbutton";
import Chatbot from 'react-chatbot-kit'
import { Amplify } from "aws-amplify";

import ActionProvider from './convOne/ActionProvider';
import MessageParser from './convOne/MessageParser';
import config from './convOne/config';
import nice_to_meet_you_lets_talk_header from "./images/nice_to_meet_you_lets_talk_header.png"

export default function ConvOneActual(props) {
  const { overrides, ...rest } = props;
  const yourTurnOnClick = useNavigateAction({
    type: "url",
    url: "/convOneActual",
  });

  sessionStorage.setItem("attemptNumber", 1);
  sessionStorage.setItem("stepNumber", 1);
  sessionStorage.setItem("conversationId", 1);
  sessionStorage.setItem("microGoalsAchieved", 0);

  return (
    <Flex
      gap="10px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(245,233,227,1)"
      {...getOverrideProps(overrides, "ConvOneActual")}
      {...rest}
    >
      <Routerbutton
        display="flex"
        gap="0px"
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
      <Flex
        gap="10px"
        direction="row"
        width="unset"
        height="60px"
        justifyContent="center"
        alignItems="center"
        position="relative"
        padding="10px 10px 10px 10px"
        {...rest}
      >
        <Image
          width="480px"
          // height="366px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          // objectFit="cover"
          src={nice_to_meet_you_lets_talk_header}
        ></Image>
      </Flex>

      <Flex
        gap="10px"
        direction="column"
        width="unset"
        height="600px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="20px 0px 0px 0px"
        {...getOverrideProps(overrides, "nice to meet you convo")}
      >
        <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser} />
      </Flex>
      <Flex
        gap="0"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "nice to meet you convo")}
      >
      </Flex>
    </Flex>
  );
}
