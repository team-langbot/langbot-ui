/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useNavigateAction, } from "@aws-amplify/ui-react/internal";
import Nicetomeetyouheader from "./Nicetomeetyouheader";
import { Flex, Icon, Image, Text } from "@aws-amplify/ui-react";
import person1 from "./images/person1.png";
import person2 from "./images/person2.png";
import Routerbutton from "./Routerbutton";
import lesson_1 from "./images/lesson_1.mp4"

export default function ConvOneSample(props) {
  const { overrides, ...rest } = props;
  const yourTurnOnClick = useNavigateAction({
    type: "url",
    url: "/convOneActual",
  });
  return (
    <Flex
      gap="20px"
      direction="column"
      width="unset"
      height="800px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(245,233,227,1)"
      {...getOverrideProps(overrides, "ConvOneSample")}
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
      <Nicetomeetyouheader
        display="flex"
        gap="0px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="10px 10px 10px 10px"
        {...getOverrideProps(overrides, "nice to meet you header")}
      ></Nicetomeetyouheader>
    <Flex
      gap="0px"
      direction="column"
      width="unset"
      top="-20px"
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
          style={{ maxWidth: "100%", width: "640px", margin: "0 auto" }}
          autoPlay
          playsInline
          loop
          controls
          alt="All the devices"
          src={lesson_1}
        />
        <Text
          className="button-text"
          fontFamily="Inter"
          fontSize="32px"
          fontWeight="400"
          textTransform="uppercase"
          // lineHeight="38.727272033691406px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="296px"
          height="unset"
          gap="unset"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="8px 8px 8px 8px"
          whiteSpace="pre-wrap"
          children="Your Turn Now..."
          {...getOverrideProps(overrides, "Your Turn Now...")}
          onClick={() => {
            yourTurnOnClick();
          }}
        ></Text>
    </Flex>
      {/* <Flex
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
        <Flex
          gap="26px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "man talking2311173")}
        >
          <Image
            width="128px"
            height="128px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            borderRadius="32px"
            padding="50px 0px 0px 0px"
            objectFit="unset"
            src={person1}
            {...getOverrideProps(overrides, "Rectangle 13403")}
          ></Image>
          <Icon
            width="623px"
            height="143px"
            viewBox={{ minX: 0, minY: 0, width: 623, height: 143 }}
            paths={[
              {
                d: "M623 71.5C623 110.988 483.537 143 311.5 143C139.463 143 0 110.988 0 71.5C0 32.0116 139.463 0 311.5 0C483.537 0 623 32.0116 623 71.5Z",
                fill: "rgba(255,254,254,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="125px"
            {...getOverrideProps(overrides, "Ellipse 12311222")}
          ></Icon>
          <Icon
            width="39.5px"
            height="203px"
            viewBox={{ minX: 0, minY: 0, width: 203, height: 39.5 }}
            paths={[
              {
                d: "M1.48074 12.5246C1.33611 11.3013 3.1004 10.9495 3.43599 12.1347L39.4282 139.246C39.4753 139.413 39.4785 139.588 39.4375 139.756L25.314 197.617C25.0498 198.699 23.4802 198.604 23.3494 197.497L1.48074 12.5246Z",
                fill: "rgba(255,254,254,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="108px"
            left="25px"
            transformOrigin="top left"
            transform="rotate(-90deg)"
            {...getOverrideProps(overrides, "Polygon 12311223")}
          ></Icon>
          <Text
            fontFamily="Inter"
            fontSize="24px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="29.045454025268555px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="39px"
            left="calc(50% - 227.5px - -127.75px)"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Hola, ¿cómo estás? (Hello, how are you?)"
          ></Text>
        </Flex>
        <Flex
          padding="0px 0px 0px 0px"
          width="724px"
          height="143px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "Group 64028")}
        >
          <Icon
            width="623px"
            height="143px"
            viewBox={{ minX: 0, minY: 0, width: 623, height: 143 }}
            paths={[
              {
                d: "M623 71.5C623 110.988 483.537 143 311.5 143C139.463 143 0 110.988 0 71.5C0 32.0116 139.463 0 311.5 0C483.537 0 623 32.0116 623 71.5Z",
                fill: "rgba(255,254,254,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="101px"
            {...getOverrideProps(overrides, "Ellipse 14029")}
          ></Icon>
          <Icon
            width="22.5px"
            height="154px"
            viewBox={{ minX: 0, minY: 0, width: 154, height: 22.5 }}
            paths={[
              {
                d: "M12.6162 10.9222C12.7692 9.71413 14.5396 9.7769 14.6067 10.9928L22.2428 149.341C22.3022 150.417 20.8513 150.813 20.3561 149.855L0.142964 110.776C0.0498564 110.596 0.0136402 110.392 0.0391133 110.191L12.6162 10.9222Z",
                fill: "rgba(255,254,254,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="88.5px"
            left="806px"
            transformOrigin="top left"
            transform="rotate(90deg)"
            {...getOverrideProps(overrides, "Polygon 14030")}
          ></Icon>
          <Text
            fontFamily="Inter"
            fontSize="24px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="29.045454025268555px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="39px"
            left="calc(50% - 337.5px - -195.75px)"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Estoy bien, gracias. (I am fine, thank you.)"
          ></Text>
          <Image
            width="128px"
            height="128px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            borderRadius="25px"
            top="59px"
            left="calc(50% - 217.5px - -595.75px)"
            padding="0px 0px 0px 0px"
            objectFit="unset"
            src={person2}
            {...getOverrideProps(overrides, "Rectangle 144032")}
            ></Image>
        </Flex>
        <Flex
          gap="26px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="20px 0px 0px 0px"
          {...getOverrideProps(overrides, "man talking2311173")}
        >
          <Image
            width="128px"
            height="128px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            borderRadius="32px"
            padding="50px 0px 0px 0px"
            objectFit="unset"
            src={person1}
            {...getOverrideProps(overrides, "Rectangle 13403")}
          ></Image>
          <Icon
            width="623px"
            height="143px"
            viewBox={{ minX: 0, minY: 0, width: 623, height: 143 }}
            paths={[
              {
                d: "M623 71.5C623 110.988 483.537 143 311.5 143C139.463 143 0 110.988 0 71.5C0 32.0116 139.463 0 311.5 0C483.537 0 623 32.0116 623 71.5Z",
                fill: "rgba(255,254,254,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="20px"
            left="125px"
            {...getOverrideProps(overrides, "Ellipse 12311222")}
          ></Icon>
          <Icon
            width="39.5px"
            height="203px"
            viewBox={{ minX: 0, minY: 0, width: 203, height: 39.5 }}
            paths={[
              {
                d: "M1.48074 12.5246C1.33611 11.3013 3.1004 10.9495 3.43599 12.1347L39.4282 139.246C39.4753 139.413 39.4785 139.588 39.4375 139.756L25.314 197.617C25.0498 198.699 23.4802 198.604 23.3494 197.497L1.48074 12.5246Z",
                fill: "rgba(255,254,254,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="128px"
            left="25px"
            transformOrigin="top left"
            transform="rotate(-90deg)"
            {...getOverrideProps(overrides, "Polygon 12311223")}
          ></Icon>
          <Text
            fontFamily="Inter"
            fontSize="24px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="29.045454025268555px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="50px"
            left="calc(50% - 157.5px - -57.75px)"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="¿Estás libre hoy? (Are you free today?)"
      ></Text>
        </Flex>
        <Flex
          padding="0px 0px 0px 0px"
          width="724px"
          height="143px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "Group 64028")}
        >
          <Icon
            width="623px"
            height="143px"
            viewBox={{ minX: 0, minY: 0, width: 623, height: 143 }}
            paths={[
              {
                d: "M623 71.5C623 110.988 483.537 143 311.5 143C139.463 143 0 110.988 0 71.5C0 32.0116 139.463 0 311.5 0C483.537 0 623 32.0116 623 71.5Z",
                fill: "rgba(255,254,254,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="101px"
            {...getOverrideProps(overrides, "Ellipse 14029")}
          ></Icon>
          <Icon
            width="22.5px"
            height="154px"
            viewBox={{ minX: 0, minY: 0, width: 154, height: 22.5 }}
            paths={[
              {
                d: "M12.6162 10.9222C12.7692 9.71413 14.5396 9.7769 14.6067 10.9928L22.2428 149.341C22.3022 150.417 20.8513 150.813 20.3561 149.855L0.142964 110.776C0.0498564 110.596 0.0136402 110.392 0.0391133 110.191L12.6162 10.9222Z",
                fill: "rgba(255,254,254,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="88.5px"
            left="806px"
            transformOrigin="top left"
            transform="rotate(90deg)"
            {...getOverrideProps(overrides, "Polygon 14030")}
          ></Icon>
          <Text
            fontFamily="Inter"
            fontSize="24px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="29.045454025268555px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="39px"
            left="calc(50% - 420.5px - -195.75px)"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Sí, tengo algo de tiempo hoy. (Yes, I have some time today.)"
      ></Text>
          <Image
            width="128px"
            height="128px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            borderRadius="25px"
            top="59px"
            left="calc(50% - 217.5px - -595.75px)"
            padding="0px 0px 0px 0px"
            objectFit="unset"
            src={person2}
            {...getOverrideProps(overrides, "Rectangle 144032")}
            ></Image>
        </Flex>
        <Flex
          gap="26px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="20px 0px 0px 0px"
          {...getOverrideProps(overrides, "man talking2311173")}
        >
          <Image
            width="128px"
            height="128px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            borderRadius="32px"
            padding="50px 0px 0px 0px"
            objectFit="unset"
            src={person1}
            {...getOverrideProps(overrides, "Rectangle 13403")}
          ></Image>
          <Icon
            width="623px"
            height="143px"
            viewBox={{ minX: 0, minY: 0, width: 623, height: 143 }}
            paths={[
              {
                d: "M623 71.5C623 110.988 483.537 143 311.5 143C139.463 143 0 110.988 0 71.5C0 32.0116 139.463 0 311.5 0C483.537 0 623 32.0116 623 71.5Z",
                fill: "rgba(255,254,254,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="20px"
            left="125px"
            {...getOverrideProps(overrides, "Ellipse 12311222")}
          ></Icon>
          <Icon
            width="39.5px"
            height="203px"
            viewBox={{ minX: 0, minY: 0, width: 203, height: 39.5 }}
            paths={[
              {
                d: "M1.48074 12.5246C1.33611 11.3013 3.1004 10.9495 3.43599 12.1347L39.4282 139.246C39.4753 139.413 39.4785 139.588 39.4375 139.756L25.314 197.617C25.0498 198.699 23.4802 198.604 23.3494 197.497L1.48074 12.5246Z",
                fill: "rgba(255,254,254,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="128px"
            left="25px"
            transformOrigin="top left"
            transform="rotate(-90deg)"
            {...getOverrideProps(overrides, "Polygon 12311223")}
          ></Icon>
          <Text
            fontFamily="Inter"
            fontSize="24px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="29.045454025268555px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="45px"
            left="calc(50% - 237.5px - -57.75px)"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="¿Quieres ir de compras conmigo? (Do you want to go shopping with me?)"
  ></Text>
        </Flex>
        <Flex
          padding="0px 0px 0px 0px"
          width="724px"
          height="143px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "Group 64028")}
        >
          <Icon
            width="623px"
            height="143px"
            viewBox={{ minX: 0, minY: 0, width: 623, height: 143 }}
            paths={[
              {
                d: "M623 71.5C623 110.988 483.537 143 311.5 143C139.463 143 0 110.988 0 71.5C0 32.0116 139.463 0 311.5 0C483.537 0 623 32.0116 623 71.5Z",
                fill: "rgba(255,254,254,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="101px"
            {...getOverrideProps(overrides, "Ellipse 14029")}
          ></Icon>
          <Icon
            width="22.5px"
            height="154px"
            viewBox={{ minX: 0, minY: 0, width: 154, height: 22.5 }}
            paths={[
              {
                d: "M12.6162 10.9222C12.7692 9.71413 14.5396 9.7769 14.6067 10.9928L22.2428 149.341C22.3022 150.417 20.8513 150.813 20.3561 149.855L0.142964 110.776C0.0498564 110.596 0.0136402 110.392 0.0391133 110.191L12.6162 10.9222Z",
                fill: "rgba(255,254,254,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="88.5px"
            left="806px"
            transformOrigin="top left"
            transform="rotate(90deg)"
            {...getOverrideProps(overrides, "Polygon 14030")}
          ></Icon>
          <Text
            fontFamily="Inter"
            fontSize="24px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="29.045454025268555px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="27px"
            left="calc(50% - 420.5px - -195.75px)"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Sí, necesito comprar una chaqueta. (Yes, I need to buy a jacket.)"
          ></Text>
          <Image
            width="128px"
            height="128px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            borderRadius="25px"
            top="59px"
            left="calc(50% - 217.5px - -595.75px)"
            padding="0px 0px 0px 0px"
            objectFit="unset"
            src={person2}
            {...getOverrideProps(overrides, "Rectangle 144032")}
            ></Image>
        </Flex>
        <Flex
          gap="26px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="20px 0px 0px 0px"
          {...getOverrideProps(overrides, "man talking2311173")}
        >
          <Image
            width="128px"
            height="128px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            borderRadius="32px"
            padding="50px 0px 0px 0px"
            objectFit="unset"
            src={person1}
            {...getOverrideProps(overrides, "Rectangle 13403")}
          ></Image>
          <Icon
            width="623px"
            height="143px"
            viewBox={{ minX: 0, minY: 0, width: 623, height: 143 }}
            paths={[
              {
                d: "M623 71.5C623 110.988 483.537 143 311.5 143C139.463 143 0 110.988 0 71.5C0 32.0116 139.463 0 311.5 0C483.537 0 623 32.0116 623 71.5Z",
                fill: "rgba(255,254,254,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="20px"
            left="125px"
            {...getOverrideProps(overrides, "Ellipse 12311222")}
          ></Icon>
          <Icon
            width="39.5px"
            height="203px"
            viewBox={{ minX: 0, minY: 0, width: 203, height: 39.5 }}
            paths={[
              {
                d: "M1.48074 12.5246C1.33611 11.3013 3.1004 10.9495 3.43599 12.1347L39.4282 139.246C39.4753 139.413 39.4785 139.588 39.4375 139.756L25.314 197.617C25.0498 198.699 23.4802 198.604 23.3494 197.497L1.48074 12.5246Z",
                fill: "rgba(255,254,254,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="128px"
            left="25px"
            transformOrigin="top left"
            transform="rotate(-90deg)"
            {...getOverrideProps(overrides, "Polygon 12311223")}
          ></Icon>
          <Text
            fontFamily="Inter"
            fontSize="24px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="29.045454025268555px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="50px"
            left="calc(50% - 286.5px - -57.75px)"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="¿A qué hora te gustaría ir? (What time would you like to go?)"
          ></Text>
        </Flex>
        <Flex
          padding="0px 0px 0px 0px"
          width="724px"
          height="143px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "Group 64028")}
        >
          <Icon
            width="623px"
            height="143px"
            viewBox={{ minX: 0, minY: 0, width: 623, height: 143 }}
            paths={[
              {
                d: "M623 71.5C623 110.988 483.537 143 311.5 143C139.463 143 0 110.988 0 71.5C0 32.0116 139.463 0 311.5 0C483.537 0 623 32.0116 623 71.5Z",
                fill: "rgba(255,254,254,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="101px"
            {...getOverrideProps(overrides, "Ellipse 14029")}
          ></Icon>
          <Icon
            width="22.5px"
            height="154px"
            viewBox={{ minX: 0, minY: 0, width: 154, height: 22.5 }}
            paths={[
              {
                d: "M12.6162 10.9222C12.7692 9.71413 14.5396 9.7769 14.6067 10.9928L22.2428 149.341C22.3022 150.417 20.8513 150.813 20.3561 149.855L0.142964 110.776C0.0498564 110.596 0.0136402 110.392 0.0391133 110.191L12.6162 10.9222Z",
                fill: "rgba(255,254,254,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="88.5px"
            left="806px"
            transformOrigin="top left"
            transform="rotate(90deg)"
            {...getOverrideProps(overrides, "Polygon 14030")}
          ></Icon>
          <Text
            fontFamily="Inter"
            fontSize="24px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="29.045454025268555px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="36px"
            left="calc(50% - 270.5px - -195.75px)"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="A las diez. (At 10 o’clock.)"
          ></Text>
          <Image
            width="128px"
            height="128px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            borderRadius="25px"
            top="59px"
            left="calc(50% - 217.5px - -595.75px)"
            padding="0px 0px 0px 0px"
            objectFit="unset"
            src={person2}
            {...getOverrideProps(overrides, "Rectangle 144032")}
            ></Image>
        </Flex>
        <Flex
          gap="26px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="20px 0px 0px 0px"
          {...getOverrideProps(overrides, "man talking2311173")}
        >
          <Image
            width="128px"
            height="128px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            borderRadius="32px"
            padding="50px 0px 0px 0px"
            objectFit="unset"
            src={person1}
            {...getOverrideProps(overrides, "Rectangle 13403")}
          ></Image>
          <Icon
            width="623px"
            height="143px"
            viewBox={{ minX: 0, minY: 0, width: 623, height: 143 }}
            paths={[
              {
                d: "M623 71.5C623 110.988 483.537 143 311.5 143C139.463 143 0 110.988 0 71.5C0 32.0116 139.463 0 311.5 0C483.537 0 623 32.0116 623 71.5Z",
                fill: "rgba(255,254,254,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="20px"
            left="125px"
            {...getOverrideProps(overrides, "Ellipse 12311222")}
          ></Icon>
          <Icon
            width="39.5px"
            height="203px"
            viewBox={{ minX: 0, minY: 0, width: 203, height: 39.5 }}
            paths={[
              {
                d: "M1.48074 12.5246C1.33611 11.3013 3.1004 10.9495 3.43599 12.1347L39.4282 139.246C39.4753 139.413 39.4785 139.588 39.4375 139.756L25.314 197.617C25.0498 198.699 23.4802 198.604 23.3494 197.497L1.48074 12.5246Z",
                fill: "rgba(255,254,254,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="128px"
            left="25px"
            transformOrigin="top left"
            transform="rotate(-90deg)"
            {...getOverrideProps(overrides, "Polygon 12311223")}
          ></Icon>
          <Text
            fontFamily="Inter"
            fontSize="24px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="29.045454025268555px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="48px"
            left="calc(50% - 195.5px - -57.75px)"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Vale, nos vemos luego. (Okay, see you later.)"
          ></Text>
        </Flex>
        <Flex
          padding="0px 0px 0px 0px"
          width="724px"
          height="143px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "Group 64028")}
        >
          <Icon
            width="623px"
            height="143px"
            viewBox={{ minX: 0, minY: 0, width: 623, height: 143 }}
            paths={[
              {
                d: "M623 71.5C623 110.988 483.537 143 311.5 143C139.463 143 0 110.988 0 71.5C0 32.0116 139.463 0 311.5 0C483.537 0 623 32.0116 623 71.5Z",
                fill: "rgba(255,254,254,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="101px"
            {...getOverrideProps(overrides, "Ellipse 14029")}
          ></Icon>
          <Icon
            width="22.5px"
            height="154px"
            viewBox={{ minX: 0, minY: 0, width: 154, height: 22.5 }}
            paths={[
              {
                d: "M12.6162 10.9222C12.7692 9.71413 14.5396 9.7769 14.6067 10.9928L22.2428 149.341C22.3022 150.417 20.8513 150.813 20.3561 149.855L0.142964 110.776C0.0498564 110.596 0.0136402 110.392 0.0391133 110.191L12.6162 10.9222Z",
                fill: "rgba(255,254,254,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="88.5px"
            left="806px"
            transformOrigin="top left"
            transform="rotate(90deg)"
            {...getOverrideProps(overrides, "Polygon 14030")}
          ></Icon>
          <Text
            fontFamily="Inter"
            fontSize="24px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="29.045454025268555px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="33px"
            left="calc(50% - 272.5px - -195.75px)"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Hasta luego. (See you later.)"
          ></Text>
          <Image
            width="128px"
            height="128px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            borderRadius="25px"
            top="59px"
            left="calc(50% - 217.5px - -595.75px)"
            padding="0px 0px 0px 0px"
            objectFit="unset"
            src={person2}
            {...getOverrideProps(overrides, "Rectangle 144032")}
            ></Image>
        </Flex>
        </Flex> */}
    </Flex>
  );
}
