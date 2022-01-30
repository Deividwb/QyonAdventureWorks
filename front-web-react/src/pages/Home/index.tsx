import './styles.css';
import HomeImg from 'assets/images/homeImg.png';

const Home = () =>{
    return(
        <div>
        <h1 className='text-center'>Bem vindo!!!</h1>
        <div className='main-container'>
            <br /><br />
            <h3 className='text-center'>Nosso Sistema o ajudará a encontrar as melhores pistas de Competição para suas corridas!!!</h3>
        <div className='img-home'>
        <img  src={HomeImg} alt="Imagem Boas Vindas" />
        </div>
        </div>
        </div>
    );
}

export default Home;