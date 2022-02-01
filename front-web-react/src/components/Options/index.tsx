import { NavLink } from 'react-router-dom';
import './styles.css';

const Options = () => {
  return (
    <nav className="options-nav-container">
      <p>Opções</p>
      <ul>
        <li>
          <NavLink to="/opcoes/historicocorrida">
            <p>Histórico de corridas</p>
          </NavLink>
        </li>

        <li>
          <NavLink to="/opcoes/listapistas">
            <p>Pistas Utilizadas</p>
          </NavLink>
        </li>

        <li>
          <NavLink to="/opcoes/tempomedio">
            <p>Tempo Médio corridas</p>
          </NavLink>
        </li>

        <li>
          <NavLink to="/opcoes/corredorsemcorrida">
            <p>Competidores sem corridas</p>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Options;
