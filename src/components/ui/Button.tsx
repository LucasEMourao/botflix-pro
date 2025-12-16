import styled from 'styled-components';
import { IButtonProps } from '../../types';

const ButtonVariants = {
  primary: {
    background: ({ theme }: { theme: any }) => theme.colors.primary.main,
    hover: ({ theme }: { theme: any }) => theme.colors.primary.light,
  },
  secondary: {
    background: ({ theme }: { theme: any }) => theme.colors.neutral.darkGray,
    hover: ({ theme }: { theme: any }) => theme.colors.neutral.gray,
  },
  tertiary: {
    background: 'transparent',
    hover: 'rgba(255, 255, 255, 0.1)',
  },
};

const SizeVariants = {
  small: {
    padding: '8px 16px',
    fontSize: '14px',
  },
  medium: {
    padding: '12px 24px',
    fontSize: '16px',
  },
  large: {
    padding: '16px 32px',
    fontSize: '18px',
  },
};

interface StyledButtonProps {
  $variant: 'primary' | 'secondary' | 'tertiary';
  $size: 'small' | 'medium' | 'large';
  $fullWidth: boolean;
  $loading: boolean;
  disabled: boolean;
}

const StyledButton = styled.button<StyledButtonProps>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: ${({ $variant = 'primary', theme }) => ButtonVariants[$variant].background({ theme })};
  color: #fff;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  transition: all 0.2s ease;
  text-decoration: none;
  min-height: 44px; // Minimum touch target size for accessibility

  ${({ $size = 'medium' }) => SizeVariants[$size]}

  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};

  &:hover:not(:disabled) {
    background: ${({ $variant = 'primary', theme }) => ButtonVariants[$variant].hover({ theme })};
    transform: ${({ disabled }) => (disabled ? 'none' : 'translateY(-1px)')};
    box-shadow: ${({ disabled }) =>
      disabled ? 'none' : '0 10px 25px rgba(229, 9, 20, 0.3)'};
  }

  &:focus-visible {
    outline: 2px solid #fff;
    outline-offset: 2px;
    border-radius: 8px;
  }

  & > span {
    transition: transform 0.2s ease;
  }

  &:hover:not(:disabled) > span {
    transform: scale(1.1);
  }

  ${({ $loading }) =>
    $loading &&
    `
    & > :not(.loading-spinner) {
      opacity: 0;
    }
  `}
`;

const Spinner = styled.span`
  position: absolute;
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const Button: React.FC<IButtonProps> = ({
  children,
  loading,
  disabled,
  variant = 'primary',
  size = 'medium',
  fullWidth,
  type = 'button',
  ...props
}) => {
  return (
    <StyledButton
      type={type}
      $variant={variant}
      $size={size}
      $fullWidth={!!fullWidth}
      $loading={!!loading}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <Spinner className="loading-spinner" />}
      {children}
    </StyledButton>
  );
};

export default Button;