import "./styles.css";
import { Link } from "react-router-dom";


const AddRunWay = () => {
  return (
    <div>
    <div className="container">
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          <h3 className="text-center">Adicionar Pista</h3>

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
                <label htmlFor="ctrl-descripton">Descrição</label> 
                <textarea className="form-control" name="descripton" id="ctrl-descripton" placeholder="Digite seu texto aqui..."></textarea>               
              </div>              

              <div>
                <label htmlFor="ctrl-temperature">Adicione Imagem da Pista</label>
                <input
                  id="ctrl-temperature"
                  placeholder="Digite Url ou Arraste sua imagem aqui"
                  name="temperature"
                  className="form-control"
                />                
              </div>             

              
              <Link className="btn btn-secondary" to="/competidores">
                Salvar
              </Link>
              
              <Link className="btn btn-secondary btn-cancel" to="/competidores">    
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

export default AddRunWay;
