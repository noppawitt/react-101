import { useNews } from '@/contexts/NewsContext';
import { News } from '@/models/news';
import { useNavigate } from 'react-router-dom';
import NewsForm from '../NewsForm';

const NewsAdd = () => {
  const { addNews } = useNews();
  const navigate = useNavigate();

  const handleAddNews = (news: News) => {
    addNews(news);
    navigate(-1);
  };

  return <NewsForm onSubmit={handleAddNews} />;
};

export default NewsAdd;
