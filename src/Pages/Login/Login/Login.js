import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
 const{signInUsingGoogle}=useAuth();
 return (
  <div>
   <h4>Please login</h4>
   <button className="btn btn-warning" onClick={signInUsingGoogle}>Google Sign In</button>
  </div>
 );
};

export default Login;