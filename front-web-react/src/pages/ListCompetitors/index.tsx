import "./styles.css";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { GrUpdate } from "react-icons/gr";

const ListCompetitors = () => {
  return (
    <div>
      <div>
        <h2 className="text-center">Lista Competidores</h2>
        <div className="container-btn">
          <Link className="btn btn-segundary" to="#">
            Adicionar Competidor
          </Link>
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
                <tr key="id">
                  <td>deivid</td>
                  <td>Masculino</td>
                  <td>25º</td>
                  <td>81 Kg</td>
                  <td>1.70m</td>

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
