import MainTitle from "./components/MainTitle";
import FilterField from "./components/FilterField";
import List from "./components/List";

function App() {
  const books = [
    "Carrie",
    "Casa de Folhas",
    "Amanhecer na Colheita"
  ]

  return (
    <>
      <header>
        <MainTitle content={"Filtro de lista"} />
      </header>
      <main>
        <FilterField id={"book-search"} labelContent={"Filtrar livro: "} />
        <List list={books} />
      </main>
    </>
  );
}

export default App;
