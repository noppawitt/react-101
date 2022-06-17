import { Option } from '@/models/option';
import { SelectHTMLAttributes } from 'react';

interface SelectInputProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: Option[];
  label: string;
  error?: string;
}

const SelectInput = ({
  options,
  error,
  label = '',
  ...rest
}: SelectInputProps) => {
  return (
    <div className={error ? 'input--error' : ''}>
      <label>
        {label}
        <select {...rest}>
          {options.map((option, i) => (
            <option key={i} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
      {error && <small>{error}</small>}
    </div>
  );
};

export default SelectInput;
