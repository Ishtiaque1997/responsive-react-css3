import React from 'react';
import './Service.css'

const Service = (props) => {
 const{name,img,price,description}=props.service;
 return (
  <div className='service'>
   <h2>This is a service</h2>
   <img src={img} alt="" />
   <h3>{name}</h3>
   <h5>{price}</h5>
   <p>{description}</p>
  </div>
 );
};

export default Service;