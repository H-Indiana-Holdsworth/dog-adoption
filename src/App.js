import { NavLink, Switch, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Dogs from './Views/Dogs';
import DogCard from './Views/DogCard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <NavLink to="/home">Home</NavLink>
        </header>
        <Switch>
          <Route exact path="/home" component={Dogs} />
          <Route exact path="/dogs/:id" component={DogCard} />
          <Route exact path="/" component={Dogs} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
