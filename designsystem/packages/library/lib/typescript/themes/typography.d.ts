import { ThemeColors } from "./types";
export declare const getTypography: (themeColors: ThemeColors) => {
    big: {
        fontFamily: "Gilroy-Medium";
        fontSize: number;
        lineHeight: number;
        color: string;
    };
    h1: {
        fontFamily: "Gilroy-Bold";
        fontSize: number;
        lineHeight: number;
        color: string;
    };
    h2: {
        fontSize: number;
        lineHeight: number;
        fontFamily: "Gilroy-Bold";
        color: string;
    };
    h3: {
        fontSize: number;
        lineHeight: number;
        fontFamily: "Gilroy-Bold";
        color: string;
    };
    h4: {
        fontSize: number;
        lineHeight: number;
        fontFamily: "Gilroy-SemiBold";
        color: string;
    };
    h5: {
        fontSize: number;
        fontFamily: "Gilroy-SemiBold";
        color: string;
        lineHeight: number;
    };
    subtitle: {
        fontSize: number;
        lineHeight: number;
        fontFamily: "Gilroy-SemiBold";
        color: string;
    };
    category: {
        fontSize: number;
        fontFamily: "Gilroy-SemiBold";
        color: string;
        textTransform: "uppercase";
        lineHeight: number;
    };
    body: {
        fontSize: number;
        lineHeight: number;
        fontFamily: "Gilroy-Medium";
        color: string;
    };
    bodyUnderline: {
        fontSize: number;
        lineHeight: number;
        fontFamily: "Gilroy-Medium";
        color: string;
        textDecorationLine: "underline";
    };
    bodyStrikethrough: {
        fontSize: number;
        lineHeight: number;
        fontFamily: "Gilroy-Medium";
        color: string;
        textDecorationLine: "line-through";
    };
    caption: {
        fontSize: number;
        fontFamily: "Gilroy-Medium";
        color: string;
        lineHeight: number;
    };
    captionUnderline: {
        fontSize: number;
        fontFamily: "Gilroy-Medium";
        color: string;
        textDecorationLine: "underline";
        lineHeight: number;
    };
    captionStrikethrough: {
        fontSize: number;
        fontFamily: "Gilroy-Medium";
        color: string;
        textDecorationLine: "line-through";
        lineHeight: number;
    };
    captionSemi: {
        fontSize: number;
        fontFamily: "Gilroy-Bold";
        color: string;
        lineHeight: number;
    };
};
export type Typography = ReturnType<typeof getTypography>;
//# sourceMappingURL=typography.d.ts.map