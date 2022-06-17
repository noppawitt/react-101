import { TextareaHTMLAttributes } from 'react';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const TextArea = ({ error, label = '', ...rest }: TextAreaProps) => {
  return (
    <div className={error ? 'input--error' : ''}>
      <label>
        {label}
        <textarea {...rest} />
      </label>
      {error && <small>{error}</small>}
    </div>
  );
};

export default TextArea;
