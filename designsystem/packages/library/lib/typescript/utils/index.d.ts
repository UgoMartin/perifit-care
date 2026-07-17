export declare const IsTablet: () => boolean;
export declare const normalize: (size: number) => number;
export declare const TARGET_SCREEN_WIDTH = 390;
export declare const TARGET_SCREEN_HEIGHT = 844;
declare const UIConstants: {
    SCREEN_WIDTH: number;
    SCREEN_HEIGHT: number;
    TEXTINPUT_HEIGHT: number;
    TOUCHABLE_ACTIVE_OPACITY: number;
    TOUCHABLE_HIT_SLOP: {
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
    PADDING_HORIZONTAL_CONTAINER: number;
};
export declare function scaleFactor(): number;
/**
 * Convert hex color to hex color with alpha
 * @param hex - The hex color to convert
 * @param opacity - The opacity of the color (0-1)
 * @returns The hex color with alpha
 */
export declare const hexWithAlpha: (hex: string, opacity: number) => string;
export declare const lightenHex: (hex: string, opacity: number) => string;
export declare const getColorWithAlpha: (color: string, opacity: number) => string;
export default UIConstants;
//# sourceMappingURL=index.d.ts.map