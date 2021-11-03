import React from 'react';
import useFirebase from '../../../hooks/useFirebase';

const Login = () => {
 const{signInUsingGoogle,users,logOut}=useFirebase();
 return (
  <div>
   <h4>Please login</h4>
   <button className="btn btn-warning" onClick={signInUsingGoogle}>Google Sign In</button>
  </div>
 );
};

export default Login;