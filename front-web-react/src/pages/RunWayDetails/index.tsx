import './styles.css';

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from 'Services/api';
import { RunWay } from 'types/runway';


interface IUpdateRunWaysStorage {
  id: number;
  runner: number;
  runway: number;
  dateRunWay: string;
  usedTime: number;
}


const RunWayDetails = () => {

  const [model, setModel] = useState<IUpdateRunWaysStorage>({
    id: 0,
    runner: 0,
    runway: 0,
    dateRunWay: '',
    usedTime: 0,
  });

  const { id } = useParams<{ id: string }>();
  const [runWay, setRunWay] = useState<RunWay[]>([]);

   

  useEffect(() => {
    ///falta fazer condional aqui
    if(model.runner>=0){
    findRunWayDetails();
    }
      
    

  }, [id]);

  async function findRunWayDetails() {   

    const response = await api.get('/runways'); 
      
    setRunWay(response.data);
   
  }


  return (
    <div className="main-container">
      <div>
        <h2 className="text-center">Pista Utilizadas</h2>

        {runWay.map((runWays) => (
          <div className="row container-table text-center">
            <div className="card" style={{ width: '30rem' }}>
              <h6>id= {runWays?.id}</h6>
              <br />
              <img
                className="card-img-top"
                src={runWays?.image}
                alt="Imagem"
              />
              <div className="card-body">
                <h5 className="text-center">Descrição</h5>
                <p className="card-text">{runWays?.description}</p>
              </div>
              <a href="/pistas" className="btn btn-secondary">
                Voltar
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RunWayDetails;
