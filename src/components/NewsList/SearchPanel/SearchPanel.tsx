import Button from '@/components/Button/Button';
import SelectInput from '@/components/SelectInput';
import TextInput from '@/components/TextInput';
import { translatedOptions } from '@/utils/option';
import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './style.css';

interface SearchPanelProps {
  onSearch(title: string, category: string): void;
}

const SearchPanel = ({ onSearch }: SearchPanelProps) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('all');
  const { t } = useTranslation();

  const categoryOptions = translatedOptions(['all', 'news', 'announcement'], t);

  const handleKeydown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearch(title, category);
    }
  };

  return (
    <div className="search-panel__container">
      <TextInput
        value={title}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setTitle(e.target.value)
        }
        onKeyDown={handleKeydown}
        label={t('title')}
      />
      <SelectInput
        value={category}
        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
          setCategory(e.target.value)
        }
        options={categoryOptions}
        label={t('category')}
      />
      <div className="search-panel__search-button">
        <Button onClick={() => onSearch(title, category)}>{t('search')}</Button>
      </div>
    </div>
  );
};

export default SearchPanel;
