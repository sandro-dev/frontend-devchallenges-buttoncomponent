import React from 'react';
import { Button } from '../../components/Button';
import { Container, Content } from './style';

export const Dashboard: React.FC = () => {
  return (
    <Container>
      <h1>Buttons</h1>
      <Content>
        <Button title='Default' />
      </Content>
    </Container>
  )
}