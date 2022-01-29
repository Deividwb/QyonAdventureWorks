import "./styles.css";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { GrUpdate } from "react-icons/gr";

const UpdateCompetitor = () => {
  return (
    <div>
      <div>
        <h2 className="text-center">Atualizar Competidor</h2>

        <div className="row container-table">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Sexo</th>
                <th>Temperatura</th>
                <th>Peso</th>
                <th>Altura</th>
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
                </tr>
              }
            </tbody>
          </table>

          <div className="btn-container">           
            <button
              
              className="btn btn-segundary"
              type="button"
            >
              Save
            </button>

            <span className="btn-update">
            <Link
              to="/competidores"
              className="btn btn-segundary "
              type="button"
            >
              Voltar
            </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateCompetitor;
