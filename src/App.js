import logo from './logo.svg';
import { Route,Switch,useHistory } from 'react-router-dom'
import Home from './pages/Home/Home'
import Profile from './pages/Profile/Profile'
import LogutCard from './components/logoutCard/LogoutCard'

const Routing = ()=>{
  return(
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/profile/:id" component={Profile}/>
          <Route exact path="/logutCard" component={LogutCard}/>

      </Switch>
  )
}

function App() {
  return (
              <Routing />

  );
}

export default App;
