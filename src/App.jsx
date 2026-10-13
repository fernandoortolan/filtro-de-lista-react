import MainTitle from "./components/MainTitle";
import FilterField from "./components/FilterField";

function App() {
  return (
    <>
      <header>
        <MainTitle content={"Filtro de lista"} />
      </header>
      <main>
        <FilterField id={"book-search"} labelContent={"Filtrar livro: "} />
      </main>
    </>
  );
}

export default App;
