/* eslint-disable react/no-unused-state */
import React from 'react';
import {ThemeContext, themes} from '../components/themeContentPlus1';
import ThemeTogglerButton from '../components/themeToggleButton'; 

class ContextUpdateInComs extends React.Component {
  toggleTheme: () => void;

  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    };

    // State 也包含了更新函数，因此它会被传递进 context provider。
    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme,
    };
  }

  render() {
    // 整个 state 都被传递进 provider
    return (
      <ThemeContext.Provider value={this.state as any}>
        <Content />
      </ThemeContext.Provider>
    );
  }
}

function Content() {
  return (
    <div>
      <ThemeTogglerButton />
    </div>
  );
}

export default ContextUpdateInComs;