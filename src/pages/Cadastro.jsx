import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const FORM_INICIAL = {
  nome: '',
  preco: '',
  tarja: 'Livre',
  laboratorio: ''
};

export default function Cadastro({ onAdicionar, registros }) {

  const [formulario, setFormulario] = useState(FORM_INICIAL);
  const [erro, setErro] = useState('');

  const navigate = useNavigate();

  // Atualiza os valores do formulário conforme o usuário digita.
  function atualizarCampo(evento) {
    const { name, value } = evento.target;

    setFormulario((atual) => ({
      ...atual,
      [name]: value
    }));
  }

  // Valida os dados e encaminha o novo medicamento ao App.
  function enviarFormulario(evento) {
    evento.preventDefault();

    setErro('');

    if (
      !formulario.nome.trim() ||
      !formulario.preco ||
      !formulario.laboratorio.trim()
    ) {
      setErro('Preencha todos os campos antes de salvar.');
      return;
    }

    const duplicado = registros.some(
      (item) =>
        item.nome.trim().toLowerCase() ===
        formulario.nome.trim().toLowerCase()
    );

    if (duplicado) {
      setErro('Já existe um medicamento com esse nome.');
      return;
    }

    onAdicionar({
      nome: formulario.nome.trim(),
      preco: Number(formulario.preco).toFixed(2),
      tarja: formulario.tarja,
      laboratorio: formulario.laboratorio.trim()
    });

    setFormulario(FORM_INICIAL);

    navigate('/medicamentos');
  }

  return (
    <section className="painel formulario-painel">

      <p className="sobretitulo">
        NOVO REGISTRO
      </p>

      <h1>
        Cadastrar medicamento
      </h1>

      <p className="descricao">
        Informe os dados para adicionar um medicamento à lista.
      </p>

      <form
        onSubmit={enviarFormulario}
        className="formulario"
      >

        <label htmlFor="nome">
          Nome do medicamento
        </label>

        <input
          id="nome"
          name="nome"
          value={formulario.nome}
          onChange={atualizarCampo}
          placeholder="Ex.: Dipirona"
        />

        <label htmlFor="preco">
          Preço (R$)
        </label>

        <input
          id="preco"
          name="preco"
          type="number"
          min="0.01"
          step="0.01"
          value={formulario.preco}
          onChange={atualizarCampo}
          placeholder="0,00"
        />

        <label htmlFor="tarja">
          Tarja
        </label>

        <select
          id="tarja"
          name="tarja"
          value={formulario.tarja}
          onChange={atualizarCampo}
        >
          <option value="Livre">Livre</option>
          <option value="Vermelha">Vermelha</option>
          <option value="Preta">Preta</option>
        </select>

        <label htmlFor="laboratorio">
          Laboratório
        </label>

        <input
          id="laboratorio"
          name="laboratorio"
          value={formulario.laboratorio}
          onChange={atualizarCampo}
          placeholder="Nome do laboratório"
        />

        {erro && (
          <p className="mensagem-erro" role="alert">
            {erro}
          </p>
        )}

        <div className="acoes">

          <button
            className="botao"
            type="submit"
          >
            Salvar medicamento
          </button>

          <Link
            className="botao botao-secundario"
            to="/medicamentos"
          >
            Cancelar
          </Link>

        </div>

      </form>

    </section>
  );
}