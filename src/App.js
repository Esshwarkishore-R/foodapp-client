import logo from './logo.svg';
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homescreen from './components/screens/Homescreen';
import Register from './components/screens/Register';
import Login from './components/screens/Login';
function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Route path="/" exact component={Homescreen} />
        <Route path="/register" exact component={Register} />
        <Route path="/login" exact component={Login} />
      </BrowserRouter>
    </div>
  );
}

export default App;
