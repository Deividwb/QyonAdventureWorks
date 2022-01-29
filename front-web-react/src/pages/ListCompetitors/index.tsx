import "./styles.css";
import { Link } from "react-router-dom";

const ListCompetitors = () => {
  return (
    <div>
      <div>
        <h2 className="text-center">Lista Competidores</h2>
        <div>
          <Link className="btn btn-primary" to="#">
            Adicionar Competidor
          </Link>
        </div>
        <div className="row">
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
              <tr>
                <td>deivid</td>
                <td>Masculino</td>
                <td>25º</td>
                <td>81 Kg</td>
                <td>1.70m</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListCompetitors;
