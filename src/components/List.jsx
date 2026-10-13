function List({ list }) {
  const listItems = list.map((item) => (
    <li key={item.id}>
      {item.name}
    </li>
  ));

  return (
    <ul>
      {listItems}
    </ul>
  );
}

export default List;
