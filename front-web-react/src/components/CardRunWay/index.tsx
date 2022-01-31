import "./styles.css";
import { RunWay } from "types/runway";

export type Props = {
    runway: RunWay;
}

const CardRunWay = ({runway}: Props) => {
  return (
      <div>         
          <div className="base-card hiking-card">
              <div className="card-top-container">
              <img src={runway.image} alt={runway.image} />
              <div className="card-description">
                  <h6>DESCRIÇÃO</h6>
                  <p>{runway.description}</p>
              </div>              
              </div>

              
           
          </div>

      </div>
  );
};

export default CardRunWay;
