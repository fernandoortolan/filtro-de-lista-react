import MainTitle from "./components/MainTitle";
import FilterField from "./components/FilterField";
import List from "./components/List";
import books from "./data/books";

import { useState } from "react";

function App() {

  const [search, setSearch] = useState("");
  const filteredBooks = books.filter((book) =>
    book.toLowerCase().includes(search.toLocaleLowerCase())
  );

  return (
    <>
      <header>
        <MainTitle content={"Filtro de lista"} />
      </header>
      <main>
        <FilterField
          id={"book-search"}
          labelContent={"Filtrar livro: "}
          search={search}
          setSearch={setSearch}
        />
        <List list={filteredBooks} />
        {
          filteredBooks.length === 0 && (
            <p>Nenhum livro encontrado.</p>
          )
        }
      </main>
    </>
  );
}

export default App;
