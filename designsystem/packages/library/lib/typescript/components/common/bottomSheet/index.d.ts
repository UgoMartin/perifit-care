import React from "react";
import { StyleProp, ViewStyle } from "react-native";
export type BottomSheetMode = "content" | "full";
export interface BottomSheetProps {
    /** Controls whether the sheet is displayed */
    visible: boolean;
    /** Called when the sheet is dismissed – either by gesture, backdrop, or close button */
    onClose?: () => void;
    /** Height behaviour: "content" => wrap the content (default), "full" => take the full screen height */
    mode?: BottomSheetMode;
    /** Children rendered inside the sheet */
    children: React.ReactNode;
    /** Whether to show the drag handle (default true) */
    showDragHandle?: boolean;
    /** Whether to show the close button (default true) */
    showCloseButton?: boolean;
    /** Whether tapping on the backdrop should close the sheet (default true) */
    backdropClosable?: boolean;
    /** Animation duration (ms) */
    animationDuration?: number;
    /** Custom backdrop renderer, e.g. to provide gradient backdrops from consumer apps */
    renderBackdrop?: (props: {
        style: StyleProp<ViewStyle>;
    }) => React.ReactNode;
}
/**
 * Simple bottom sheet built with react-native-reanimated & RNGH.
 * Supports wrapping content height or expanding to full screen.
 */
export declare const BottomSheet: ({ visible, onClose, mode, children, showDragHandle, showCloseButton, backdropClosable, animationDuration, renderBackdrop, }: BottomSheetProps) => React.JSX.Element | null;
//# sourceMappingURL=index.d.ts.map