import './styles.css';import { Link } from 'react-router-dom';
import { RunWay } from 'types/runway';
import  ItamaratyImg from 'assets/images/itamaraty.png';

const UpdateRunWay = () => {

  const updaterunway: RunWay = {
    id: 1,
    image: ItamaratyImg,
    description:
      'O Parque do Araçariguama, um espaço aberto localizado no Jardim Itamaraty, é apenas um dos parques públicos de Santa Bárbara d’Oeste, cidade que se sobressai dentre as vizinhas da RPT (Região do Polo Têxtil) devido à quantidade e a diversidade de áreas verdes espalhadas pela sua extensão.',
  }


  return (
    <div>
    <div className="container">
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          <h3 className="text-center">Atualizar Pista</h3>

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
                <label htmlFor="ctrl-image">Adicione Imagem da Pista</label>
                <input
                  id="ctrl-image"
                  placeholder="Digite Url ou Arraste sua imagem aqui"
                  name="image"
                  className="form-control"
                />                
              </div>             

              
              <Link className="btn btn-secondary" to="/pistas">
                Salvar
              </Link>
              
              <Link className="btn btn-secondary btn-cancel" to="/pistas">    
                 Cancelar
              </Link>                
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}


export default UpdateRunWay;
