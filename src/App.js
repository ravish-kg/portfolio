import './App.css';
import MainPage from './modules/MainPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom';
import Login from './modules/Auth/Login';
import CreateAccount from './modules/Auth/CreateAccount';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/createAccount" component={CreateAccount} />
        <Route path="/" component={MainPage} />
      </Switch>
    </HashRouter>

  );
}

export default App;
