function FilterField({
  id,
  labelContent,
  search,
  setSearch
}) {
  return (
    <form className="filter-field">
      <label for={id}>{labelContent}</label>
      <input
        type="text"
        id={id}
        name="q"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
    </form>
  )
}

export default FilterField;
