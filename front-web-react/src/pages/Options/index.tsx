import { Link } from 'react-router-dom';
import './styles.css';

const Options = () => {
    return(   

          <nav className='options-nav-container'>
            <p>Opções</p>
            <ul>
              <li>
                  <Link to="/pistas"><p>Histórico de corridas</p></Link>          
              </li>
      
              <li>
              <Link to="/adicionar/Competidor" ><p>Pistas Utilizadas</p></Link>
              </li>
      
              <li>
              <Link to="/"><p>Tempo Médio corridas</p></Link>
              </li>
      
              <li>
              <Link to="/competidor"><p>Competidores sem corridas</p></Link>
              </li>
            </ul>
          </nav>
        );
      }  
       
export default Options;