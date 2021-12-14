import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Rides from './routes/Rides';
import Tickets from './routes/Tickets';
import Entry from './routes/Entry';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/entry" component={Rides} />
        <Route path="/rides" render={Tickets} />
        <Route path="/tickets" component={Entry} />
      </Switch>
    </div>
  );
}

export default App;
