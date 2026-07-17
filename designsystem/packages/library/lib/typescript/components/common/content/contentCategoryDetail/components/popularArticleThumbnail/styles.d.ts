import { ThemeColors, Typography } from "../../../../../../themes";
export declare const getStyles: (themeColors: ThemeColors, typography: Typography) => {
    card: {
        width: number;
        height: number;
        borderRadius: number;
        overflow: "hidden";
    };
    cardImage: {
        width: "100%";
        height: "100%";
        justifyContent: "flex-end";
    };
    cardImageBorder: {
        borderRadius: number;
    };
    premiumIconContainer: {
        position: "absolute";
        top: number;
        right: number;
        width: number;
        height: number;
        borderRadius: number;
        backgroundColor: string;
        justifyContent: "center";
        alignItems: "center";
    };
    premiumIcon: {
        width: number;
        height: number;
    };
    gradient: {
        position: "absolute";
        left: number;
        right: number;
        bottom: number;
        height: "50%";
    };
    textContainer: {
        padding: number;
        gap: number;
    };
    tag: {
        color: string;
        fontSize: number;
        fontFamily: "Gilroy-Medium";
        lineHeight: number;
    };
    title: {
        color: string;
        fontSize: number;
        lineHeight: number;
        fontFamily: "Gilroy-SemiBold";
    };
};
//# sourceMappingURL=styles.d.ts.map