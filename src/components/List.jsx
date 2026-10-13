function List({ list }) {
  const listItems = list.map((item) => (
    <li key={item}>
      {item}
    </li>
  ));

  return (
    <ul>
      {listItems}
    </ul>
  );
}

export default List;
