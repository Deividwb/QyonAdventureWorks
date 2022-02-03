import './styles.css';

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from 'Services/api';
import { RunWay } from 'types/runway';

const RunWayDetails = () => {

  const { id } = useParams<{ id: string }>();
  const [runWayDetails, setRunWayDetails] = useState<RunWay>();

  useEffect(() => {
    findRunWayDetails();
  }, [id]);

  async function findRunWayDetails() {
    const response = await api.get<RunWay>(`runways/${id}`);
    setRunWayDetails(response.data);
  }
  //RunWayDetails  <CardRunWay  />

  return (
    <div className='main-container'>
      <div >
        <h2 className="text-center">Dados da Pista</h2>

        <div className="row container-table text-center">

          <div className="card" style={{ width: '30rem' }}>
            <h6>id= {runWayDetails?.id}</h6><br />
            <img
              className="card-img-top"
              src={runWayDetails?.image}
              alt="Imagem"
            />
            <div className="card-body">
              <h5 className='text-center'>Descrição</h5>
              <p className="card-text">
                {runWayDetails?.description}
              </p>
            </div>
            <a href="/pistas" className="btn btn-secondary">
                Voltar
              </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default RunWayDetails;
