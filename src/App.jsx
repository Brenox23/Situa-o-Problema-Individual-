import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Rodape from './components/Rodape';

import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Visualizacao from './pages/Visualizacao';
import NaoEncontrada from './pages/NaoEncontrada';

const TITULO = 'Farmácia — Breno';

const REGISTROS_INICIAIS = [
  {
    id: 1,
    nome: 'Paracetamol',
    preco: '12.50',
    tarja: 'Livre',
    laboratorio: 'RA 26178224'
  },
  {
    id: 2,
    nome: 'Amoxicilina',
    preco: '28.90',
    tarja: 'Vermelha',
    laboratorio: 'Medley'
  },
  {
    id: 3,
    nome: 'Omeprazol',
    preco: '16.75',
    tarja: 'Livre',
    laboratorio: 'EMS'
  }
];

export default function App() {
  const [registros, setRegistros] = useState(REGISTROS_INICIAIS);

  // Adiciona um novo medicamento sem modificar diretamente o estado anterior.
  function adicionarRegistro(novoRegistro) {
    setRegistros((atuais) => [
      ...atuais,
      {
        ...novoRegistro,
        id: Date.now()
      }
    ]);
  }

  return (
    <div className="app">

      <Navbar titulo={TITULO} />

      <main className="container">

        <Routes>

          <Route
            path="/"
            element={
              <Home
                titulo={TITULO}
                quantidade={registros.length}
              />
            }
          />

          <Route
            path="/medicamentos/novo"
            element={
              <Cadastro
                onAdicionar={adicionarRegistro}
                registros={registros}
              />
            }
          />

          <Route
            path="/medicamentos"
            element={
              <Visualizacao registros={registros} />
            }
          />

          <Route
            path="*"
            element={<NaoEncontrada />}
          />

        </Routes>

      </main>

      <Rodape />

    </div>
  );
}