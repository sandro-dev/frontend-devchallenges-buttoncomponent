import React from 'react';
import { Button } from '../../components/Button';
import { Container, Content } from './style';

export const Dashboard: React.FC = () => {
  return (
    <Container>
      <h1>Buttons</h1>
      <Content>
        <div>
          <Button text='Default' />
          <Button text='outline' variant='outline' />
          <Button text='text' variant='text' />
        </div>
        <div>
          <Button text='Default' />
          <Button text='outline' variant='outline' />
          <Button text='text' variant='text' />
        </div>
      </Content>
    </Container>
  )
}