import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import './style.css';

interface PathFragment {
  key: string;
  path: string;
}

const extractLocation = (location: string): PathFragment[] => {
  const rootFragment: PathFragment = {
    key: 'home',
    path: '/',
  };

  if (location === '/') {
    return [rootFragment];
  }

  let currentPath = '';
  const fragments = location
    .split('/')
    .slice(1)
    .map((v) => {
      currentPath += '/' + v;
      return {
        key: v,
        path: currentPath,
      };
    });

  return [rootFragment, ...fragments];
};

const Breadcrumbs = () => {
  const location = useLocation();
  const fragments = extractLocation(location.pathname);
  const { t } = useTranslation();

  if (fragments.length === 1) {
    return null;
  }

  return (
    <div className="breadcrumbs">
      {fragments.map((fragment, i) => (
        <Fragment key={i}>
          {i < fragments.length - 1 ? (
            <>
              <Link to={fragment.path}>{t(fragment.key)}</Link>
              <span>{' > '}</span>
            </>
          ) : (
            <span className="breadcrumbs__active">{t(fragment.key)}</span>
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default Breadcrumbs;
