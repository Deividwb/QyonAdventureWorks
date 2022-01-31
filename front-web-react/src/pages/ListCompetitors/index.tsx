import "./styles.css";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { GrUpdate } from "react-icons/gr";
import {ReactComponent as RunImg} from 'assets/images/run.svg';
import { Runner } from "types/runner";

export type Props = {
  runner: Runner;
}

const ListCompetitors = ({runner}: Props) => {

  return (
    <div>
      <div>
        <h2 className="text-center">Lista Competidores</h2>

        <div className="btn-img">
        <Link className="btn-img-link" to="/adicionar/competidor"><RunImg/></Link>         
        <label><p>Adicionar Competidor</p></label>       
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
                <tr key={runner.id}>
                  <td>{runner.name}</td>
                  <td>{runner.sexo}</td>
                  <td>{runner.bodyTemperature + "º"}</td>
                  <td>{runner.weight+"Kg"}</td>
                  <td>{runner.height}</td>

                  <td>
                    <div className="color-btns">
                      <button className="color-btn-trash" type="button">
                        <FaTrash />
                      </button>
                      <Link
                        to={`/atualizar/${"id"}`}
                        className="color-btn-update"
                        type="button"
                      >
                        <GrUpdate />
                      </Link>
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

export default ListCompetitors;
