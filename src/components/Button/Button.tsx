import { ButtonHTMLAttributes } from 'react';
import './style.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  varient?: 'contained' | 'outlined';
}

const Button = ({ children, varient = 'contained', ...rest }: ButtonProps) => {
  return (
    <button className={`button button--${varient}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
