import { Link } from 'react-router-dom';

export default function Home({ titulo, quantidade }) {
  return (
    <section className="painel inicio">

      <p className="sobretitulo">
        AGENDA PERSONALIZADA
      </p>

      <h1>
        Bem-vindo à {titulo}
      </h1>

      <p className="descricao">
        Cadastre e consulte os medicamentos em um só lugar.
      </p>

      <div className="resumo">

        <span className="resumo-numero">
          {quantidade}
        </span>

        <span>
          medicamentos cadastrados
        </span>

      </div>

      <div className="acoes">

        <Link
          className="botao"
          to="/medicamentos/novo"
        >
          Cadastrar medicamento
        </Link>

        <Link
          className="botao botao-secundario"
          to="/medicamentos"
        >
          Ver medicamentos
        </Link>

      </div>

    </section>
  );
}