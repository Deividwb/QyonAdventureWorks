import './styles.css';
import { ReactComponent as RunImg } from 'assets/images/run.svg';
import { Link } from 'react-router-dom';

const ListNotRun = () => {
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
                <tr key={'runner.id'}>
                  <td>{'Deivid'}</td>                  
                </tr>
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListNotRun;
