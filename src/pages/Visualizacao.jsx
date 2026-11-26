import { Link } from 'react-router-dom';

export default function Visualizacao({ registros }) {

  return (
    <section>

      <div className="cabecalho-lista">

        <div>

          <p className="sobretitulo">
            CATÁLOGO
          </p>

          <h1>
            Medicamentos cadastrados
          </h1>

          <p className="descricao">
            {registros.length} registro(s) na lista.
          </p>

        </div>

        <Link
          className="botao"
          to="/medicamentos/novo"
        >
          Novo medicamento
        </Link>

      </div>

      {registros.length === 0 ? (

        <div className="estado-vazio">

          <h2>
            Nenhum medicamento cadastrado
          </h2>

          <p>
            Comece adicionando o primeiro medicamento.
          </p>

          <Link
            to="/medicamentos/novo"
            className="link-destaque"
          >
            Cadastrar medicamento
          </Link>

        </div>

      ) : (

        <div className="grade-cartoes">

          {registros.map((registro) => (

            <article
              className="cartao"
              key={registro.id}
            >

              <div className="cartao-topo">

                <h2>
                  {registro.nome}
                </h2>

                <span className={`tarja tarja-${registro.tarja.toLowerCase()}`}>
                  {registro.tarja}
                </span>

              </div>

              <p className="preco">
                {Number(registro.preco).toLocaleString(
                  'pt-BR',
                  {
                    style: 'currency',
                    currency: 'BRL'
                  }
                )}
              </p>

              <p>
                <strong>Laboratório:</strong> {registro.laboratorio}
              </p>

            </article>

          ))}

        </div>

      )}

    </section>
  );
}