import FilterField from "./components/FilterField";
import MainTitle from "./components/MainTitle";
import List from "./components/List";
import Paragraph from "./components/Paragraph";

import books from "./data/books";

import './App.css';


import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const filteredBooks = books.filter((book) =>
    book.name.toLowerCase().includes(search.toLocaleLowerCase())
  );

  return (
    <>
      <header className="hero">
        <div className="hero__content">
          <MainTitle
            className={"hero__title"}
            content={"Encontre sua próxima leitura."}
          />
          <Paragraph
            className={"hero__subtitle"}
            content={"Para cada momento, um livro."}
          />
          <Paragraph
            className={"hero__description"}
            content={"Histórias que ficam. Autores que acompanham. \
              Explore o seu próximo encontro."}
          />
        </div>
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
