import React from 'React'

import { Container } from './style'

type ButtonProps = {
  text: string
  variant?: 'default' | 'outline' | 'text'
  color?: 'default' | 'primary' | 'secondary' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  disableShadow?: boolean
  startIcon?: string
  endIcon?: string
}

export const Button: React.FC<ButtonProps> = ({
  text,
  variant = 'default',
  color = 'default',
  size = 'md',
  disabled,
  disableShadow,
  startIcon,
  endIcon,
}) => {
  return (
    <Container
      variant={variant}
      color={color}
      size={size}
      disabled={disabled}
      disableShadow={disableShadow}
      startIcon={startIcon}
      endIcon={endIcon}
    >
      {text}
    </Container>
  )
}
