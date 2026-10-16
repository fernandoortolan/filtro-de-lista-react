const bookData = [
  // Original books
  ["Carrie", "Stephen King", 1974, "Uma adolescente vítima de bullying descobre poderes telecinéticos e transforma sua escola em palco de terror.", "Terror", "Físico e E-book", 199],
  ["Casa de Folhas", "Mark Z. Danielewski", 2000, "Uma família descobre que sua casa possui um interior maior do que suas dimensões externas.", "Terror psicológico", "Físico e E-book", 736],
  ["Amanhecer na Colheita", "Suzanne Collins", 2025, "Haymitch Abernathy enfrenta os perigos da segunda edição do Massacre Quaternário.", "Distopia", "Físico e E-book", 400],
  ["O Conto da Aia", "Margaret Atwood", 1985, "Em uma sociedade totalitária, mulheres férteis são submetidas a um sistema de reprodução forçada.", "Distopia", "Físico e E-book", 368],
  ["O Avesso da Pele", "Jeferson Tenório", 2020, "Um filho revisita a história do pai e reflete sobre racismo, identidade e relações familiares.", "Drama", "Físico e E-book", 192],
  ["Tudo Existe Para Desaparecer", "Lucas Ortolan", 2025, "Sinopse e dados bibliográficos pendentes de confirmação da edição.", "A confirmar", "Físico", null],
  ["Em Chamas", "Suzanne Collins", 2009, "Katniss retorna à arena enquanto sua vitória ameaça a estabilidade de Panem.", "Distopia", "Físico e E-book", 400],
  ["A Esperança", "Suzanne Collins", 2010, "Katniss se torna o símbolo de uma revolução contra o Capitol.", "Distopia", "Físico e E-book", 424],
  ["A Biblioteca da Meia-Noite", "Matt Haig", 2020, "Uma biblioteca mágica permite que Nora explore as vidas que poderia ter vivido.", "Fantasia", "Físico e E-book", 308],
  ["O Cavaleiro dos Sete Reinos", "George R. R. Martin", 1998, "Dunk e Egg percorrem Westeros em aventuras anteriores aos acontecimentos de Game of Thrones.", "Fantasia", "Físico e E-book", 368],
  ["O Diário de Anne Frank", "Anne Frank", 1947, "O diário registra a vida de uma adolescente judia escondida durante a ocupação nazista.", "Memórias", "Físico e E-book", 352],
  ["O Massacre da Família Hope", "Autor a confirmar", null, "Sinopse e dados bibliográficos pendentes de confirmação da edição.", "Suspense", "Físico", null],
  ["Casas Estranhas", "Uketsu", 2021, "Uma planta baixa aparentemente comum revela indícios perturbadores de um possível crime.", "Mistério", "Físico e E-book", 224],
  ["Casas Estranhas 2: O Mistério das Onze Plantas Baixas", "Uketsu", 2022, "Novas plantas arquitetônicas escondem segredos e pistas de acontecimentos inquietantes.", "Mistério", "Físico e E-book", 240],
  ["Frankenstein", "Mary Shelley", 1818, "Victor Frankenstein cria uma criatura cuja existência desafia seus limites morais.", "Terror gótico", "Físico e E-book", 280],
  ["Carmilla", "Sheridan Le Fanu", 1872, "Uma jovem passa a desconfiar da misteriosa hóspede que desperta nela uma atração incomum.", "Terror gótico", "Físico e E-book", 128],

  // Horror and psychological suspense
  ["O Iluminado", "Stephen King", 1977, "Uma família passa o inverno isolada em um hotel onde forças sobrenaturais ameaçam dominá-la.", "Terror", "Físico e E-book", 464],
  ["It: A Coisa", "Stephen King", 1986, "Um grupo de amigos enfrenta uma entidade que assume a forma de seus maiores medos.", "Terror", "Físico e E-book", 1104],
  ["Misery", "Stephen King", 1987, "Um escritor ferido é mantido prisioneiro por sua fã mais obsessiva.", "Suspense psicológico", "Físico e E-book", 328],
  ["O Cemitério", "Stephen King", 1983, "Uma família descobre um cemitério capaz de trazer os mortos de volta, mas com consequências terríveis.", "Terror", "Físico e E-book", 424],
  ["O Exorcista", "William Peter Blatty", 1971, "Uma mãe procura ajuda quando sua filha apresenta sinais de uma presença demoníaca.", "Terror sobrenatural", "Físico e E-book", 336],
  ["O Bebê de Rosemary", "Ira Levin", 1967, "Uma mulher grávida começa a suspeitar que seus vizinhos escondem um plano sinistro.", "Terror psicológico", "Físico e E-book", 256],
  ["A Assombração da Casa da Colina", "Shirley Jackson", 1959, "Visitantes investigam uma mansão famosa por acontecimentos inexplicáveis.", "Terror gótico", "Físico e E-book", 246],
  ["Mexican Gothic", "Silvia Moreno-Garcia", 2020, "Uma jovem visita uma mansão isolada e encontra segredos perturbadores em sua família anfitriã.", "Terror gótico", "Físico e E-book", 320],
  ["O Coração das Trevas", "Joseph Conrad", 1899, "Uma viagem pelo Congo revela a brutalidade do colonialismo e os abismos da natureza humana.", "Clássico", "Físico e E-book", 160],
  ["O Silêncio dos Inocentes", "Thomas Harris", 1988, "Uma agente do FBI busca a ajuda de um assassino encarcerado para capturar outro criminoso.", "Suspense policial", "Físico e E-book", 368],
  ["O Colecionador", "John Fowles", 1963, "Um homem sequestra uma jovem e acredita que poderá conquistar seu amor mantendo-a presa.", "Suspense psicológico", "Físico e E-book", 320],
  ["A Paciente Silenciosa", "Alex Michaelides", 2019, "Um psicoterapeuta tenta descobrir por que uma pintora parou de falar após matar o marido.", "Suspense psicológico", "Físico e E-book", 350],
  ["Verity", "Colleen Hoover", 2018, "Uma escritora contratada para concluir uma série encontra um manuscrito perturbador.", "Suspense psicológico", "Físico e E-book", 320],
  ["A Empregada", "Freida McFadden", 2022, "Uma empregada doméstica aceita trabalhar para uma família rica cheia de segredos.", "Suspense", "Físico e E-book", 304],
  ["E Não Sobrou Nenhum", "Agatha Christie", 1939, "Dez desconhecidos ficam presos em uma ilha e começam a morrer um a um.", "Mistério policial", "Físico e E-book", 400],
  ["Assassinato no Expresso do Oriente", "Agatha Christie", 1934, "Hercule Poirot investiga um assassinato ocorrido durante uma viagem de trem.", "Mistério policial", "Físico e E-book", 256],
  ["O Morro dos Ventos Uivantes", "Emily Brontë", 1847, "Uma paixão intensa e destrutiva atravessa gerações em uma propriedade rural inglesa.", "Romance gótico", "Físico e E-book", 416],
  ["Drácula", "Bram Stoker", 1897, "Cartas e diários narram a luta de um grupo contra um misterioso conde vampiro.", "Terror gótico", "Físico e E-book", 488],
  ["O Retrato de Dorian Gray", "Oscar Wilde", 1890, "Um jovem permanece belo enquanto um retrato passa a revelar os efeitos de sua corrupção moral.", "Clássico gótico", "Físico e E-book", 256],
  ["O Médico e o Monstro", "Robert Louis Stevenson", 1886, "Um médico investiga a ligação entre um respeitável cientista e um homem violento.", "Terror gótico", "Físico e E-book", 112],
  ["A Volta do Parafuso", "Henry James", 1898, "Uma governanta acredita que presenças sobrenaturais ameaçam duas crianças sob seus cuidados.", "Terror psicológico", "Físico e E-book", 160],

  // Science fiction and dystopia
  ["1984", "George Orwell", 1949, "Winston Smith vive sob vigilância constante em um regime que controla até o pensamento.", "Distopia", "Físico e E-book", 416],
  ["A Revolução dos Bichos", "George Orwell", 1945, "Animais expulsam seus donos humanos e constroem uma sociedade que acaba reproduzindo a opressão.", "Sátira política", "Físico e E-book", 152],
  ["Admirável Mundo Novo", "Aldous Huxley", 1932, "Uma sociedade organizada por castas privilegia o condicionamento e a estabilidade acima da liberdade.", "Ficção científica", "Físico e E-book", 312],
  ["Fahrenheit 451", "Ray Bradbury", 1953, "Um bombeiro responsável por queimar livros começa a questionar a sociedade em que vive.", "Distopia", "Físico e E-book", 216],
  ["Duna", "Frank Herbert", 1965, "Paul Atreides enfrenta disputas políticas e religiosas em um planeta desértico estratégico.", "Ficção científica", "Físico e E-book", 688],
  ["Neuromancer", "William Gibson", 1984, "Um hacker é recrutado para uma missão que mistura inteligência artificial e conspiração.", "Cyberpunk", "Físico e E-book", 320],
  ["Fundação", "Isaac Asimov", 1951, "Um matemático planeja preservar o conhecimento humano durante a queda de um império galáctico.", "Ficção científica", "Físico e E-book", 256],
  ["O Fim da Infância", "Arthur C. Clarke", 1953, "A chegada de alienígenas transforma a humanidade e levanta dúvidas sobre seu futuro.", "Ficção científica", "Físico e E-book", 224],
  ["Androides Sonham com Ovelhas Elétricas?", "Philip K. Dick", 1968, "Um caçador de androides questiona os limites entre humanidade e máquinas.", "Ficção científica", "Físico e E-book", 272],
  ["O Problema dos Três Corpos", "Liu Cixin", 2006, "Uma descoberta científica conecta a humanidade a uma civilização extraterrestre.", "Ficção científica", "Físico e E-book", 416],
  ["Flores para Algernon", "Daniel Keyes", 1966, "Um homem passa por um experimento que aumenta sua inteligência e transforma sua vida.", "Ficção científica", "Físico e E-book", 288],
  ["A Máquina do Tempo", "H. G. Wells", 1895, "Um inventor viaja ao futuro e encontra uma humanidade radicalmente transformada.", "Ficção científica", "Físico e E-book", 128],
  ["Guerra dos Mundos", "H. G. Wells", 1898, "A Terra enfrenta uma invasão devastadora de seres vindos de Marte.", "Ficção científica", "Físico e E-book", 240],
  ["Solaris", "Stanisław Lem", 1961, "Cientistas estudam um oceano alienígena que parece responder aos pensamentos humanos.", "Ficção científica", "Físico e E-book", 224],
  ["Kindred: Laços de Sangue", "Octavia E. Butler", 1979, "Uma mulher negra contemporânea é transportada repetidamente para uma fazenda escravista do século XIX.", "Ficção científica", "Físico e E-book", 432],
  ["Oryx e Crake", "Margaret Atwood", 2003, "Um sobrevivente relembra os acontecimentos que levaram ao colapso da civilização.", "Distopia", "Físico e E-book", 400],
  ["Laranja Mecânica", "Anthony Burgess", 1962, "Um jovem violento é submetido a um tratamento controverso para eliminar sua agressividade.", "Distopia", "Físico e E-book", 224],
  ["Jogador Número Um", "Ernest Cline", 2011, "Um adolescente participa de uma caça ao tesouro em um universo virtual cheio de referências culturais.", "Ficção científica", "Físico e E-book", 464],
  ["A Longa Viagem a um Pequeno Planeta Hostil", "Becky Chambers", 2014, "Uma tripulação diversa percorre o espaço e constrói relações durante uma missão perigosa.", "Ficção científica", "Físico e E-book", 352],
  ["Matéria Escura", "Blake Crouch", 2016, "Um homem é lançado em realidades alternativas e tenta reencontrar sua família.", "Suspense de ficção científica", "Físico e E-book", 352],

  // Fantasy and adventure
  ["O Hobbit", "J. R. R. Tolkien", 1937, "Bilbo Bolseiro acompanha anões em uma jornada para recuperar um tesouro guardado por um dragão.", "Fantasia", "Físico e E-book", 336],
  ["A Sociedade do Anel", "J. R. R. Tolkien", 1954, "Frodo parte em uma missão para destruir um anel capaz de ameaçar toda a Terra-média.", "Fantasia épica", "Físico e E-book", 576],
  ["Harry Potter e a Pedra Filosofal", "J. K. Rowling", 1997, "Um menino descobre que é bruxo e começa a estudar em uma escola de magia.", "Fantasia", "Físico e E-book", 264],
  ["O Nome do Vento", "Patrick Rothfuss", 2007, "Kvothe narra sua trajetória de músico itinerante a estudante de uma universidade misteriosa.", "Fantasia", "Físico e E-book", 656],
  ["A Guerra dos Tronos", "George R. R. Martin", 1996, "Famílias nobres disputam o poder em um reino marcado por intrigas e ameaças antigas.", "Fantasia épica", "Físico e E-book", 592],
  ["Mistborn: O Império Final", "Brandon Sanderson", 2006, "Uma jovem com poderes mágicos se junta a um grupo que pretende derrubar um governante imortal.", "Fantasia", "Físico e E-book", 608],
  ["O Caminho dos Reis", "Brandon Sanderson", 2010, "Guerreiros e estudiosos enfrentam uma guerra em um mundo assolado por tempestades sobrenaturais.", "Fantasia épica", "Físico e E-book", 1248],
  ["A Vida Invisível de Addie LaRue", "V. E. Schwab", 2020, "Uma jovem faz um pacto que lhe concede vida longa, mas impede que qualquer pessoa se lembre dela.", "Fantasia", "Físico e E-book", 504],
  ["Piranesi", "Susanna Clarke", 2020, "Um homem vive em uma casa labiríntica inundada por marés e repleta de estátuas.", "Fantasia misteriosa", "Físico e E-book", 272],
  ["Circe", "Madeline Miller", 2018, "A feiticeira da mitologia grega descobre seu poder e busca definir seu próprio destino.", "Fantasia mitológica", "Físico e E-book", 400],
  ["A Canção de Aquiles", "Madeline Miller", 2011, "O relacionamento entre Pátroclo e Aquiles se desenvolve em meio aos acontecimentos da Guerra de Troia.", "Fantasia mitológica", "Físico e E-book", 368],
  ["O Oceano no Fim do Caminho", "Neil Gaiman", 2013, "Um homem retorna à infância e relembra acontecimentos sobrenaturais que quase o destruíram.", "Fantasia sombria", "Físico e E-book", 208],
  ["Deuses Americanos", "Neil Gaiman", 2001, "Um homem se envolve em um conflito entre deuses antigos e novas divindades da América.", "Fantasia urbana", "Físico e E-book", 640],
  ["Coraline", "Neil Gaiman", 2002, "Uma menina encontra uma versão alternativa de sua casa, habitada por figuras assustadoras.", "Fantasia sombria", "Físico e E-book", 224],
  ["O Leão, a Feiticeira e o Guarda-Roupa", "C. S. Lewis", 1950, "Quatro irmãos descobrem um mundo mágico escondido dentro de um guarda-roupa.", "Fantasia", "Físico e E-book", 208],

  // Brazilian literature
  ["Dom Casmurro", "Machado de Assis", 1899, "Bentinho relembra sua relação com Capitu e questiona a fidelidade da esposa.", "Romance clássico", "Físico e E-book", 256],
  ["Memórias Póstumas de Brás Cubas", "Machado de Assis", 1881, "Um narrador já morto revisita sua vida com ironia e críticas à sociedade.", "Romance clássico", "Físico e E-book", 368],
  ["O Alienista", "Machado de Assis", 1882, "Um médico cria um hospício e passa a questionar os limites entre loucura e razão.", "Sátira", "Físico e E-book", 96],
  ["Grande Sertão: Veredas", "João Guimarães Rosa", 1956, "Riobaldo narra suas experiências como jagunço e suas dúvidas sobre o bem, o mal e o destino.", "Romance regionalista", "Físico e E-book", 624],
  ["Vidas Secas", "Graciliano Ramos", 1938, "Uma família sertaneja luta para sobreviver à seca, à pobreza e à opressão.", "Romance regionalista", "Físico e E-book", 176],
  ["Capitães da Areia", "Jorge Amado", 1937, "Um grupo de meninos abandonados enfrenta a violência e a desigualdade nas ruas de Salvador.", "Romance social", "Físico e E-book", 280],
  ["A Hora da Estrela", "Clarice Lispector", 1977, "A vida de Macabéa, uma jovem nordestina pobre, é narrada com sensibilidade e questionamentos existenciais.", "Romance psicológico", "Físico e E-book", 88],
  ["Quarto de Despejo", "Carolina Maria de Jesus", 1960, "Diários registram a luta cotidiana de uma mulher negra que vive na favela e enfrenta a fome.", "Diário / Memórias", "Físico e E-book", 200],
  ["Torto Arado", "Itamar Vieira Junior", 2019, "Duas irmãs vivem em uma comunidade rural marcada pela exploração e por laços ancestrais.", "Drama social", "Físico e E-book", 264],
  ["Ponciá Vicêncio", "Conceição Evaristo", 2003, "Uma mulher negra busca reconstruir sua identidade entre lembranças familiares e desigualdades sociais.", "Romance social", "Físico e E-book", 128],
  ["O Quinze", "Rachel de Queiroz", 1930, "Uma seca devastadora transforma a vida de retirantes e de uma professora no Ceará.", "Romance regionalista", "Físico e E-book", 208],
  ["Macunaíma", "Mário de Andrade", 1928, "Um herói sem caráter atravessa aventuras fantásticas que exploram a cultura brasileira.", "Modernismo", "Físico e E-book", 208],
  ["Iracema", "José de Alencar", 1865, "O encontro entre uma indígena e um colonizador português dá origem a uma narrativa sobre amor e formação nacional.", "Romance indianista", "Físico e E-book", 160],
  ["O Cortiço", "Aluísio Azevedo", 1890, "A vida de moradores de uma habitação coletiva revela conflitos sociais e ambições humanas.", "Naturalismo", "Físico e E-book", 320],
  ["Solitária", "Eliana Alves Cruz", 2022, "A experiência de mulheres negras que trabalham em casas de famílias ricas revela desigualdades e resistências.", "Drama social", "Físico e E-book", 192],

  // International classics and contemporary fiction
  ["Crime e Castigo", "Fiódor Dostoiévski", 1866, "Um estudante comete um assassinato e enfrenta as consequências psicológicas e morais de seu ato.", "Romance psicológico", "Físico e E-book", 592],
  ["Os Irmãos Karamázov", "Fiódor Dostoiévski", 1880, "Uma família conflituosa se envolve em um crime que levanta questões sobre fé, liberdade e moralidade.", "Romance filosófico", "Físico e E-book", 1056],
  ["A Metamorfose", "Franz Kafka", 1915, "Gregor Samsa acorda transformado em um inseto e passa a enfrentar o afastamento de sua família.", "Ficção existencial", "Físico e E-book", 96],
  ["O Estrangeiro", "Albert Camus", 1942, "Um homem indiferente às convenções sociais enfrenta julgamento após cometer um assassinato.", "Romance filosófico", "Físico e E-book", 128],
  ["O Processo", "Franz Kafka", 1925, "Josef K. é acusado por uma autoridade misteriosa sem conseguir descobrir qual é seu crime.", "Ficção existencial", "Físico e E-book", 272],
  ["Cem Anos de Solidão", "Gabriel García Márquez", 1967, "A história de várias gerações da família Buendía se desenrola na cidade fictícia de Macondo.", "Realismo mágico", "Físico e E-book", 448],
  ["Ensaio sobre a Cegueira", "José Saramago", 1995, "Uma epidemia de cegueira revela a fragilidade das instituições e o comportamento humano.", "Ficção distópica", "Físico e E-book", 352],
  ["A Peste", "Albert Camus", 1947, "Uma epidemia isola uma cidade e obriga seus habitantes a enfrentar o sofrimento e a solidariedade.", "Romance filosófico", "Físico e E-book", 288],
  ["Pequenas Grandes Mentiras", "Liane Moriarty", 2014, "A rotina de três mulheres em uma comunidade escolar é abalada por segredos e um crime.", "Drama / Suspense", "Físico e E-book", 464],
  ["Pessoas Normais", "Sally Rooney", 2018, "Dois jovens irlandeses desenvolvem uma relação complexa ao longo dos anos.", "Romance contemporâneo", "Físico e E-book", 272],
  ["A Redoma de Vidro", "Sylvia Plath", 1963, "Uma jovem talentosa enfrenta uma crise pessoal enquanto tenta encontrar seu lugar no mundo.", "Romance psicológico", "Físico e E-book", 288],
  ["O Sol é Para Todos", "Harper Lee", 1960, "Uma menina acompanha o pai advogado defender um homem negro acusado injustamente.", "Romance social", "Físico e E-book", 384],
  ["O Grande Gatsby", "F. Scott Fitzgerald", 1925, "Um homem rico organiza festas luxuosas enquanto tenta recuperar um amor do passado.", "Romance clássico", "Físico e E-book", 208],
  ["Orgulho e Preconceito", "Jane Austen", 1813, "Elizabeth Bennet e Mr. Darcy precisam superar julgamentos e diferenças sociais.", "Romance clássico", "Físico e E-book", 432],
  ["Jane Eyre", "Charlotte Brontë", 1847, "Uma jovem órfã conquista independência e encontra segredos em uma propriedade inglesa.", "Romance gótico", "Físico e E-book", 576],
  ["O Pequeno Príncipe", "Antoine de Saint-Exupéry", 1943, "Um piloto encontra um menino de outro planeta que compartilha reflexões sobre amor e amizade.", "Fábula", "Físico e E-book", 96],
  ["A Cor Púrpura", "Alice Walker", 1982, "Cartas revelam a trajetória de uma mulher negra que enfrenta violência e busca autonomia.", "Romance epistolar", "Físico e E-book", 336],
  ["Nunca Me Deixes", "Kazuo Ishiguro", 2005, "Três amigos crescem em uma instituição aparentemente comum que esconde uma verdade inquietante.", "Ficção distópica", "Físico e E-book", 352],
  ["A Estrada", "Cormac McCarthy", 2006, "Um pai e seu filho atravessam um mundo devastado tentando sobreviver.", "Ficção pós-apocalíptica", "Físico e E-book", 256],
  ["O Problema dos Três Corpos: Floresta Sombria", "Liu Cixin", 2008, "A humanidade prepara sua defesa diante de uma ameaça extraterrestre que se aproxima.", "Ficção científica", "Físico e E-book", 512],
  ["A Guerra dos Mundos: O Retorno", "Autor a confirmar", null, "Título incluído como registro a validar antes de completar os dados bibliográficos.", "A confirmar", "Físico", null]
];

const books = bookData.map(function(book) {
  const [
    title,
    author,
    publication_year,
    synopsis,
    genre,
    format,
    pages
  ] = book;

  const displayTitle = title.slice(0, 17).trim();

  return {
    id: crypto.randomUUID(),
    title,
    display_title:
      title.length > 20
        ? displayTitle + "..."
        : title,
    author,
    display_author: author,
    publication_year,
    synopsis,
    genre,
    format,
    pages,
    cover_color: Math.floor(Math.random() * 4),
    cover_illustration: Math.floor(Math.random() * 4)
  };
});

export default books;
