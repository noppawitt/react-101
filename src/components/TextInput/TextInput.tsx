import { InputHTMLAttributes } from 'react';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const TextInput = ({ error, label = '', ...rest }: TextInputProps) => {
  return (
    <div className={error ? 'input--error' : ''}>
      <label>
        {label}
        <input {...rest} />
      </label>
      {error && <small>{error}</small>}
    </div>
  );
};

export default TextInput;
