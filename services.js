import React from 'react'
import img2 from './images/driver1.jpeg';
import img3 from './images/Vehicle.png';
const services = () => {
  return (
    <div className='container my-2 my-3'>
      <h1 className='text-center'>Services</h1>
      <div className="row align-items-center ">
      <div className="col-sm-6 text-center">
      <div className="container" style={{width: "30rem"}}>
  <img className="card-img-top my-3" style={{width: '40%', maxWidth: '400px'}} src={img2} alt="Card  cap"/>
  <div className="card-body" >
    <h3 className="card-title my-2"><b>Driver Booking</b></h3>
    <p className="text-justify" style={{fontSize:"20px"}}>Book a professional driver to your doorstep. Enjoy seamless, reliable service with our experienced drivers,
    ensuring a seamless and personalized travel experience.</p>
  </div>
</div>
</div>
<div className="col-sm-6 text-center">
<div className="container" style={{width: "30rem"}}>
  <img className="card-img-top my-2" style={{width: '53%', maxWidth: '400px'}} src={img3} alt="Card  cap"/>
  <div className="card-body">
    <h3 className="card-title my-2"><b>Vehicle Pooling</b></h3>
    <p className=" text-justify" style={{fontSize:"20px"}}>Reserve our vehicle pooling service for efficient, cost-effective travel. Share rides with others to reduce
    costs and environmental impact, while enjoying a comfortable and convenient journey.</p>
  </div>
</div>
</div>
</div>
    </div>
  )
}

export default services
