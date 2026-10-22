import BookOpen from '../assets/icons/book-open.svg';

import './Logo.css';

function Logo() {
  return (
    <a href="#" className="logo">
      <span className="logo__icon">
        <img src={BookOpen} alt="" />
      </span>
      <span className="logo__name">
        Entrelinhas
      </span>
      <span className="logo__signature">
        Biblioteca digital
      </span>
    </a>
  );
}

export default Logo;
