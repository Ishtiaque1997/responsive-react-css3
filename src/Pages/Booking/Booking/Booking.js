import React from 'react';
import { useParams } from 'react-router';

const Booking = () => {
 const{serviceId}=useParams();
 return (
  <div>
   <h5>This is booking of {serviceId}</h5>
  </div>
 );
};

export default Booking;