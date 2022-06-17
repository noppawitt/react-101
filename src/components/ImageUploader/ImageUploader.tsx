import { ChangeEvent, InputHTMLAttributes, useRef, useState } from 'react';
import { ReactComponent as PlusIcon } from '@/assets/icons/plus.svg';
import './style.css';

export interface ImageUploaderComponent extends HTMLInputElement {
  imageUrl: string;
}

interface ImageUploaderProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  onChange?(e: ChangeEvent<ImageUploaderComponent>): void;
}

const ImageUploader = ({
  onChange,
  error,
  label = '',
  src = undefined,
  ...rest
}: ImageUploaderProps) => {
  const [image, setImage] = useState<string | undefined>(src);
  const inputEl = useRef<HTMLInputElement>(null);

  const openFileBrowser = () => {
    if (!inputEl.current) {
      return;
    }

    inputEl.current.click();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const fr = new FileReader();
    const file = e.target?.files?.[0];
    if (!file) {
      return;
    }

    fr.onload = (frEvent) => {
      if (frEvent.target && frEvent.target.result) {
        const imageUrl = frEvent.target.result as string;
        setImage(imageUrl);

        if (onChange) {
          const e2 = e as ChangeEvent<ImageUploaderComponent>;
          e2.target.imageUrl = imageUrl;

          onChange(e2);
        }
      }
    };

    fr.readAsDataURL(file);
  };

  return (
    <div className={`image-uploader${error ? ' image-uploader--error' : ''}`}>
      <label>{label}</label>
      <div className="image-uploader__preview" onClick={openFileBrowser}>
        {image ? (
          <img src={image} />
        ) : (
          <div className="image-uploader__placeholder">
            <PlusIcon />
          </div>
        )}
      </div>
      {error && <small>{error}</small>}
      <input
        {...rest}
        ref={inputEl}
        type="file"
        accept=".jpg,.png"
        onChange={handleChange}
        style={{ display: 'none' }}
      />
    </div>
  );
};

export default ImageUploader;
