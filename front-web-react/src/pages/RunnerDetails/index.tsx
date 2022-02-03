import './styles.css';
import { Link, useParams } from 'react-router-dom';
import { Runner } from 'types/runner';
import { useEffect, useState } from 'react';
import api from 'Services/api';

const RunnerDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [runnerDetails, setRunnerDetails] = useState<Runner>();

  useEffect(() => {
    findRunnerDetails();
  }, [id]);

  async function findRunnerDetails() {
    const response = await api.get<Runner>(`runners/${id}`);
    setRunnerDetails(response.data);
  }

  return (
    <div>
      <div>
        <h2 className="text-center">Dados Competidor</h2>

        <div className="row container-table">
          
          <div className="card">
            <h5 className="card-header">{runnerDetails?.name}</h5>
            <div className="card-body">
              <p className="card-title">Id = {runnerDetails?.id}</p>
              
              <h6 className="card-text">
                Sexo : {runnerDetails?.sexo}<br/> Peso: {runnerDetails?.weight}KG<br/> Altura:{runnerDetails?.height} M
              </h6>
              <br/>

              <a href="/competidores" className="btn btn-secondary">
                Voltar
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default RunnerDetails;
