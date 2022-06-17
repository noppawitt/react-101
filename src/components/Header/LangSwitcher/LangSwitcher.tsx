import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './style.css';

const langs = ['th', 'en'];

const LangSwitcher = () => {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language);

  const handleChangeLang = (lang: string) => {
    setCurrentLang(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <div>
      {langs.map((lang, i) => (
        <span key={i}>
          <a
            className={`lang-switcher__lang ${
              currentLang === langs[i] ? 'lang-switcher__lang--active' : ''
            }`}
            onClick={() => handleChangeLang(langs[i])}
          >
            {lang}
          </a>
          {i === langs.length - 1 ? '' : ' | '}
        </span>
      ))}
    </div>
  );
};

export default LangSwitcher;
