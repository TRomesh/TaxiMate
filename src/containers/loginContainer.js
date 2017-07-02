import React, { Component } from 'react';
import { Container, Content, Form, Item, Input, Label, Button, Text } from 'native-base';
export default class FixedLabelExample extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item fixedLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item fixedLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
              <Button full>
                <Text>Login</Text>
              </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}
