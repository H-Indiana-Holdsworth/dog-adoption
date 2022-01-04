import { NavLink, Switch, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Dogs from './Views/Dogs';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <NavLink to="/home">Home</NavLink>
        </header>
        <p>
          <NavLink to="/dogs/:id">Dogs</NavLink>
        </p>
        <Switch>
          <Route exact path="/home" component={Dogs} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
