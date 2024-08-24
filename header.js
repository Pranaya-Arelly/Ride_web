import React from 'react'
import img1 from './images/driver.jpg';

const header = () => {
  return (
    <div className="container my-2">
      <div className="row align-items-center">
        <div className="col-sm-6 text-center">
          <div
            className="d-flex flex-column justify-content-center align-items-center mx-3"
            style={{ padding: '0 15px' }}
          >
            <h1 className="text-success font-weight-bold">Ride-Flex</h1>
            <h6
              className="display-4"
              style={{
                fontSize: '2.5rem',
                lineHeight: '1.2',
                marginTop: '20px',
              }}
            >
              Your Personal Driver Just a Click Away
            </h6>
            <a href="/booking" className="btn btn-dark btn-lg mt-3">Book Now</a>
          </div>
        </div>
        <div className="col-sm-6">
          <img
            src={img1}
            className="img-fluid rounded float-right"
            alt="Driver"
            style={{ width: '90%', maxWidth: '600px' }} // Adjust width and maxWidth as needed
          />
        </div>
      </div>
    </div>
  )
}

export default header
