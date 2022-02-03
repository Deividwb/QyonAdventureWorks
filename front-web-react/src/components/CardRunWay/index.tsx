import './styles.css';
import { RunWay } from 'types/runway';
import { ReactComponent as UpdateImg } from 'assets/images/update.svg';
import { ReactComponent as TrashImg } from 'assets/images/trash.svg';
import { ReactComponent as ViewImg } from 'assets/images/view.svg';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from 'Services/api';

const CardRunWay = () => {
  const [cardRunway, setCardRunways] = useState<RunWay[]>([]);

  useEffect(() => {
    loadCarRunWays();
  }, [cardRunway]);

  async function loadCarRunWays() {
    const response = await api.get('/runways');
    //console.log(response.data);
    setCardRunways(response.data);
  }

  
  async function deleteRunWay(id: number) {
    
    const response = await api.delete(`runways/${id}`);
    loadCarRunWays()
  }

  return (
    <div>
      {cardRunway.map((cardRunways) => (
        <div className="base-card hiking-card" key={cardRunways.id}>
          <div className="card-top-container" >
            <img src={cardRunways?.image} alt="imagem" />
            <div className="card-description">
              <h6>DESCRIÇÃO</h6>
              <p>{cardRunways?.description}</p>
            </div>
            <div className="card-button">
              <Link to={`/pista/${cardRunways?.id}`}>          
              
                <ViewImg />
              </Link>

              <Link to={`/pista/adicionar/${cardRunways?.id}`} >
                            
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


