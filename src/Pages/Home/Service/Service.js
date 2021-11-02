import React from 'react';

const Service = (props) => {
 const{name,img,price,description}=props.service;
 return (
  <div>
   <h2>This is a service</h2>
   <img src={img} alt="" />
   <h3>{name}</h3>
   <h5>{price}</h5>
   <p>{description}</p>
  </div>
 );
};

export default Service;