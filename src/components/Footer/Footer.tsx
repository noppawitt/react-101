import { useTranslation } from 'react-i18next';
import './style.css';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="footer">
      <p>{t('copyright')}</p>
    </div>
  );
};

export default Footer;
