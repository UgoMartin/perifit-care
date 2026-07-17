import React from "react";
import { ImageSourcePropType } from "react-native";
export type CategoryTab = {
    id: string;
    icon?: ImageSourcePropType;
    name: string;
};
type CategoryTabBarProps = {
    categoryTabs: CategoryTab[];
    selectedTab: string;
    onSelectTab: (tabId: string) => void;
};
declare const CategoryTabBar: React.FC<CategoryTabBarProps>;
export default CategoryTabBar;
//# sourceMappingURL=index.d.ts.map