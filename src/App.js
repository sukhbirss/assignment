import logo from './logo.svg';
import { Route,Switch,useHistory } from 'react-router-dom'
import Home from './pages/Home/Home'
import Profile from './pages/Profile/Profile'

const Routing = ()=>{
  return(
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/profile" component={Profile}/>

      </Switch>
  )
}

function App() {
  return (
              <Routing />

  );
}

export default App;
