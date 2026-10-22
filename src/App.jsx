import SearchField from "./components/SearchField";
import MainTitle from "./components/MainTitle";
import BookList from "./components/BookList";
import Paragraph from "./components/Paragraph";
import Summary from "./components/Summary";
import ResultBulletin from "./components/ResultBulletin";
import Link from "./components/Link";
import Navbar from "./components/Navbar";

import booksDate from "./data/books";

import Moon from "./assets/icons/moon.svg";

import './App.css';


import { useState } from "react";

function App() {
  const [books, setBooks] = useState(booksDate);
  const [search, setSearch] = useState("");
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase()) ||
    book.author.toLowerCase().includes(search.toLowerCase())
  );

  function changeBookmarkStatus(id) {
    setBooks(
      books.map((book) => {
        if (book.id === id) {
          return {
            ...book,
            bookmarked: !book.bookmarked
          };
        }

        return book;
      })
    );
  }

  return (
    <>
      <header className="hero">
        <Navbar />
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
          <BookList
            list={filteredBooks}
            changeBookmarkStatus={changeBookmarkStatus}
          />
        </div>
        <ResultBulletin result={search} />
      </main>
      <footer className="footer">
        <div className="footer__content">
          <div className="footer__manifest">
            <img
              className="footer__moon-icon"
              src={Moon}
              alt="Ícone de lua"
            />
            <Paragraph
              className={"footer__manifest-text"}
              content={"Um lugar para se perder e se encontrar."}
            />
          </div>
          <div className="footer__institutional-links">
            <Link
              className={"footer__about-link"}
              href={"#"}
              content={"Sobre a biblioteca"}
            />
            <Link
              className={"footer__help-link"}
              href={"#"}
              content={"Ajuda"}
            />
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
