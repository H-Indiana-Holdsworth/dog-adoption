import { Switch, Route, NavLink } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Dogs from './Views/Dogs';
import DogCard from './Views/DogCard';
import AdminView from './Views/AdminView';
import EditView from './Views/EditView';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavLink to="/admin">Admin</NavLink>
        <Switch>
          <Route exact path="/" component={Dogs} />
          <Route exact path="/dogs/:id" component={DogCard} />
          <Route exact path="/dogs/:id/edit" component={EditView} />
          <Route exact path="/admin" component={AdminView} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
