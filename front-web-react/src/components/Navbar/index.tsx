import './styles.css';
import 'bootstrap/js/src/collapse.js';
import { Link, NavLink } from 'react-router-dom';
import Options from 'components/Options';

const Navbar = () => {
  return (
    <nav className="navbar navbar -expand-md ">
      <div className="container-fluid">
        <Link to="/">
          <h4>
            QyonAdventure<div className="nav-logo">Works</div>
          </h4>
        </Link>

        <section className="options-nav">
          <ul className="menu-nav">
            <li className="nav-one">
              <NavLink className='nav-text' to="/competidores" activeClassName="active">
                Competidores
              </NavLink>
            </li>

            <li className="nav-two">
              <NavLink to="/pistas" activeClassName="active">
                Pistas
              </NavLink>
            </li>

            <li className="nav-three">
            <NavLink to="#">{<Options/>}</NavLink> 
            </li>                      
          </ul>
        </section>
      </div>
    </nav>
  );
};

export default Navbar;
