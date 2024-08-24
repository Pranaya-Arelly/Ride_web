import React from 'react';
import img1 from './images/rideflex.png';

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img 
              src={img1} 
              alt="RideFlex Logo" 
              width="100" 
              height="30" 
              className="d-inline-block align-text-top"
            />
          </a>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/booking">Booking</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/pooling">Pooling</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/driver">Driver</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
