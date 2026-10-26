import CoverIllustrationStar from '../assets/book/ilustracao-da-capa-estrela.svg';
import CoverIllustrationFoliage from '../assets/book/ilustracao-da-capa-folhagem.svg';
import CoverIllustrationRibbons from '../assets/book/ilustracao-da-capa-lacos.svg';
import CoverIllustrationWaves from '../assets/book/ilustracao-da-capa-ondas.svg';
import BookSpine from '../assets/book/lombada.svg';
import PublisherImprint from '../assets/book/selo-editorial.svg';
import Bookmark from '../assets/icons/bookmark.svg';
import BookmarkChecked from '../assets/icons/bookmark-checked.svg';
import ArrowUpRight from '../assets/icons/arrow-up-right.svg';

import { useState } from 'react';

const coverIllustrations = {
  0: CoverIllustrationStar,
  1: CoverIllustrationFoliage,
  2: CoverIllustrationRibbons,
  3: CoverIllustrationWaves,
};

const coverColors = {
  0: "book__cover-color--one",
  1: "book__cover-color--two",
  2: "book__cover-color--three",
  3: "book__cover-color--four",
  4: "book__cover-color--five",
  5: "book__cover-color--six",
  6: "book__cover-color--seven",
  7: "book__cover-color--eight",
  8: "book__cover-color--nine",
  9: "book__cover-color--ten",
};

function BookList({ list, changeBookmarkStatus }) {
  const [isSpacePressed, setIsSpacePressed] = useState(false);

  const listItems = list.map((item) => (
    <li
      className="book"
      key={item.id}
    >
      <div className="book__details">
        <div
          className={`book__cover ${coverColors[item.cover_color]}`}
          aria-hidden="true"
        >
          <img
            className="book__spine"
            src={BookSpine}
            alt=""
          />
          <img
            className="book__publisher-imprint"
            src={PublisherImprint}
            alt=""
          />
          <img
            className="book__cover-illustration"
            src={coverIllustrations[item.cover_illustration]}
            alt=""
          />
          <div className="book__display-author-and-title">
            <span
              className="book__display-author"
            >
              {item.display_author}
            </span>
            <span
              className="book__display-title"
            >
              {item.display_title}
            </span>
          </div>
        </div>
        <dl className="book__information">
          <div className="book__title">
            <dt className="visually-hidden">
              Título
            </dt>
            <dd>
              {item.title ?? 'Não cadastrado'}
            </dd>
          </div>
          <div className="book__authorship-and-publication">
            <div className="book__author">
              <dt className="visually-hidden">Autor</dt>
              <dd>
                {item.author ?? 'Não cadastrado'}
              </dd>
            </div>
            <span className="book__separator" aria-hidden="true">*</span>
            <div className="book__publication-year">
              <dt className="visually-hidden">Ano de publicação</dt>
              <dd>
                {item.publication_year ?? 'Não cadastrado'}
              </dd>
            </div>
          </div>
          <div className="book__synopsis">
            <dt className="visually-hidden">Sinopse</dt>
            <dd>
              {item.synopsis ?? 'Não cadastrada'}
            </dd>
          </div>
        </dl>
      </div>
      <div className="book__metadata">
        <dl className="book__edition-details">
          <div className="book__genre">
            <dt className="visually-hidden">Gênero</dt>
            <dd>
              {item.genre ?? 'Não cadastrado'}
            </dd>
          </div>
          <div className="book__format">
            <dt className="visually-hidden">Formato</dt>
            <dd>
              {item.format ?? 'Não cadastrado'}
            </dd>
          </div>
          <div className="book__page-count">
            <dt className="visually-hidden">Número de páginas</dt>
            <dd>
              {
                item.pages === 1
                  ? `${item.pages} página`
                  : item.pages > 1
                    ? `${item.pages} páginas`
                    : 'Não cadastrado'
              }
            </dd>
          </div>
        </dl>
        <div className="book__bookmark-and-external-link">
          <div className="book__bookmark">
            <label
              htmlFor={`bookmark-${item.id}`}
              className={`book__bookmark-label ${isSpacePressed ? 'is-pressed' : ''}`}
            >
              <input
                type="checkbox"
                className="book__bookmark-checkbox"
                id={`bookmark-${item.id}`}
                checked={item.bookmarked}
                aria-label={
                  item.bookmarked
                    ? `Remover ${item.title} dos favoritos`
                    : `Adicionar ${item.title} aos favoritos`
                }
                onChange={() => changeBookmarkStatus(item.id)}
                onKeyDown={(event) => {
                  if (event.code === 'Space') {
                    setIsSpacePressed(true);
                  }
                }}
                onKeyUp={(event) => {
                  if (event.code === 'Space') {
                    setIsSpacePressed(false);
                  }
                }}
              />
              <img
                src={item.bookmarked ? BookmarkChecked : Bookmark}
                alt=""
                aria-hidden="true"
                className="book__bookmark-icon"
              />
            </label>
          </div>
          <div className="book__external-link-container">
            <a
              href="#"
              className="book__external-link"
              aria-label={`Ver página do livro ${item.title} (abre em nova aba)`}
            >
              <img
                src={ArrowUpRight}
                alt="Abrir página do livro"
                className="book__external-link-icon"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </div>
    </li>
  ));

  return (
    <ul className="book-list scroll">
      {listItems}
    </ul>
  );
}

export default BookList;
