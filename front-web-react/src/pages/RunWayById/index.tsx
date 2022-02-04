import './styles.css';

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from 'Services/api';
import { RunWay } from 'types/runway';




const RunWayById = () => {

  const { id } = useParams<{ id: string }>();
 
  const [runWayById, setRunWayById] = useState<RunWay>();

  useEffect(() => {
    
    findRunWayById();
  }, [id]);


  async function findRunWayById() {

    //teste
    const responses = await api.get(`runways/${id}`);
    console.log(responses)   
    setRunWayById(responses.data);
    
  }



  return (
    <div className="main-container">
      <div>
        <h2 className="text-center">Pista Utilizadas</h2>

          <div className="row container-table text-center">
            <div className="card" style={{ width: '30rem' }}>
              <h6>id= {runWayById?.id}</h6>
              <br />
              <img
                className="card-img-top"
                src={runWayById?.image}
                alt="Imagem"
              />
              <div className="card-body">
                <h5 className="text-center">Descrição</h5>
                <p className="card-text">{runWayById?.description}</p>
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

export default RunWayById;