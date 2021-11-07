import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import MovieDetail from '../MovieDetail/MovieDetail';
import MovieForm from '../MovieForm/MovieForm';
import Header from '../Header/Header';
import { Container } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Container>
          <Route path="/" exact>
            <MovieList />
          </Route>
          <Route path="/details" exact>
            <MovieDetail />
          </Route>
          <Route path="/add" exact>
            <MovieForm />
          </Route>
        </Container>
      </Router>
    </div>
  );
}

export default App;
