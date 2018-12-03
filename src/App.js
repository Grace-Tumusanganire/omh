import React, { Component } from "react";
import "./App.css";
// import Input from "./login/Login";
import Login from "./login /Login";
import CustomButton from "./Buttons/CustomButton";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isLoading: false
    };
  }
  onChangeTextInput = (e, key) => {
    this.setState({
      [key]: e.target.value
    });
  };

  onSend = () => {
    console.log(this.state);
  };
  render() {
    return (
      <div className="App">
        <div className="container" />
        <div className="login-form">
          <Login
            label="Email"
            type="email"
            placeholder="me@example.com"
            value={this.state.email}
            onChange={e => this.onChangeTextInput(e, "email")}
          />
          <div className="login">
            <Login
              label="Password"
              type="password"
              value={this.state.password}
              onChange={e => this.onChangeTextInput(e, "password")}
              style
            />
          </div>

          <CustomButton title="Send" onClick={() => this.onSend()} />
        </div>
      </div>
    );
  }
}
