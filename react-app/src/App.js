import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Rides from './routes/Rides';
import Tickets from './routes/Tickets';
import Entry from './routes/Entry';
import Nav from './components/Nav'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/entry" component={Entry} />
        <Route path="/ride" component={Rides} />
        <Route path="/ticket" component={Tickets} />
      </Switch>
      </main>
    <Footer />
    </div>
  );
}

export default App;
