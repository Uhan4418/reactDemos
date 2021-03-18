// contextDemo
import { Button } from 'antd';
import React from 'react';
import styles from './style.less'

function FancyBorder(props: any) {
  return (
    <div className={styles.FancyBorderBlue}>
      {props.children}
    </div>
  );
}

function Dialog(props: any) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
      {props.children}
    </FancyBorder>
  );
}

class SignUpDialog extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = { login: '' };
  }

  handleChange = (e: any) => {
    this.setState({ login: e.target.value });
  }

  handleSignUp = () => {
    alert(`Welcome aboard, ${this.state.login}!`);
  }

  render() {
    return (
      <Dialog title="Mars Exploration Program"
        message="How should we refer to you?">
        <input value={this.state.login}
          onChange={this.handleChange} />
        <Button onClick={this.handleSignUp}>
          Sign Me Up!
        </Button>
      </Dialog>
    );
  }

}

export default SignUpDialog