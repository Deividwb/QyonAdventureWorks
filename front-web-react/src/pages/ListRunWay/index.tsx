import './styles.css';

import CardRunWay from 'components/CardRunWay';
import { ReactComponent as RunImg } from 'assets/images/run.svg';
import { Link } from 'react-router-dom';
import { RunWay } from 'types/runway';
import { useEffect, useState } from 'react';
import api from 'Services/api';

const ListRunWay = () => {
  const [runway, setRunway] = useState<RunWay[]>([]);

  useEffect(() => {
    loadRunways();
  }, []);

  async function loadRunways() {
    const response = await api.get('/runways');
    console.log(response.data);
    setRunway(response.data);
  }

  return (
    <div>
      <h2 className="text-center">Pistas de Corrida</h2>
      <div className="btn-img">
        <Link className="btn-img-link" to="/pista/adicionar">
          <RunImg />
        </Link>
        <label>
          <p>Crie Nova Pista</p>
        </label>
      </div>

      <div className="container my-4" >
        <div className="row">
          <div className="col-sm-6 col-lg-4 col-xl-3">
            {runway.map((runways) => (
              <CardRunWay key={runways.id}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListRunWay;
