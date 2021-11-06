import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import MovieDetail from '../MovieDetail/MovieDetail';
import MovieForm from '../MovieForm/MovieForm';
import Header from '../Header/Header';

function App() {
  return (
    <div className="App">
      {/* <h1 className="mainHeader">The Movies Saga!</h1> */}
      <Router>
        {/* <nav>
          <Link to="/">MOVIE LIST</Link>
        </nav>

        <nav>
          <Link to="/add">ADD MOVIE</Link>
        </nav> */}
        <Header />


        <Route path="/" exact>
          <MovieList />
        </Route>

        <Route path="/details" exact>
          <MovieDetail />
        </Route>

        <Route path="/add" exact>
          <MovieForm />
        </Route>
      </Router>

    </div>
  );
}


export default App;
