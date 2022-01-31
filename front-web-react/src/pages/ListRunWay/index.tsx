import CardRunWay from 'components/CardRunWay';
import { ReactComponent as RunImg } from 'assets/images/run.svg';
import './styles.css';
import { Link } from 'react-router-dom';
import { RunWay } from 'types/runway';
import  ItamaratyImg from 'assets/images/itamaraty.png';

const ListRunWay = () => {
  
  const runway: RunWay = {
    id: 1,
    image: ItamaratyImg,
    description:
      'O Parque do Araçariguama, um espaço aberto localizado no Jardim Itamaraty, é apenas um dos parques públicos de Santa Bárbara d’Oeste, cidade que se sobressai dentre as vizinhas da RPT (Região do Polo Têxtil) devido à quantidade e a diversidade de áreas verdes espalhadas pela sua extensão.',
  }

  return (
    <div>
      <h2 className="text-center">Pistas de Corrida</h2>
      <div className="btn-img">
        <Link className="btn-img-link" to="/adicionar/pista">
          <RunImg />
        </Link>
        <label>
          <p>Crie Nova Pista</p>
        </label>
      </div>

      <div className="container my-4">
        <div className="row">
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <CardRunWay runway={runway} />
          </div>

          <div className="col-sm-6 col-lg-4 col-xl-3">
            <CardRunWay runway={runway} />
          </div>

          <div className="col-sm-6 col-lg-4 col-xl-3">
            <CardRunWay runway={runway} />
          </div>

          <div className="col-sm-6 col-lg-4 col-xl-3">
            <CardRunWay runway={runway} />
          </div>

          <div className="col-sm-6 col-lg-4 col-xl-3">
            <CardRunWay runway={runway} />
          </div>

          <div className="col-sm-6 col-lg-4 col-xl-3">
            <CardRunWay runway={runway} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListRunWay;
