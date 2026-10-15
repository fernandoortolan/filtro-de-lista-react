import MagnifyingGlass from '../assets/icons/magnifying-glass.svg';

function SearchField({
  id,
  labelContent,
  search,
  setSearch
}) {
  return (
    <form className="search-field">
      <div className="search-field__label-group">
        <label htmlFor={id}>{labelContent}</label>
        <p className="search-field__info">Resultados conforme você digita</p>
      </div>
      <div className="search-field__input-group">
        <img
          className="magnifying-glass-icon"
          src={MagnifyingGlass}
          alt="Search icon"
        />
        <input
          type="text"
          id={id}
          name="q"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>
    </form>
  );
}

export default SearchField;
