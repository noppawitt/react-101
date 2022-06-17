import { News } from '@/models/news';
import { useTranslation } from 'react-i18next';
import './style.css';

interface NewsCardProps {
  news: News;
}

const NewsCard = ({ news }: NewsCardProps) => {
  const { i18n } = useTranslation();

  return (
    <div className="news-card">
      <img className="news-card__image" src={news.coverImage} />
      <div className="news-card__overlay">
        <p>{news.content[i18n.language]}</p>
      </div>
    </div>
  );
};

export default NewsCard;
