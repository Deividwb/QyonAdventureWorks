import './styles.css';

import { Link } from 'react-router-dom';
import { ReactComponent as RunImg } from 'assets/images/run.svg';
import { useEffect, useState } from 'react';
import api from 'Services/api';
import { Runner } from 'types/runner';
import { RunWayStorage } from 'types/runway-storage';



const ListUsedTime = () => {

  const [runner, setRunner] = useState<Runner[]>([]); 
  const [time, setTime] = useState<RunWayStorage[]>([]); 

//fazer relacionamento das duas tabelas
 

  useEffect(() => {   
    loadRunnerName();
    loadTime();
  }, []);


  async function loadRunnerName() {
    const response = await api.get('/runners');
    //console.log(response.data);    
    setRunner(response.data)   
  }

  async function loadTime() {
    const response = await api.get('/runways-storage');
  
    //console.log(response.data);    
    setTime(response.data)   
  }
 



  return (
    <div>
      <div>
        <h2 className="text-center">Tempo Medio Competidores</h2>

        <div className="btn-img">
          <Link className="btn-img-link" to="/competidores">
            <RunImg />
          </Link>
          <label>
            <p>Voltar</p>
          </label>
        </div>

        <div className="row container-table">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Nome</th>

                <th>Tempo</th>
              </tr>
            </thead>

            <tbody>

              {
                //ajustar o nome e fzr calculo ddas horas
                time.map(times => (
                  <tr key={times.id}>
                  <td>{times?.id}</td>
                  <td>{times.usedTime} horas</td>                  
                </tr>
                ))}           
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListUsedTime;
