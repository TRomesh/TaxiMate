import React, { Component } from "react";
import { Container } from "native-base";
import App from "./containers/loginContainer";
import configureStore from "./store/store";
import { Provider } from "react-redux";

const store = configureStore();

export default class AnatomyExample extends Component {
  render() {
    return (
      <Provider store={store}>
        <Container>
          <App />
        </Container>
      </Provider>
    );
  }
}
