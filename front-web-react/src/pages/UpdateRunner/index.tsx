import "./styles.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "Services/api";
import { Runner } from "types/runner";

const UpdateRunner = () => {


  useEffect(() => {
    loadUpdateRunners();
  }, []);

  async function loadUpdateRunners() {

    //const [updateRunner, setUpdateRunner] = useState <Runner[]>([]);

    const response = await api.get('/runners');
    console.log(response.data);
    //setUpdateRunner(response.data)
  }


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
              
              className="btn btn-secondary"
              type="button"
            >
              Salvar
            </button>

            <span className="btn-update">
            <Link
              to="/competidores"
              className="btn btn-secondary "
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

export default UpdateRunner;
