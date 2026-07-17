import { ThemeColors, Typography } from "../../../themes";
export declare const getStyles: (themeColors: ThemeColors, typography: Typography) => {
    container: {
        padding: number;
        backgroundColor: string;
        borderRadius: number;
        alignItems: "center";
        gap: number;
        flexDirection: "row";
    };
    mainContent: {
        gap: number;
        flex: number;
    };
    badgeBg: {
        alignItems: "center";
        alignSelf: "flex-start";
        paddingHorizontal: number;
        paddingVertical: number;
        backgroundColor: string;
        borderRadius: number;
    };
    badgeText: {
        color: string;
        alignSelf: "center";
        fontSize: number;
        fontFamily: "Gilroy-Medium";
        lineHeight: number;
    };
    linkText: {
        color: string;
        fontSize: number;
        lineHeight: number;
        fontFamily: "Gilroy-Medium";
        textDecorationLine: "underline";
    };
    emojiContainer: {
        width: number;
        height: number;
        justifyContent: "center";
        alignItems: "center";
        backgroundColor: string;
        borderRadius: number;
    };
    emoji: {
        width: number;
        height: number;
        resizeMode: "contain";
    };
    arrow: {
        width: number;
        height: number;
        resizeMode: "contain";
        tintColor: string;
    };
};
//# sourceMappingURL=styles.d.ts.map