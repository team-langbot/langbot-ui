/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { NicetomeetyouheaderProps } from "./Nicetomeetyouheader";
import { FlexProps, IconProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ConvOneActualOverridesProps = {
    ConvOneActual?: PrimitiveOverrideProps<FlexProps>;
    "nice to meet you header"?: NicetomeetyouheaderProps;
} & EscapeHatchProps;
export declare type ConvOneActualProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ConvOneActualOverridesProps | undefined | null;
}>;
export default function ConvOneActual(props: ConvOneActualProps): React.ReactElement;
