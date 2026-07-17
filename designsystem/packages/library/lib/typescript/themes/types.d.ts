export type RadiusType = "none" | "xs" | "s" | "md" | "lg" | "xl";
export type GapType = "xs" | "s" | "md" | "xmd" | "lg" | "xl" | "button" | "form";
export type SpacingType = "none" | "xs3" | "xs2" | "xs" | "s" | "md" | "lg" | "xl";
export type IconSize = "xs" | "s" | "md" | "lg" | "xl";
export type TextColorType = "primary" | "secondary" | "active" | "inactive" | "disabled" | "error" | "warning" | "success" | "links" | "inversedRemainsWhite" | "inversedChangeBlack" | "clubPerifit";
export type IconColorType = "primary" | "secondary" | "active" | "inactive" | "disabled" | "error" | "success" | "warning" | "inversedRemainsWhite" | "inversedChangeBlack" | "clubPerifitChangeWhite" | "clubPerifitRemainsBlack";
export type FillColorType = "page" | "block" | "blockRemainsWhite" | "primary" | "secondary" | "dark" | "active" | "greenScreen" | "activeReversed" | "disabled" | "selected" | "success" | "successLight" | "warning" | "warningLight" | "error" | "errorLight" | "hover" | "overlay" | "gradientColor" | "gradientFadePage" | "gradientFadeBlock" | "gradientFade" | "gradientCurve";
export type BorderColorType = "primary" | "secondary" | "primaryInversed" | "error" | "warning" | "success" | "selected" | "active";
export type ButtonColorType = "primaryFillDefault" | "primaryFillHover" | "primaryFillDisabled" | "primaryTextDefault" | "primaryTextDisabled" | "secondaryFillDefault" | "secondaryFillHover" | "secondaryFillDisabled" | "secondaryTextDefault" | "secondaryTextDisabled" | "inversedDefault" | "inversedHover" | "inversedDisabled" | "inversedTextDefault" | "inversedTextDisabled" | "appleFill" | "appleText" | "googleFill" | "googleText" | "facebookFill" | "facebookText";
export type NavColorType = "activeText" | "activeBorder" | "activeFill" | "inactiveText" | "inactiveBorder" | "inactiveFill";
export type PumpColorType = "pumpLeftFill" | "pumpLeftText" | "pumpLeftSlider" | "pumpLeftWave" | "pumpLeftWaveBG" | "pumpRightFill" | "pumpRightText" | "pumpRightSlider" | "pumpRightWave" | "pumpRightWaveBG" | "haloStimulation" | "haloExpression";
export type ObjectiveColorType = "objective1Background" | "objective1Text" | "objective2Background" | "objective2Text" | "objective3Background" | "objective3Text" | "objective4Background" | "objective4Text" | "objective5Background" | "objective5Text" | "objective6Background" | "objective6Text";
export type ThemeColors = {
    text: Record<TextColorType, string>;
    icon: Record<IconColorType, string>;
    fill: Record<FillColorType, string>;
    border: Record<BorderColorType, string>;
    button: Record<ButtonColorType, string>;
    nav: Record<NavColorType, string>;
    pump: Record<PumpColorType, string>;
    objective: Record<ObjectiveColorType, string>;
};
export type Theme = "light" | "dark";
//# sourceMappingURL=types.d.ts.map