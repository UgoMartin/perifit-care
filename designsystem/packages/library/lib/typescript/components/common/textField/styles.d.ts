import { getTypography } from "../../../themes/typography";
import { ThemeColors } from "../../../themes/types";
export declare const getStyles: (themeColors: ThemeColors, typography: ReturnType<typeof getTypography>) => {
    inputContainer: {
        height: number;
        borderRadius: number;
        borderWidth: number;
        borderColor: string;
        flexDirection: "row";
        justifyContent: "space-between";
        paddingLeft: number;
    };
    label: {
        color: string;
        position: "absolute";
        top: number;
        fontSize: number;
        fontFamily: "Gilroy-Medium";
        lineHeight: number;
    };
    input: {
        flex: number;
        paddingBottom: number;
        paddingLeft: number;
        fontSize: number;
        lineHeight: number;
        fontFamily: "Gilroy-Medium";
        color: string;
    };
    showHidePasswordButton: {
        width: number;
        height: "100%";
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
    showHidePasswordIcon: {
        tintColor: string;
    };
};
//# sourceMappingURL=styles.d.ts.map