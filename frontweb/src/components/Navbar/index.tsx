import './styles.css';
import 'bootstrap/js/src/collapse.js';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark nav-logo main-nav">
      <div className="container-fluid">
        <a href="link" className="nav-logo-text">
          <h4>Carros Top</h4>
        </a>
        <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#bdscartop-navbar"
        aria-controls="bdscartop-navbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button> 
      </div>  

      <div className="collapse navbar-collapse" id="bdscartop-navbar">
        <ul className="navbar-nav offset-md-2 main-menu">
          <li>
            <a href="link" className="active">
              HOME
            </a>
          </li>
          <li>
            <a href="link">CATÁLOGO</a>
          </li>
        </ul>
      </div>      
    </nav>
  );
};
export default Navbar;
