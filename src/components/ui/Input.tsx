import styled from 'styled-components';
import { IInputProps } from '../../types';

interface StyledInputProps {
  $variant?: 'filled' | 'outlined';
  $hasError?: boolean;
  $fullWidth?: boolean;
}

interface InputComponentProps extends IInputProps {
  fullWidth?: boolean;
}

const StyledContainer = styled.div<{ $fullWidth?: boolean }>`
  display: flex;
  flex-direction: column;
  width: ${({ $fullWidth }) => $fullWidth ? '100%' : 'auto'};
  margin-bottom: 12px;
`;

const StyledLabel = styled.label`
  margin-bottom: 4px;
  font-size: 14px;
  color: #fff;
  font-weight: 500;
`;

const StyledInputWrapper = styled.div<StyledInputProps>`
  position: relative;
`;

const StyledInput = styled.input<StyledInputProps>`
  width: 100%;
  padding: 12px 16px;
  background: ${({ $variant }) =>
    $variant === 'filled' ? 'rgba(255, 255, 255, 0.05)' : '#000'};
  color: #fff;
  font-size: 16px;
  font-family: inherit;
  border: 1px solid
    ${({ $hasError }) => ($hasError ? '#ff4d4d' : 'rgba(255, 255, 255, 0.3)')};
  border-radius: 8px;
  transition: all 0.2s ease;

  &:focus {
    border-color: ${({ $hasError }) =>
      $hasError ? '#ff4d4d' : '#e50914'};
    outline: 2px solid #e50914;
    outline-offset: 2px;
    box-shadow: 0 0 0 3px
      ${({ $hasError }) =>
        $hasError ? 'rgba(255, 77, 77, 0.1)' : 'rgba(229, 9, 20, 0.1)'};
  }

  &::placeholder {
    color: #ebebeb;
    opacity: 1;
  }
`;

const StyledHelperText = styled.p<{ $hasError?: boolean }>`
  margin-top: 4px;
  font-size: 12px;
  color: ${({ $hasError }) => ($hasError ? '#ff4d4d' : '#d0d0d0')};
`;

const Input: React.FC<InputComponentProps> = ({
  label,
  error,
  helperText,
  variant = 'filled',
  fullWidth,
  id,
  ...props
}) => {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
  const hasError = !!error;

  return (
    <StyledContainer $fullWidth={fullWidth}>
      {label && (
        <StyledLabel htmlFor={inputId}>
          {label}
        </StyledLabel>
      )}
      <StyledInputWrapper $variant={variant} $hasError={hasError}>
        <StyledInput
          id={inputId}
          $variant={variant}
          $hasError={hasError}
          aria-invalid={hasError}
          aria-describedby={hasError ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
          {...props}
        />
      </StyledInputWrapper>
      {error && (
        <StyledHelperText id={`${inputId}-error`} $hasError={true}>
          {error}
        </StyledHelperText>
      )}
      {!error && helperText && (
        <StyledHelperText id={`${inputId}-helper`} $hasError={false}>
          {helperText}
        </StyledHelperText>
      )}
    </StyledContainer>
  );
};

export default Input;