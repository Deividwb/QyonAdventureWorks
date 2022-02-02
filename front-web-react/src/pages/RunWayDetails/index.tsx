import { Link } from 'react-router-dom';
import './styles.css';
import { ReactComponent as RunImg} from 'assets/images/run.svg';
import CardRunWay from 'components/CardRunWay';
import  ItamaratyImg from 'assets/images/itamaraty.png';
import { RunWay } from 'types/runway';

const RunWayDetails = () => {

    const runway: RunWay = {
        id: 1,
        image: ItamaratyImg,
        description:
          'O Parque do Araçariguama, um espaço aberto localizado no Jardim Itamaraty, é apenas um dos parques públicos de Santa Bárbara d’Oeste, cidade que se sobressai dentre as vizinhas da RPT (Região do Polo Têxtil) devido à quantidade e a diversidade de áreas verdes espalhadas pela sua extensão.',
      }
    

    return(
        <div>     
        <h2 className="text-center">Pistas Utilizadas</h2>
        <div className="btn-img">
          <Link className="btn-img-link" to="/adicionar/pista">
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