import { lighten } from 'polished';
import styled from 'styled-components';

import { COLORS, PADDINGS, SIZES } from '@/styles/contants';

interface ContainerProps {
  variant?: 'default' | 'outline' | 'text';
  color?: 'default' | 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  disableShadow?: boolean;
  startIcon?: string;
  endIcon?: string;
}

const getPadding = (size: string | undefined) => {
  switch (size) {
    case 'sm':
      return `${PADDINGS.sm}`;
    case 'md':
      return `${PADDINGS.md}`;
    case 'lg':
      return `${PADDINGS.lg}`;
    default:
      return `${PADDINGS.md}`;
  }
};

const getHeigth = (size: string | undefined) => {
  switch (size) {
    case 'sm':
      return `${SIZES.sm}`;
    case 'md':
      return `${SIZES.md}`;
    case 'lg':
      return `${SIZES.lg}`;
    default:
      return `${SIZES.sm}`;
  }
};
const getColor = (color: string | undefined) => {
  switch (color) {
    case 'primary':
      return `${COLORS.primary}`;
    case 'secondary':
      return `${COLORS.secondary}`;
    case 'danger':
      return `${COLORS.danger}`;
    default:
      return `${COLORS.default}`;
  }
};

const getColorHover = (color: string | undefined) => {
  switch (color) {
    case 'primary':
      return `${COLORS.primary_focus}`;
    case 'secondary':
      return `${COLORS.secondary_focus}`;
    case 'danger':
      return `${COLORS.danger_focus}`;
    default:
      return `${COLORS.default_focus}`;
  }
};

const getTextColor = (color: string | undefined) => {
  switch (color) {
    case 'primary':
      return `${COLORS.primary}`;
    case 'secondary':
      return `${COLORS.secondary}`;
    case 'danger':
      return `${COLORS.danger}`;
    default:
      return `${COLORS.text_gray}`;
  }
};

const getColorLighteen = (color: string | undefined) => {
  switch (color) {
    case 'primary':
      return lighten(0.4, COLORS.primary);
    case 'secondary':
      return lighten(0.6, COLORS.secondary);
    case 'danger':
      return lighten(0.45, COLORS.danger);
    default:
      return lighten(0.09, COLORS.default);
  }
};

export const Container = styled.button<ContainerProps>`
  display: flex;
  align-items: center;
  flex-direction: row;

  background: ${(props) => (props.variant === 'default' ? getColor(props.color) : 'tranparent')};

  &:hover,
  &:focus {
    background: ${(props) =>
      props.variant === 'default' && !props.disabled && !props.disableShadow
        ? getColorHover(props.color)
        : null};
  }

  &:hover,
  &:focus {
    background: ${(props) =>
      props.variant !== 'default' && !props.disabled ? getColorLighteen(props.color) : null};
  }

  color: ${(props) =>
    props.variant === 'default' && props.color !== 'default'
      ? COLORS.text_white
      : getTextColor(props.color)};

  color: ${(props) => props.disabled && COLORS.text_gray_disabled};

  outline: ${(props) =>
    props.variant === 'outline' ? `1px solid ${getColor(props.color)}` : 'none'};

  height: ${(props) => getHeigth(props.size)};
  padding: ${(props) => getPadding(props.size)};

  border-radius: 6px;

  box-shadow: ${(props) =>
    props.disableShadow || props.disabled || props.variant !== `default`
      ? 'none'
      : '0px 2px 3px rgba(51, 51, 51, 0.2)'};

  span:first-child {
    margin-right: 5px;
  }
`;

export const Content = styled.div``;
