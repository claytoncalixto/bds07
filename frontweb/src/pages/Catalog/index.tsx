import CarCard from 'components/ProductCard';

import './styles.css';

const Catalog = () => {
  return (
    <>
      <div className="car-top-container">
        <input
          className="form-control mr-sm-2 mw-100"
          type="search"
          placeholder="Digite sua busca"
          aria-label="Search"
        ></input>
        <button
          className="btn btn-outline-success my-2 my-sm-0 mw-100"
          type="submit"
        >
          {' '}
          Buscar{' '}
        </button>
      </div>
      <div className="container my-4">
        <div className="row">
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <CarCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <CarCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <CarCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <CarCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <CarCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <CarCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <CarCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <CarCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Catalog;
