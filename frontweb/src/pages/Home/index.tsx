import { ReactComponent as MainImage } from 'assets/images/car_header_1.svg';
import ButtonIcon from 'components/ButtonIcon';
import { Link } from 'react-router-dom';

import './styles.css';

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="home-card">
          <div className="home-image-container">
            <MainImage />
          </div>
          <div className="home-content-container">
            <h1>O carro perfeito para você</h1>
            <p>
              Conheça nossos carros e dê mais um passo na realização do seu
              sonho
            </p>
          </div>
        </div>
      </div>
      <div className="home-button-container">
        <div className="home-button-icon">
          <Link to="/products">
          <ButtonIcon />
          </Link>
        </div>
        <p>Comece agora a navegar</p>
      </div>
    </>
  );
};

export default Home;
