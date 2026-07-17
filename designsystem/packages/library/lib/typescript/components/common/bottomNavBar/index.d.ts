import React from "react";
export type BottomNavParamList = {
    Today: undefined;
    Exercices: undefined;
    Progress: undefined;
    Community: undefined;
};
/**
 * Bottom navigation bar with four fixed items (Today, Exercices, Progress, Community).
 *
 * It is built with @react-navigation/bottom-tabs and already wired with a
 * NavigationContainer so it can be rendered anywhere (even inside Storybook)
 * without having to wrap the whole app.  Consumers that already have a root
 * navigation container can copy the configuration that lives inside this
 * component instead of rendering it directly.
 */
export declare const BottomNavBar: () => React.JSX.Element;
export default BottomNavBar;
//# sourceMappingURL=index.d.ts.map