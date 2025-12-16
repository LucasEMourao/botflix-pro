import styled from 'styled-components';
import { ITextAreaProps } from '../../types';

interface StyledTextAreaProps {
  $variant?: 'filled' | 'outlined';
  $hasError?: boolean;
  $resize?: 'vertical' | 'horizontal' | 'both' | 'none';
  $fullWidth?: boolean;
}

interface TextAreaComponentProps extends ITextAreaProps {
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
`;

const StyledTextAreaWrapper = styled.div<StyledTextAreaProps>`
  position: relative;
`;

const StyledTextArea = styled.textarea<StyledTextAreaProps>`
  width: 100%;
  padding: 16px;
  background: ${({ $variant }) =>
    $variant === 'filled' ? 'rgba(255, 255, 255, 0.05)' : '#000'};
  color: #fff;
  font-size: 16px;
  font-family: inherit;
  border: 1px solid
    ${({ $hasError }) => ($hasError ? '#ff4d4d' : 'rgba(255, 255, 255, 0.3)')};
  border-radius: 8px;
  transition: all 0.2s ease;
  resize: ${({ $resize = 'vertical' }) => $resize};

  &:focus {
    border-color: ${({ $hasError }) =>
      $hasError ? '#ff4d4d' : '#e50914'};
    outline: none;
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

const TextArea: React.FC<TextAreaComponentProps> = ({
  label,
  error,
  helperText,
  variant = 'filled',
  resize = 'vertical',
  fullWidth,
  ...props
}) => {
  return (
    <StyledContainer $fullWidth={fullWidth}>
      {label && <StyledLabel>{label}</StyledLabel>}
      <StyledTextAreaWrapper $variant={variant} $hasError={!!error} $resize={resize}>
        <StyledTextArea
          $variant={variant}
          $hasError={!!error}
          $resize={resize}
          {...props}
        />
      </StyledTextAreaWrapper>
      {(helperText || error) && (
        <StyledHelperText $hasError={!!error}>
          {error || helperText}
        </StyledHelperText>
      )}
    </StyledContainer>
  );
};

export default TextArea;