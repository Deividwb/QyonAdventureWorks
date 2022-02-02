import { Link } from 'react-router-dom';
import './styles.css';
import { ReactComponent as RunImg} from 'assets/images/run.svg';
import CardRunWay from 'components/CardRunWay';


const RunWayDetails = () => {

    

    return(
        <div>     
        <h2 className="text-center">Pistas Utilizadas</h2>
        <div className="btn-img">
          <Link className="btn-img-link" to="/pistas">
            <RunImg />
          </Link> 
          <label>
            <p>Voltar</p>
          </label>         
        </div>
  
        <div className="container my-4">
          <div className="row">
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <CardRunWay  />
            </div>
  
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <CardRunWay  />
            </div>
  
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <CardRunWay  />
            </div>
  
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <CardRunWay  />
            </div>
  
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <CardRunWay  />
            </div>
  
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <CardRunWay  />
            </div>
          </div>
        </div>
      </div>
    ); 
}

export default RunWayDetails;