// context - has a provider and a consumer
import Axios from "axios";
import React from "react";

export const AuthContext = React.createContext();
export const AuthConsumer = AuthContext.Consumer;

export class AuthProvider extends React.Component {
  state = { user: null };

  handleRegister = (user, history) => {
    Axios.post("/api/auth", user)
      .then((res) => {
        this.setState({ user: res.data.data });
        history.push("/");
      })
      .catch((err) => {
        alert("error occured in registion throw a debugger in here");
      });
  };

  handleLogin = (user, history) => {
    Axios.post("/api/auth/sign_in", user)
      .then((res) => {
        this.setState({ user: res.data.data });
        history.push("/");
      })
      .catch((err) => {
        alert("error occured in Logining throw a debugger in here");
      });
  };

  handleLogout = (history) => {
    Axios.delete("/api/auth/sign_out")
      .then((res) => {
        this.setState({ user: null });
        history.push("/login");
      })
      .catch((err) => {
        alert("error occured in Signingout throw a debugger in here");
      });
  };

  render() {
    return (
      <AuthContext.Provider
        value={{
          ...this.state.user,
          handleRegister: this.handleRegister,
          handleLogin: this.handleLogin,
          handleLogout: this.handleLogout,
          setUser: (user) => this.setState({ user: user }),
          authenicated: this.state.user !== null,
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
