import './styles.css';
import { Link } from 'react-router-dom';
import { ReactComponent as UpdateImg } from 'assets/images/update.svg';
import { ReactComponent as TrashImg } from 'assets/images/trash.svg';
import { ReactComponent as RunImg } from 'assets/images/run.svg';
import api from 'Services/api';
import { useEffect, useState } from 'react';
import { Runner } from 'types/runner';


const ListRunners = () => {

  const [runner, setRunner] = useState<Runner[]>([]);

  useEffect(() => {
    loadRunners();
  }, []);

  async function loadRunners() {

    const response = await api.get('/runners');
    console.log(response.data);
    setRunner(response.data)
  }

  
  

  return (
    <div>
      <div>
        <h2 className="text-center">Lista Competidores</h2>

        <div className="btn-img">
          <Link className="btn-img-link" to="/competidor/adicionar">
            <RunImg />
          </Link>
          <label>
            <p>Adicionar Competidor</p>
          </label>
        </div>

        <div className="row container-table">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Sexo</th>
                <th>Temperatura</th>
                <th>Peso</th>
                <th>Altura</th>
                <th>Opções</th>
              </tr>
            </thead>

            <tbody>
              {
               runner.map(runners => (                
                <tr key={runners.id}>

                  <td>{runners.name}</td>
                  <td>{runners.sexo}</td>
                  <td>{runners.bodyTemperature + 'º'}</td>
                  <td>{runners.weight + 'Kg'}</td>
                  <td>{runners.height}</td>

                  <td>
                    <div className="container-btns">
                      <Link
                        className="upbutton"
                        to={`/competidor/atualizar/${runners.id}`}
                      >
                        {' '}
                        <UpdateImg />{' '}
                      </Link>
                      <button className="btn">
                        {' '}
                        <TrashImg />{' '}
                      </button>
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

export default ListRunners;
