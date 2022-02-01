import { Link } from 'react-router-dom';
import { ReactComponent as RunImg } from 'assets/images/run.svg';
import { ReactComponent as TrashImg } from 'assets/images/run.svg';
import { ReactComponent as UpdateImg } from 'assets/images/run.svg';
import './styles.css';
import { RunWayStorage } from 'types/runway-storage';

type Props = {
  runWaysStorage: RunWayStorage;
};

const RunWaysStorage = ({ runWaysStorage }: Props) => {
  return (
    <div>
      <div>
        <h2 className="text-center">Histórico de Corridas</h2>

        <div className="btn-img">
          <Link className="btn-img-link" to="/adicionar/competidor">
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
                <tr key={''}>
                  <td>{''}</td>
                  <td>{''}</td>
                  <td>{''}</td>
                  <td>{''}</td>
                  <td>{''}</td>

                  <td>
                    <div className="container-btns">
                      <Link className="upbutton" to={`/atualizar/${''}`}>
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
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RunWaysStorage;
