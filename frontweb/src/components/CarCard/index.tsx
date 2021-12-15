import CarImg from 'assets/images/car_card_2.png';
import ButtonBuy from 'components/ButtonBuy';
import './styles.css';

const CarCard = () => {
  return (
    <>
      <div className="car-top-container">       
          <input className="form-control mr-sm-2" type="search" placeholder="Digite sua busca" aria-label="Search"  ></input>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit"> Buscar </button>        
      </div>
      <div className="car-bottom-container">
        <img src={CarImg} alt="Nome do carro" />
        <h6>Audi Supra TT</h6>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
          nisi
        </p>
        <ButtonBuy />
      </div>
    </>
  );
};

export default CarCard;
