/* eslint-disable react/button-has-type */
import {Button} from 'antd';
import React from 'react';
import {ThemeContext} from './themeContent';


// const ThemedButton: FC = (props) => {

// }
class ThemedButton extends React.PureComponent {
  render() {
    const {props} = this;
    const theme = this.context;
    return (
      <button
        {...props}
        style={{backgroundColor: theme.background}}/>
    );
  }
}
ThemedButton.contextType = ThemeContext;

export default ThemedButton;