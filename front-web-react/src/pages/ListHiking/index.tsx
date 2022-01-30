import CardHiking from "components/CardHiking";
import {ReactComponent as RunImg} from 'assets/images/run.svg';
import "./styles.css";

const ListHiking = () => {
  return (
    <div>      
      <h2 className="text-center">Pistas de Corrida</h2>
      <div className="btn-img">
        <RunImg/>
      </div>
      <div className="container my-4">
        <div className="row">

          <div className="col-sm-6 col-lg-4 col-xl-3">
            <CardHiking />
          </div>

          <div className="col-sm-6 col-lg-4 col-xl-3">
            <CardHiking />
          </div>

          <div className="col-sm-6 col-lg-4 col-xl-3">
            <CardHiking />
          </div>

          <div className="col-sm-6 col-lg-4 col-xl-3">
            <CardHiking />
          </div>

          <div className="col-sm-6 col-lg-4 col-xl-3">
            <CardHiking />
          </div>

          <div className="col-sm-6 col-lg-4 col-xl-3">
            <CardHiking />
          </div>

        </div>
      </div>
    </div>
  );
};

export default ListHiking;
