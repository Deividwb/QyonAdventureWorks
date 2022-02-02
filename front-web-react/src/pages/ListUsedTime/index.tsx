import { Link } from 'react-router-dom';
import './styles.css';
import { ReactComponent as RunImg } from 'assets/images/run.svg';

const ListUsedTime = () => {
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
                <tr key={'runner.id'}>
                  <td>{"Deivid"}</td>
                  <td>{'10'} horas</td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListUsedTime;
