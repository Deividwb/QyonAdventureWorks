import './styles.css';
import { RunWay } from 'types/runway';
import { ReactComponent as UpdateImg } from 'assets/images/update.svg';
import { ReactComponent as TrashImg } from 'assets/images/trash.svg';
import { ReactComponent as ViewImg } from 'assets/images/view.svg';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from 'Services/api';

const CardRunWay = () => {
  const [carRunway, setCarRunway] = useState<RunWay[]>([]);

  useEffect(() => {
    loadRunWay();
  }, []);

  async function loadRunWay() {
    const response = await api.get('/runways');
    //console.log(response.data);
    setCarRunway(response.data);
  }

  return (
    <div>
      {carRunway.map((carRunways) => (
        <div className="base-card hiking-card" key={carRunways.id}>
          <div className="card-top-container" >
            <img src={carRunways?.image} alt="imagem" />
            <div className="card-description">
              <h6>DESCRIÇÃO</h6>
              <p>{carRunways?.description}</p>
            </div>
            <div className="card-button">
              <Link to={`/pista/${carRunways?.id}`}>          
              
                <ViewImg />
              </Link>

              <Link to={`/pista/atualizar/:id${carRunways?.id}`} >
                            
                <UpdateImg />
              </Link>

              <button className="btn">
                <TrashImg />
              </button>

            </div>

          </div>
        </div>
      ))}
    </div>
  );
};

export default CardRunWay;
