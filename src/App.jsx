import MainTitle from "./components/MainTitle";
import FilterField from "./components/FilterField";
import List from "./components/List";

import { useState } from "react";

function App() {
  const books = [
    "Carrie",
    "Casa de Folhas",
    "Amanhecer na Colheita",
    "O Conto da Aia",
    "O Avesso da Pele",
    "Tudo Existe Para Desaparecer",
    "Em Chamas",
    "A Esperança",
    "A Biblioteca da Meia-Noite",
    "O Cavaleiro dos Sete Reinos",
    "O Diário de Anne Frank",
    "O massacre da família Hope",
    "Casas Estranhas",
    "Casas Estranhas 2: O mistério das onze plantas baixas",
    "Frankenstein",
    "Carmilla"
  ];
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
