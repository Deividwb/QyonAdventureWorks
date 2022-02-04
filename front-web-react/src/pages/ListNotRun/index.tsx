import './styles.css';
import { ReactComponent as RunImg } from 'assets/images/run.svg';
import { Link } from 'react-router-dom';
import { Runner } from 'types/runner';
import { useEffect, useState } from 'react';
import api from 'Services/api';

const ListNotRun = () => {

  const [runner, setRunner] = useState<Runner[]>([]); 


  useEffect(() => {   
    loadRunnerName();
    loadRunnerName();
  }, []);


  async function loadRunnerName() {
    const response = await api.get('/runners');
    //console.log(response.data);    
    setRunner(response.data)   
  }



  return (
    <div>
      <div>
        <h2 className="text-center">Competidores Sem Corrida</h2>

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
              </tr>
            </thead>

            <tbody>
              {
               runner.map(runners =>(
                <tr key={runners.id}>
                <td>{runners.name}</td>                  
              </tr>
               ))} 
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListNotRun;
