import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Rides from './routes/Rides';
import Tickets from './routes/Tickets';
import Entry from './routes/Entry';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
     <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/entry" component={Tickets} />
        <Route path="/ride" component={Rides} />
        <Route path="/ticket" component={Entry} />
      </Switch>
    <Footer/>
    </div>
  );
}

export default App;
