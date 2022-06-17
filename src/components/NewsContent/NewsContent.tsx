import { useNews } from '@/contexts/NewsContext';
import { News } from '@/models/news';
import { formatDate } from '@/utils/date';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import './style.css';

const NewsContent = () => {
  const { id } = useParams();
  const { newsList } = useNews();
  const [news, setNews] = useState<News | null>(null);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const idx = Number(id);
    if (idx >= 0 && idx < newsList.length) {
      setNews(newsList[idx]);
    }
  }, []);

  if (!news) {
    return <div>{t('notFound')}</div>;
  }

  return (
    <div className="news-content__container">
      <img className="news-content__image" src={news.coverImage} />
      <div>
        <div className="news-content__content">
          {news.content[i18n.language]}
        </div>
        <div className="news-content__info">
          <p>
            {t('category')}: {t(news.category)} {t('updatedDate')}:{' '}
            {formatDate(news.updatedAt)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsContent;
