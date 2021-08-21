import './App.css';
import MainPage from './modules/MainPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './modules/Auth/Login';
import CreateAccount from './modules/Auth/CreateAccount';

function App() {
  return (
    <BrowserRouter basename='/portfolio'>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/createAccount" component={CreateAccount} />
        <Route path="/" component={MainPage} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
