import './styles.css';
import { Link } from 'react-router-dom';
//import { Runner } from 'types/runner';
//import axios from 'axios';
//import { BASE_URL } from 'util/request';



const AddRunner = () => {

  //FORMA INCORRETA
  //let runner: Runner;

  //FORMA INCORRETA
  //axios.get(BASE_URL + "/runners/2")
  //.then(response => {
    //console.log(response.data)
 // });



  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3 className="text-center">Adicionar Competidor</h3>

            <div className="card-body">
              <form action="/competidores">
                <div className="btn-reset">
                  <input
                    className="btn-secondary"
                    type="reset"
                    value="Limpar Campos"
                  />
                </div>

                <div>
                  <label htmlFor="ctrl-name">Nome</label>
                  <input
                    id="ctrl-name"
                    placeholder="Nome"
                    name="name"
                    className="form-control"
                  />
                </div>

                <div>
                  <label htmlFor="ctrl-sexo">Sexo:</label>
                  <select className="form-control" name="sexo" id="ctrl-sexo">
                    <option selected>Escolha...</option>
                    <option value="1">Masculino</option>
                    <option value="2">Feminino</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="ctrl-bodytemperature">
                    Temperatura Media do Corpo:
                  </label>
                  <input
                    id="ctrl-bodytemperature"
                    placeholder="Digite a Temperatura"
                    name="temperature"
                    className="form-control"
                  />
                </div>

                <div>
                  <label htmlFor="ctrl-weight">Peso</label>
                  <input
                    id="ctrl-weight"
                    placeholder="Digite o Peso"
                    name="weight"
                    className="form-control"
                  />
                </div>

                <div className="input-weight">
                  <label htmlFor="ctrl-height">Altura</label>
                  <input
                    id="ctrl-height"
                    placeholder="Digite a Altura"
                    name="height"
                    className="form-control"
                  />
                </div>

                <Link className="btn btn-secondary" to="/competidores">
                  Salvar
                </Link>

                <Link
                  className="btn btn-secondary btn-cancel"
                  to="/competidores"
                >
                  Cancelar
                </Link>             
              </form>
            </div>
          </div>
        </div>
      </div>      
    </div>
  );
};

export default AddRunner;
