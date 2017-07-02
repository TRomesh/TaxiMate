import React, { Component } from 'react';
import { Container} from 'native-base';
import App from './containers/loginContainer';
export default class AnatomyExample extends Component {
  render() {
    return (
      <Container>
        <App/>
      </Container>
    );
  }
}
