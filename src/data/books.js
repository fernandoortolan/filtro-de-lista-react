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
].map(function(book) {
  const uuid = crypto.randomUUID();

  let displayBookTitle = (book.slice(0, 20)).trim();

  if (displayBookTitle.length > 17) {
    displayBookTitle = displayBookTitle.slice(0, 17).trim() + '...';
  }

  let displayBookAuthor = 'Author';
  const coverColor = Math.floor(Math.random() * 4);
  const coverIllustration = Math.floor(Math.random() * 4);

  return {
    id: uuid,
    title: book,
    display_title: displayBookTitle,
    display_author: displayBookAuthor,
    cover_color: coverColor,
    cover_illustration: coverIllustration,
  }
});

export default books;
