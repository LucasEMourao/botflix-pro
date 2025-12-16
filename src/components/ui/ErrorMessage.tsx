import styled from 'styled-components';

const ErrorMessageWrapper = styled.div`
  padding: 12px 16px;
  background-color: #ff4d4d;
  color: white;
  border-radius: 8px;
  font-size: 14px;
  margin: 8px 0;
  animation: fadeIn 0.3s ease;
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

interface ErrorMessageProps {
  message: string;
  className?: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, className }) => {
  return (
    <ErrorMessageWrapper className={className}>
      {message}
    </ErrorMessageWrapper>
  );
};

export default ErrorMessage;