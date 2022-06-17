import { NewsProvider } from '@/contexts/NewsContext';
import { Outlet, Route, Routes } from 'react-router-dom';
import Breadcrumbs from '../Breadcrumbs';
import Footer from '../Footer';
import Header from '../Header';
import Landing from '../Landing';
import NewsAdd from '../NewsAdd';
import NewsContent from '../NewsContent';
import NewsEdit from '../NewsEdit';
import NewsList from '../NewsList';
import './style.css';
import data from '@/data.json';

const Layout = () => {
  return (
    <div className="app">
      <Header />
      <div className="app__container">
        <Breadcrumbs />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <NewsProvider data={data}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="news" element={<NewsList />} />
          <Route path="news/add" element={<NewsAdd />} />
          <Route path="news/:id" element={<NewsContent />} />
          <Route path="news/:id/edit" element={<NewsEdit />} />
        </Route>
      </Routes>
    </NewsProvider>
  );
};

export default App;
