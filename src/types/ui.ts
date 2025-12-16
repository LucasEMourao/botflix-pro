import { ButtonHTMLAttributes, DetailedHTMLProps, InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

export interface IButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'small' | 'medium' | 'large';
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
}

export interface IInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  variant?: 'filled' | 'outlined';
}

export interface ITextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  variant?: 'filled' | 'outlined';
  resize?: 'vertical' | 'horizontal' | 'both' | 'none';
}

export interface ICardProps {
  children: React.ReactNode;
  className?: string;
  elevation?: number;
  onClick?: () => void;
}