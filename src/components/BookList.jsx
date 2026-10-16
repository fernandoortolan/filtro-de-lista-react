import CoverIllustrationStar from '../assets/book/ilustracao-da-capa-estrela.svg';
import CoverIllustrationFoliage from '../assets/book/ilustracao-da-capa-folhagem.svg';
import CoverIllustrationRibbons from '../assets/book/ilustracao-da-capa-lacos.svg';
import CoverIllustrationWaves from '../assets/book/ilustracao-da-capa-ondas.svg';
import BookSpine from '../assets/book/lombada.svg';
import PublisherImprint from '../assets/book/selo-editorial.svg';

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
};

function List({ list }) {
  const listItems = list.map((item) => (
    <li className="book" key={item.id}>
      <div className="book__c-i">
        <div className={`book__cover ${coverColors[item.cover_color]}`}>
          <img className="book__spine" src={BookSpine} alt="" />
          <img className="book__publisher-imprint" src={PublisherImprint} alt="" />
          <img className="book__cover-illustration" src={coverIllustrations[item.cover_illustration]} alt="" />
          <span className="book__display-author" lang="pt">
            {item.display_author}
          </span>
          <span className="book__display-title" lang="pt">
            {item.display_title}
          </span>
        </div>
        <div className="book__information">
          <span className="book__title">
            {item.title ?? 'Título não cadastrado'}
          </span>
          <div className="book__authorship-and-publication">
            <span className="book__author">
              {item.author ?? 'Autor não cadastrado'}
            </span>
            <span className="book__separator" aria-hidden="true">*</span>
            <span className="book__publication-year">
              {item.publication_year ?? 'Ano de publicação não cadastrado'}
            </span>
          </div>
          <span className="book__synopsis">
            {item.synopsis ?? 'Sinopse não cadastrada'}
          </span>
        </div>
      </div>
      <div className="book__ed-b-el">
        <div className="book__edition-details">
          <span className="book__genre">
            {item.genre ?? 'Gênero não cadastrado'}
          </span>
          <span className="book__format-and-extension">
            <span className="book__format">
              {item.format ?? 'Formato não cadastrado'}
            </span>
            <span className="book__separator">*</span>
            <span className="book__page-count">
              {item.pages ?? 'N.º de páginas não cadastrado'}
            </span>
          </span>
        </div>
        <div className="book__bookmark">
          <span className="book__bookmark-icon">Icon</span>
        </div>
        <div className="book__external-link">
          <span>Icon</span>
        </div>
      </div>
    </li>
  ));

  return (
    <ul className="book-list">
      {listItems}
    </ul>
  );
}

export default List;
