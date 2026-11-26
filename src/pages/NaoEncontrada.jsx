import { Link, useLocation } from 'react-router-dom';

export default function NaoEncontrada() {

  const localizacao = useLocation();

  return (
    <section className="painel nao-encontrada">

      <p className="sobretitulo">
        ERRO 404
      </p>

      <h1>
        Página não encontrada
      </h1>

      <p className="descricao">
        Não existe uma página cadastrada para o caminho:
      </p>

      <code className="caminho">
        {localizacao.pathname}
      </code>

      <Link
        to="/"
        className="botao"
      >
        Voltar ao início
      </Link>

    </section>
  );
}