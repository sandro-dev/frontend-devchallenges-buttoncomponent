import { ButtonHTMLAttributes } from 'react';

import { Container, Content } from './style';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: 'default' | 'outline' | 'text';
  color?: 'default' | 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  disableShadow?: boolean;
  startIcon?: 'home' | 'bookmarks' | 'login' | 'logout' | 'thumb_up';
  endIcon?: 'reorder' | 'settings' | 'fingerprint' | 'delete' | 'favorite_border';
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
  ...rest
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
      {...rest}
    >
      <Content>
        {startIcon && <span className="material-icons">{startIcon}</span>}
        <span>{text}</span>
        {endIcon && <span className="material-icons">{endIcon}</span>}
      </Content>
    </Container>
  );
};
