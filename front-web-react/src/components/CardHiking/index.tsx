import "./styles.css";
import  ItamaratyImg from 'assets/images/itamaraty.png';

const CardHiking = () => {
  return (
      <div>         
          <div className="base-card hiking-card">
              <div className="card-top-container">
              <img src={ItamaratyImg} alt="Pista de Corrida Itamaraty" />
              <div className="card-description">
                  <h6>DESCRIÇÃO</h6>
                  <p>O Parque do Araçariguama, um espaço aberto localizado no Jardim Itamaraty, é apenas um dos parques públicos de Santa Bárbara d’Oeste, cidade que se sobressai dentre as vizinhas da RPT (Região do Polo Têxtil) devido à quantidade e a diversidade de áreas verdes espalhadas pela sua extensão.</p>
              </div>              
              </div>

              
           
          </div>

      </div>
  );
};

export default CardHiking;
