import { useNavigate } from 'react-router-dom';
import LangSwitcher from './LangSwitcher/LangSwitcher';
import logo from '@/assets/images/logo.png';
import './style.css';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="header">
      <img
        className="header__logo"
        src={logo}
        alt="logo"
        onClick={() => navigate('/')}
      />
      <div className="header__lang-switcher">
        <LangSwitcher />
      </div>
    </div>
  );
};

export default Header;
