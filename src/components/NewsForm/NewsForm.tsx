import { News } from '@/models/news';
import { set } from '@/utils/object';
import { translatedOptions } from '@/utils/option';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import ImageUploader, { ImageUploaderComponent } from '../ImageUploader';
import SelectInput from '../SelectInput';
import TextArea from '../TextArea';
import TextInput from '../TextInput';
import './style.css';

interface NewsFormProps {
  defaultValue?: News;
  onSubmit(news: News): void;
}

const initialNews: News = {
  content: {
    th: '',
    en: '',
  },
  category: 'news',
  coverImage: '',
  updatedAt: new Date().toISOString().substring(0, 16),
};

const NewsForm = ({ onSubmit, defaultValue = initialNews }: NewsFormProps) => {
  const [news, setNews] = useState<News>(defaultValue);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const categoryOptions = translatedOptions(['news', 'announcement'], t);

  const handleChange = <
    T extends
      | HTMLInputElement
      | HTMLSelectElement
      | HTMLTextAreaElement
      | ImageUploaderComponent,
  >(
    e: ChangeEvent<T>,
  ) => {
    let value: string;
    if (e.target.name === 'coverImage') {
      value = (e as ChangeEvent<ImageUploaderComponent>).target.imageUrl;
    } else {
      value = e.target.value;
    }

    setNews(set(news, e.target.name, value));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(news);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="news-form__form">
        <div>
          <TextArea
            name="content.th"
            label={t('titleTH')}
            value={news.content['th']}
            onChange={handleChange}
            rows={8}
            required
          />
          <TextArea
            name="content.en"
            label={t('titleEN')}
            value={news.content['en']}
            onChange={handleChange}
            rows={8}
            required
          />
          <SelectInput
            name="category"
            label={t('category')}
            value={news.category}
            options={categoryOptions}
            onChange={handleChange}
            required
          />
          <TextInput
            name="updatedAt"
            label={t('effectiveDate')}
            value={news.updatedAt}
            type="datetime-local"
            onChange={handleChange}
            required
          />
        </div>

        <div className="news-form__cover-image">
          <ImageUploader
            name="coverImage"
            label={t('coverImage')}
            src={news.coverImage}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="news-form__control">
        <Button type="submit">{t('save')}</Button>
        <Button onClick={() => navigate(-1)} varient="outlined">
          {t('cancel')}
        </Button>
      </div>
    </form>
  );
};

export default NewsForm;
