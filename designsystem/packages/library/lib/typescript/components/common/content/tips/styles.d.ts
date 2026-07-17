import { ThemeColors, Typography } from "../../../../themes";
declare const createStyles: (themeColors: ThemeColors, typography: Typography) => {
    container: {
        gap: number;
        padding: number;
        borderRadius: number;
        backgroundColor: string;
        flexDirection: "row";
    };
    imageContainer: {
        alignItems: "center";
        justifyContent: "center";
    };
    contentContainer: {
        gap: number;
        alignItems: "flex-start";
        justifyContent: "center";
        flexShrink: number;
    };
    image: {
        width: number;
        height: number;
        resizeMode: "contain";
        borderRadius: number;
    };
    title: {
        fontSize: number;
        lineHeight: number;
        fontFamily: "Gilroy-SemiBold";
        color: string;
    };
    actionText: {
        textDecorationLine: "underline";
        fontSize: number;
        lineHeight: number;
        fontFamily: "Gilroy-SemiBold";
        color: string;
    };
};
export default createStyles;
//# sourceMappingURL=styles.d.ts.map