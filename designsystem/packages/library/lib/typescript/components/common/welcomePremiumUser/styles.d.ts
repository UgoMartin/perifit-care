import { ThemeColors, Typography } from "../../../themes";
import { EdgeInsets } from "react-native-safe-area-context";
export declare const getStyles: (themeColors: ThemeColors, typography: Typography, insets: EdgeInsets) => {
    container: {
        padding: number;
        backgroundColor: string;
    };
    fullScreenContainer: {
        position: "absolute";
        top: number;
        left: number;
        right: number;
        bottom: number;
        backgroundColor: string;
        paddingBottom: number;
    };
    iconContainer: {
        width: number;
        height: number;
        borderRadius: number;
        backgroundColor: string;
        justifyContent: "center";
        alignItems: "center";
        marginBottom: number;
    };
    icon: {
        width: number;
        height: number;
        resizeMode: "contain";
    };
    contentContainer: {
        gap: number;
        alignItems: "center";
        alignContent: "center";
        justifyContent: "center";
        flex: number;
    };
    closeIcon: {
        width: number;
        height: number;
    };
    title: {
        color: string;
        textAlign: "center";
        fontSize: number;
        lineHeight: number;
        fontFamily: "Gilroy-Bold";
    };
    description: {
        color: string;
        textAlign: "center";
        fontSize: number;
        lineHeight: number;
        fontFamily: "Gilroy-Medium";
    };
    textButton: {
        color: string;
    };
};
//# sourceMappingURL=styles.d.ts.map