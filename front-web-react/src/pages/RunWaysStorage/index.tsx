import  './styles.css';

import { Link, useParams } from 'react-router-dom';
import { ReactComponent as RunImg } from 'assets/images/run.svg';
import { ReactComponent as UpdateImg } from 'assets/images/update.svg';
import { ChangeEvent, useEffect, useState } from 'react';
import api from 'Services/api';
import { RunWayStorage } from 'types/runway-storage';

interface IRunWayStorage {     
    runner:number;
    runway:number;
    dateRunWay:string;
    usedTime:number;
}

const RunWaysStorage = () => {

  const [runWayStorage, setRunWayStorage] = useState<RunWayStorage[]>([]);


  useEffect(() => {   
    loadRunWaysStorage();
  }, []);

 
  async function loadRunWaysStorage() {

    const response = await api.get('/runways-storage');
    //console.log(response.data);
    setRunWayStorage(response.data)
  }


  const [model, setModel] = useState<IRunWayStorage>({   
    runner:0,
    runway:0,
    dateRunWay:'',
    usedTime:0
  });


  return (
    <div>
      <div>
        <h2 className="text-center">Histórico de Corridas</h2>

        <div className="btn-img">
          <Link className="btn-img-link" to="/opcoes/historicocorrida/adicionar">
            <RunImg />
          </Link>
          <label>
            <p>Adicionar</p>
          </label>
        </div>

        <div className="row container-table">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Competidor</th>
                <th>Pista</th>
                <th>Data Corrida</th>
                <th>Tempo Gasto</th>
              </tr>
            </thead>

            <tbody>
              {
               runWayStorage.map(runWayStorages =>(
                <tr key={runWayStorages.id}>

                  <td>{runWayStorages.runner}</td>
                  <td>{runWayStorages.runway}</td>
                  <td>{runWayStorages.dateRunWay}</td>               
                  <td>{runWayStorages.usedTime}</td>               

                  <td>
                    <div className="container-btns">
                    <Link className='upbutton' to={`/opcoes/historicocorrida/atualizar/${runWayStorages.id}`}> <UpdateImg/> </Link>                   
                    </div>
                  </td>
                </tr>

              ))}


            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RunWaysStorage;
