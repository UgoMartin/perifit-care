import { getTypography } from "../../../themes/typography";
import { ThemeColors } from "../../../themes/types";
export declare const getStyles: (themeColors: ThemeColors, typography: ReturnType<typeof getTypography>) => {
    inputContainer: {
        height: number;
        borderRadius: number;
        borderWidth: number;
        borderColor: string;
        flexDirection: "row";
        alignItems: "center";
        paddingLeft: number;
        paddingRight: number;
    };
    label: {
        color: string;
        position: "absolute";
        top: number;
        fontSize: number;
        fontFamily: "Gilroy-Medium";
        lineHeight: number;
    };
    valueText: {
        fontSize: number;
        lineHeight: number;
        fontFamily: "Gilroy-Medium";
        color: string;
    };
    iconContainer: {
        marginLeft: number;
        justifyContent: "center";
        alignItems: "center";
    };
    errorText: {
        color: string;
        marginTop: number;
        marginLeft: number;
        fontSize: number;
        fontFamily: "Gilroy-Medium";
        lineHeight: number;
    };
};
//# sourceMappingURL=styles.d.ts.map