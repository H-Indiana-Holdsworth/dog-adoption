import { Switch, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Dogs from './Views/Dogs';
import DogCard from './Views/DogCard';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Dogs} />
          <Route exact path="/dogs/:id" component={DogCard} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
