import { NavLink } from 'react-router-dom';

export default function Navbar({ titulo }) {
  return (
    <header className="topo">

      <nav className="navbar">

        <span className="marca">
          {titulo}
        </span>

        <div className="nav-links">

          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? 'nav-link ativo' : 'nav-link'
            }
          >
            Início
          </NavLink>

          <NavLink
            to="/medicamentos/novo"
            className={({ isActive }) =>
              isActive ? 'nav-link ativo' : 'nav-link'
            }
          >
            Cadastrar
          </NavLink>

          <NavLink
            to="/medicamentos"
            className={({ isActive }) =>
              isActive ? 'nav-link ativo' : 'nav-link'
            }
          >
            Medicamentos
          </NavLink>

        </div>

      </nav>

    </header>
  );
}