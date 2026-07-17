import { getTypography } from "../../../themes/typography";
import { ThemeColors } from "../../../themes/types";
export declare const getStyles: (themeColors: ThemeColors, typography: ReturnType<typeof getTypography>) => {
    inputContainer: {
        minHeight: number;
        borderRadius: number;
        borderWidth: number;
        borderColor: string;
        paddingHorizontal: number;
        paddingTop: number;
        paddingBottom: number;
    };
    label: {
        color: string;
        position: "absolute";
        top: number;
        left: number;
        fontSize: number;
        fontFamily: "Gilroy-Medium";
        lineHeight: number;
    };
    input: {
        textAlignVertical: "top";
        paddingBottom: number;
        fontSize: number;
        lineHeight: number;
        fontFamily: "Gilroy-Medium";
        color: string;
        flex: number;
    };
    errorText: {
        color: string;
        marginTop: number;
        marginLeft: number;
        fontSize: number;
        lineHeight: number;
        fontFamily: "Gilroy-Medium";
    };
};
//# sourceMappingURL=styles.d.ts.map