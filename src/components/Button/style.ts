import styled from 'styled-components';

type ContainerProps = {
  text: string;
  variant?: 'default' | 'outline' | 'text';
  color?: 'default' | 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  disableShadow?: boolean;
  startIcon?: string;
  endIcon?: string;
}

export const Container = styled.button<ContainerProps>`
  
  background: ${props => props.variant ===  'default' ? '#f00' : '#fff' };


  box-shadow: 0px 2px 3px rgba(51, 51, 51, 0.2);
  border-radius: 6px;

  padding: 1rem 2rem;
`;