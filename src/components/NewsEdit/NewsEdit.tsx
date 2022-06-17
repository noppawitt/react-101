import { useNews } from '@/contexts/NewsContext';
import { News } from '@/models/news';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import NewsForm from '../NewsForm';

const NewsEdit = () => {
  const { id } = useParams();
  const { newsList, editNews } = useNews();
  const [news, setNews] = useState<News | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const idx = Number(id);
    if (idx >= 0 && idx < newsList.length) {
      setNews(newsList[idx]);
    }
  }, []);

  if (!news) {
    return <div>Not Found</div>;
  }

  const handleSubmit = (news: News) => {
    editNews(Number(id), news);
    navigate(-1);
  };

  return <NewsForm defaultValue={news} onSubmit={handleSubmit} />;
};

export default NewsEdit;
