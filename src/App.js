import {Switch, Route, BrowserRouter} from "react-router-dom"
import Home from './components/Home'
import Profile from './components/Profile'
import Booking from './components/Booking'
import './App.css';

const  App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/profile/:id" component={Profile}/>
      <Route exact path="/booking/:id" component={Booking}/>
    </Switch>
  </BrowserRouter>
)

export default App;
