import React from "react";

/* 在嵌套组件中更新Context */

export const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
};

export const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {}
});