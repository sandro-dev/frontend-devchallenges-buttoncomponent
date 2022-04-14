import React from 'React'
import { Container } from './style';

type ButtonProps = {
  title: string;
}

export const Button: React.FC<ButtonProps> = ({title}) => {
  return (
    <Container>
      {title}
    </Container>
  )
}