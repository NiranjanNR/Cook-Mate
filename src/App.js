import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home/Home'
import Create from './pages/Create/Create'
import Recipe from './pages/Recipe/Recipe'
import Search from './pages/Search/Search'
import Nav from './components/Nav/Nav'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
       <Nav />
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/recipes/:id">
              <Recipe />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
            <Route path="">
              <div>Page Does not exist!</div>
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
