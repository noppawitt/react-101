import { useNews } from '@/contexts/NewsContext';
import { ChangeEvent, MouseEvent, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SearchPanel from './SearchPanel';
import { ReactComponent as ThreeDotsVerticalIcon } from '@/assets/icons/three-dots-vertical.svg';
import Popover from '../Popover';
import { formatDate } from '@/utils/date';
import './style.css';

const pageSizes = [5, 10, 20, 50];

const NewsList = () => {
  const { newsList, deleteNews } = useNews();
  const [filter, setFilter] = useState({ title: '', category: 'all' });
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [selectedRow, setSelectedRow] = useState<number | null>(null);
  const { t, i18n } = useTranslation();

  const navigate = useNavigate();

  const filteredNewsList = newsList
    .filter(
      (news) => filter.category === 'all' || news.category === filter.category,
    )
    .filter(
      (news) =>
        news.content.th.includes(filter.title) ||
        news.content.en.includes(filter.title),
    );

  const pageOffset = (currentPage - 1) * pageSize;
  const totalPages = Math.ceil(filteredNewsList.length / pageSize);

  const paginationPages = (): number[] => {
    let pages = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }

      return pages;
    }

    if (currentPage <= 4) {
      pages = [1, 2, 3, 4, 5, 0, totalPages];
    } else if (totalPages - currentPage < 4) {
      pages = [
        1,
        0,
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    } else {
      pages = [
        1,
        0,
        currentPage - 1,
        currentPage,
        currentPage + 1,
        0,
        totalPages,
      ];
    }

    return pages;
  };

  const handlePageSizeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setCurrentPage(1);
    setPageSize(Number(e.target.value));
  };

  const handleClickOption = (e: MouseEvent<HTMLButtonElement>, row: number) => {
    setSelectedRow(row);
    setAnchorEl(e.currentTarget);
  };

  const handleCloseOption = () => {
    setSelectedRow(null);
    setAnchorEl(null);
  };

  const handleDeleteNews = () => {
    if (selectedRow === null) {
      return;
    }

    deleteNews(selectedRow);
    handleCloseOption();
  };

  useEffect(() => {
    if (currentPage > 1 && currentPage > totalPages) {
      setCurrentPage(currentPage - 1);
    }
  }, [totalPages]);

  return (
    <>
      <SearchPanel
        onSearch={(title, category) => setFilter({ title, category })}
      />
      <div className="news-list__add-link">
        <Link className="add-link__link" to="/news/add">
          + {t('createNews')}
        </Link>
      </div>
      <div className="news-list__table">
        <div className="table__row">
          <div>{t('no')}</div>
          <div>{t('title')}</div>
          <div>{t('category')}</div>
          <div>{t('updatedDate')}</div>
          <div />
        </div>
        {filteredNewsList
          .slice(pageOffset, pageOffset + pageSize)
          .map((news, i) => (
            <div className="table__row" key={i}>
              <div>{pageOffset + 1 + i}</div>
              <div>{news.content[i18n.language]}</div>
              <div>{t(news.category)}</div>
              <div>{formatDate(news.updatedAt)}</div>
              <button
                className="row__option"
                onClick={(e) => handleClickOption(e, i)}
              >
                <ThreeDotsVerticalIcon />
              </button>
            </div>
          ))}
      </div>
      <div className="news-list__pagination">
        <div className="pagination__pages">
          {paginationPages().map((page, i) => {
            return (
              <a
                key={i}
                className={page === currentPage ? 'active' : ''}
                onClick={() => page > 0 && setCurrentPage(page)}
              >
                {page > 0 ? page : '...'}{' '}
              </a>
            );
          })}
        </div>
        <div className="pagination__summary">
          {t('rowsPerPage')}
          <select value={pageSize} onChange={handlePageSizeChange}>
            {pageSizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
          {pageOffset + 1}-
          {Math.min(pageOffset + pageSize, filteredNewsList.length)} of{' '}
          {filteredNewsList.length}
        </div>
      </div>
      <Popover
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseOption}
      >
        <div className="row__option-menu">
          <div onClick={() => navigate(`/news/${selectedRow}`)}>
            {t('view')}
          </div>
          <div onClick={() => navigate(`/news/${selectedRow}/edit`)}>
            {t('edit')}
          </div>
          <div onClick={handleDeleteNews}>{t('delete')}</div>
        </div>
      </Popover>
    </>
  );
};

export default NewsList;
