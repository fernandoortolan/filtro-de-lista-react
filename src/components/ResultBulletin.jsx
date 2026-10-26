import './ResultBulletin.css';

function ResultBulletin({ result }) {
  return (
    <div className="result-bulletin">
      {
        result !== "" && (
          <p>Você encontrou todos os livros para “{result}”.</p>
        )
      }
    </div>
  );
}

export default ResultBulletin;
