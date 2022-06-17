import { useNews } from '@/contexts/NewsContext';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import kbtgImg from '@/assets/images/kbtg.webp';
import NewsCard from './NewsCard';
import './style.css';

const Landing = () => {
  const { newsList } = useNews();
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <div>
      <img className="landing-img" src={kbtgImg} alt="KBTG Office" />
      <div className="news-header">
        <h3>{t('news')}</h3>
        <Link className="news-header__link" to="/news">
          {t('viewAll')}
        </Link>
      </div>
      <div className="recent-news">
        {newsList.map((news, i) => (
          <div
            key={i}
            className="recent-news__item"
            onClick={() => navigate(`/news/${i}`)}
          >
            <NewsCard key={i} news={news} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Landing;
