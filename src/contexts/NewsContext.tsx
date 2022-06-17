import { News } from '@/models/news';
import { createContext, ReactNode, useContext, useState } from 'react';

export interface NewsContext {
  newsList: News[];
  addNews(news: News): void;
  editNews(idx: number, news: News): void;
  deleteNews(idx: number): void;
}

const NewsContext = createContext<NewsContext | undefined>(undefined);

export const useNews = (): NewsContext => {
  const context = useContext(NewsContext);

  if (!context) {
    throw new Error('useNewsContext must be used within a NewsProvider');
  }

  return context;
};

interface NewsProviderProps {
  children: ReactNode;
  data?: News[];
}

export const NewsProvider = ({ children, data = [] }: NewsProviderProps) => {
  const [newsList, setNewsList] = useState<News[]>(data);

  const addNews = (news: News) => setNewsList([news, ...newsList]);

  const editNews = (idx: number, editedNews: News) => {
    setNewsList(newsList.map((news, i) => (i === idx ? editedNews : news)));
  };

  const deleteNews = (idx: number) =>
    setNewsList([...newsList.slice(0, idx), ...newsList.slice(idx + 1)]);

  const newsContextValue: NewsContext = {
    newsList,
    addNews,
    editNews,
    deleteNews,
  };

  return (
    <NewsContext.Provider value={newsContextValue}>
      {children}
    </NewsContext.Provider>
  );
};
