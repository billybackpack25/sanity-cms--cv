import { ReactNode } from "react";
import { CVTheme } from "@shared/types/cv";

import { DeveloperThemeProvider } from "./developer/ThemeProvider";

type ThemeFactoryProps = {
  theme: `${CVTheme}`;
  children: ReactNode;
};

export function ThemeFactory({ theme, children }: ThemeFactoryProps) {
  switch (theme) {
    case CVTheme.DEVELOPER:
      return <DeveloperThemeProvider>{children}</DeveloperThemeProvider>;
    default:
      return <DeveloperThemeProvider>{children}</DeveloperThemeProvider>;
  }
}
