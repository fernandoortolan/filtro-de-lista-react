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
].map((book) => (
  {
    id: crypto.randomUUID(),
    name: book
  }
));

export default books;
