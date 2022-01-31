import './styles.css';
import { RunWay } from 'types/runway';
import { ReactComponent as UpdateImg } from 'assets/images/update.svg';
import { ReactComponent as TrashImg } from 'assets/images/trash.svg';
import { Link } from 'react-router-dom';


export type Props = {
  runway: RunWay;
};

const CardInfo = () => {   
    
}


const CardRunWay = ({ runway }: Props) => {
  return (
    <div>
      <div className="base-card hiking-card">
        <div className="card-top-container">
          <img src={runway.image} alt={runway.image} />
          <div className="card-description">
            <h6>DESCRIÇÃO</h6>
            <p>{runway.description}</p>
          </div>          
              <div className='card-button'>
              <Link to={`/pistas/${runway.id}`} className='btn btn-secondary delete-btn'>Detalhes</Link>
             
              <button  className='btn update-btn'><UpdateImg/></button>  
              <button  className='btn trash-btn'><TrashImg/></button>            
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardRunWay;
