import React from 'react';
import Expert from '../Expert/Expert'
import image1 from '../../../images/9.jpg';
import image2 from '../../../images/10.jpg';
import image3 from '../../../images/11.jpg';
import image4 from '../../../images/12.jpg';
const experts=[
 {
  img:image1,
  name:'John Smith',
  expertise:'designer'
 },
 {
  img:image2,
  name:'Johny Smith',
  expertise:'designer'
 },
 {
  img:image3,
  name:'Joe Smith',
  expertise:'designer'
 },
 {
  img:image4,
  name:'Jane Smith',
  expertise:'designer'
 },
]
const Experts = () => {
 return (
  <div className='container'>
   <h4 className='text-primary mt-5'>Our experts</h4>
   <div className='row'>
    {
      experts.map(expert=><Expert expert={expert}></Expert>)
    }
   </div>
  </div>
 );
};

export default Experts;