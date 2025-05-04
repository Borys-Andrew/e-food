import { ReactNode } from "react";

import { ThemeProvider } from "./themeProviderContext";

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return <ThemeProvider defaultTheme="light">{children}</ThemeProvider>;
};
