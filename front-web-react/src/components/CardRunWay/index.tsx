import './styles.css';
import { RunWay } from 'types/runway';
import { ReactComponent as UpdateImg } from 'assets/images/update.svg';
import { ReactComponent as TrashImg } from 'assets/images/trash.svg';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from 'Services/api';

const CardRunWay = () => {
  const [runway, setRunway] = useState<RunWay[]>([]);

  useEffect(() => {
    loadRunWay();
  }, []);

  async function loadRunWay() {
    const response = await api.get('/runways');
    //console.log(response.data);
    setRunway(response.data);
  }

  return (
    <div>
      {runway.map((runways) => (
        <div className="base-card hiking-card" key={runways.id}>
          <div className="card-top-container" >
            <img src={runways?.image} alt="imagem" />
            <div className="card-description">
              <h6>DESCRIÇÃO</h6>
              <p>{runways?.description}</p>
            </div>
            <div className="card-button">
              <Link
                to={`/pista/${runways?.id}`}
                className="btn btn-secondary delete-btn"
              >
                Detalhes
              </Link>

              <Link
                to={`/pista/atualizar/:id${runways?.id}`}
                className="btn update-btn"
              >
                <UpdateImg />
              </Link>
              <button className="btn trash-btn">
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
