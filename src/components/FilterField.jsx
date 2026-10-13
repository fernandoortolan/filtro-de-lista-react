function FilterField({ id, labelContent }) {
  return (
    <form className="filter-field">
      <label for={id}>{labelContent}</label>
      <input type="text" id={id} name="q" />
    </form>
  )
}

export default FilterField;
