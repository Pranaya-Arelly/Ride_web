import React from 'react'
import img1 from './images/driver.jpg';

const Booking = () => {
  return (
    <div>
      <main
        className="container-fluid d-flex align-items-center"
        style={{
          padding: '60px 20px',
          backgroundColor: '#f8f9fa',
          minHeight: '100vh',
        }}
      >
        <div className="row w-100">
          <div
            className="col-lg-6 d-flex flex-column justify-content-center align-items-start"
            style={{ padding: '0 15px' }}
          >
            <h5 className="text-success font-weight-bold">HIRE DRIVERS</h5>
            <h1
              className="display-4"
              style={{
                fontSize: '2.5rem',
                lineHeight: '1.2',
                marginTop: '20px',
              }}
            >
              Hire Temporary Drivers at Your Convenience
            </h1>
            <button className="btn btn-dark btn-lg mt-3">Book Now</button>
          </div>
          <div className="col-lg-2 d-flex flex-column align-items-center">
            <div className="d-flex justify-content-center mb-3">
              
            </div>
            <div className="d-flex justify-content-center">
              <img
                src={img1}
                alt="Shopping mall interior"
                className="img-fluid m-2"
                style={{ maxHeight: '100px', borderRadius: '10px' }}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Booking;
