import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../../src/images/download.jpg'
const NotFound = () => {
 return (
  <div>
   <h3>not found</h3>
   <img style={{width:'100%'}} src={image} alt="" />   
   <Link to='/'><button>Go back</button></Link>
  </div>
 );
};

export default NotFound;