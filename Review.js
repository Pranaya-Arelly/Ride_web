import React from 'react';

const Review = () => {
  return (
    <>
    <div className='container my-2 my-3'>
      <h1 className='text-center'>Reviews</h1>
      <div className="row align-items-center ">
      <div className="col-sm-6 text-center">
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">Ajax</h5>
        <h6 className="card-subtitle mb-2 text-muted">15 days ago</h6>
        <p className="card-text">The service was very efficient, and the driver was exceptionally professional. The vehicle was spotless and comfortable. I appreciated the punctuality and would definitely use the service again.</p>
      </div>
      </div>
    </div>
    <div className="container col-sm-6 text-center " style={{alignItems:"center"}}>
    <div className="card" style={{ width: "18rem" }}>
    <div className="card-body">
      <h5 className="card-title">Ajax</h5>
      <h6 className="card-subtitle mb-2 text-muted">15 days ago</h6>
      <p className="card-text">The service was very efficient, and the driver was exceptionally professional. The vehicle was spotless and comfortable. I appreciated the punctuality and would definitely use the service again.</p>
    </div>
    </div>
  </div>
  </div>
  </div>
  </>
  );
};

export default Review;
