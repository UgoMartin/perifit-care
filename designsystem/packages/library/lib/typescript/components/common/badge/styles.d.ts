import { ThemeColors } from "../../../themes";
import { getTypography } from "../../../themes/typography";
export declare const getStyles: (themeColors: ThemeColors, typography: ReturnType<typeof getTypography>) => {
    container: {
        alignSelf: "baseline";
        flexDirection: "row";
        alignItems: "center";
        borderRadius: number;
        paddingHorizontal: number;
    };
    icon: {
        width: number;
        height: number;
        marginRight: number;
    };
    text: {
        color: string;
        fontSize: number;
        fontFamily: "Gilroy-Medium";
        lineHeight: number;
    };
};
//# sourceMappingURL=styles.d.ts.map