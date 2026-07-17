import { text as lightText } from "./light/text";
import { icon as lightIcon } from "./light/icon";
import { fill as lightFill } from "./light/fill";
import { border as lightBorder } from "./light/border";
import { button as lightButton } from "./light/button";
import { nav as lightNav } from "./light/nav";
import { pump as lightPump } from "./light/pump";
import { objective as lightObjective } from "./light/objective";

import { text as darkText } from "./dark/text";
import { icon as darkIcon } from "./dark/icon";
import { fill as darkFill } from "./dark/fill";
import { border as darkBorder } from "./dark/border";
import { button as darkButton } from "./dark/button";
import { nav as darkNav } from "./dark/nav";
import { pump as darkPump } from "./dark/pump";
import { objective as darkObjective } from "./dark/objective";
import { Theme, ThemeColors } from "./types";

export const colors: Record<Theme, ThemeColors> = {
  light: {
    text: lightText,
    icon: lightIcon,
    fill: lightFill,
    border: lightBorder,
    button: lightButton,
    nav: lightNav,
    pump: lightPump,
    objective: lightObjective,
  },
  dark: {
    text: darkText,
    icon: darkIcon,
    fill: darkFill,
    border: darkBorder,
    button: darkButton,
    nav: darkNav,
    pump: darkPump,
    objective: darkObjective,
  },
};
