import './App.css';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Booking from './Pages/Booking/Booking/Booking';
import Login from './Pages/Login/Login/Login';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
     
     <Router>
       <Header></Header>
       <Switch>
         <Route exact path='/'>
             <Home></Home>
         </Route>
          <Route path='/home'>
            <Home></Home>
         </Route>
           <Route path='/login'>
            <Login></Login>
         </Route>
          <Route path='/booking/:serviceId'>
                <Booking></Booking>
         </Route>
         
          <Route path='*'>
            <NotFound></NotFound>
         </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
