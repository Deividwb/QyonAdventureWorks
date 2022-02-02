import './styles.css';
import { RunWay } from 'types/runway';
import { ReactComponent as UpdateImg } from 'assets/images/update.svg';
import { ReactComponent as TrashImg } from 'assets/images/trash.svg';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from 'util/request';

export type Props = {
  runway: RunWay;
};

const CardRunWay = () => {
  const [runway, setRunway] = useState<RunWay>();

  useEffect(() => {
    axios.get(BASE_URL + "/runways/2")
    .then((response) => {
      console.log(response.data)
    setRunway(response.data);
    });
  }, []);

  return (
    <div>
      <div className="base-card hiking-card">
        <div className="card-top-container">
          <img src={runway?.image} alt="foto" />
          <div className="card-description">
            <h6>DESCRIÇÃO</h6>
            <p>{runway?.description}</p>
          </div>
          <div className="card-button">
            <Link
              to={`/pista/${runway?.id}`}
              className="btn btn-secondary delete-btn"
            >
              Detalhes
            </Link>

            <Link
              to={`/pista/atualizar/:id${runway?.id}`}
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
    </div>
  );
};

export default CardRunWay;
