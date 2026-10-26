import './Summary.css';

function Summary({ content, result }) {
  return (
    <div className="summary">
      <p className="summary__content">{content}</p>
      {
        result !== "" && result !== 0 && (
          <p className="summary__result">{result} {`livro${result > 1 ? 's' : ''}`}</p>
        )
      }
      {
        result === 0 && (
          <p className="summary__result">Nenhum livro encontrado.</p>
        )
      }
    </div>
  );
}

export default Summary;
