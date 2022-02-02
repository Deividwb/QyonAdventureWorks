import { Link } from 'react-router-dom';
import { ReactComponent as RunImg } from 'assets/images/run.svg';
import { ReactComponent as SaveImg } from 'assets/images/save.svg';
import { RunWayStorage } from 'types/runway-storage';
import  './styles.css';



type Props = {
  runWaysStorage: RunWayStorage;
};

const UpdateRunWaysStorage = ({ runWaysStorage }: Props) => {
  return (
    <div>
      <div>
        <h2 className="text-center">Atualizar Histórico da Corrida</h2>

        <div className="btn-img">
          <Link className="btn-img-link" to="/opcoes/historicocorrida">
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
                <th>Competidor</th>
                <th>Pista</th>
                <th>Data Corrida</th>
                <th>Tempo Gasto</th>
              </tr>
            </thead>

            <tbody>
              {
                <tr key={runWaysStorage.id}>
                  <td>{runWaysStorage.runner}</td>
                  <td>{runWaysStorage.runway}</td>
                  <td>{runWaysStorage.dateRunWay}</td>               
                  <td>{runWaysStorage.usedTime}</td>               

                  <td>
                    <div className="container-btns">
                    <Link className='upbutton' to="/opcoes/historicocorrida" > <SaveImg/> </Link>                   
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

export default UpdateRunWaysStorage;
