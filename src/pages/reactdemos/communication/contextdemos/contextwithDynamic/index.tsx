/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable import/no-unresolved */
import React, { FC, useState } from 'react';
import {ThemeContext, themes} from '../components/themeContent';
import ThemedButton from '../components/themedButton';

// 一个使用 ThemedButton 的中间组件
function Toolbar(props: { changeTheme: any; }) {
  return (
    <ThemedButton onClick={props.changeTheme}>
      Change Theme
    </ThemedButton>
  );
}

const DynamicContext: FC = (props) => {
  const [theme, setTheme] = useState(themes.light)

  const toggleTheme = () => {
    theme === themes.dark ? setTheme(themes.light) : setTheme(themes.dark)
  };

  // 在 ThemeProvider 内部的 ThemedButton 按钮组件使用 state 中的 theme 值，
  // 而外部的组件使用默认的 theme 值
  return (
    <>
      <ThemeContext.Provider value={theme}>
        <Toolbar changeTheme={toggleTheme} />
      </ThemeContext.Provider>
      <ThemedButton />
    </>
  );
}

export default DynamicContext