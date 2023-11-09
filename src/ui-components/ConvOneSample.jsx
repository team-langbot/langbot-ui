/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useNavigateAction, } from "@aws-amplify/ui-react/internal";
import Nicetomeetyouheader from "./Nicetomeetyouheader";
import { Flex, Icon, Image, Text } from "@aws-amplify/ui-react";
import person1 from "./images/person1.png";
import person2 from "./images/person2.png";
import Routerbutton  from "./Routerbutton";

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
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(245,233,227,1)"
      {...getOverrideProps(overrides, "ConvOneSample")}
      {...rest}
    >
      <Nicetomeetyouheader
        display="flex"
        gap="10px"
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
            children="Buenos días! Me llamo Thomas. ¿Y tú?"
            {...getOverrideProps(
              overrides,
              "Buenos d\u00EDas! Me llamo Thomas. \u00BFY t\u00FA?"
            )}
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
            left="calc(50% - 217.5px - -195.75px)"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Me llamo Jess."
            {...getOverrideProps(
              overrides,
              "Buenos d\u00EDas! Me llamo Thomas. \u00BFY t\u00FA?"
            )}
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
            top="39px"
            left="calc(50% - 167.5px - -57.75px)"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Ah, te llamas Jess. &#xA;¡Encantada de conocerte!&#xA; ¿Cómo te va?"
            {...getOverrideProps(
              overrides,
              "Ah, te llamas Jess. \u00A1Encantada de conocerte! \u00A0\u00BFC\u00F3mo te va?"
            )}
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
            left="calc(50% - 232.5px - -195.75px)"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Bien, gracias. ¿Y a ti?"
            {...getOverrideProps(overrides, "Bien, gracias. \u00BFY a ti?")}
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
            top="39px"
            left="calc(50% - 167.5px - -57.75px)"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Muy bien. Vivo en la Ciudad de México. &#xA;¿De dónde eres tú?"
            {...getOverrideProps(
              overrides,
              "Muy bien. Vivo en la Ciudad de M\u00E9xico. \u00BFDe d\u00F3nde eres t\u00FA?"
            )}
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
            left="calc(50% - 232.5px - -195.75px)"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="De Pennsylvania."
            {...getOverrideProps(overrides, "De Pennsylvania.")}
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
            top="39px"
            left="calc(50% - 167.5px - -57.75px)"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Ah, eres de Pennsylvania. &#xA;Es un estado precioso."
            {...getOverrideProps(
              overrides,
              "Ah, eres de Pennsylvania. Es un estado precioso."
            )}
          ></Text>
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
          {...getOverrideProps(overrides, "your turn")}
        >
          <Text
            fontFamily="Inter"
            fontSize="32px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            textTransform="uppercase"
            lineHeight="38.727272033691406px"
            textAlign="left"
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
            children="Your Turn Now..."
            {...getOverrideProps(overrides, "Your Turn Now...")}
            onClick={() => {
              yourTurnOnClick();
            }}
          ></Text>
        </Flex>
        </Flex>
    </Flex>
  );
}
