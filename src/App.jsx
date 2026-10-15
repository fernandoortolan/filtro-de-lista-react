import SearchField from "./components/SearchField";
import MainTitle from "./components/MainTitle";
import List from "./components/List";
import Paragraph from "./components/Paragraph";
import Summary from "./components/Summary";

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
        <div className="search-field__content">
          <SearchField
            id={"book-search"}
            labelContent={"Busque por título ou palavra-chave"}
            search={search}
            setSearch={setSearch}
          />
        </div>
        <div className="search-result__content">
          <Summary
            content={"Resultados da busca"}
            result={search === "" ? "" : filteredBooks.length}
          />
          <List list={filteredBooks} />
        </div>
      </main>
    </>
  );
}

export default App;
