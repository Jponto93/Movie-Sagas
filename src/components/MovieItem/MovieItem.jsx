import { useHistory } from "react-router";
import { useDispatch } from "react-redux";

function MovieItem({movie}) {

    const dispatch = useDispatch();
    const history = useHistory();

    const handleSelectedMovie = (movie) => {
        dispatch({ type: 'SET_SELECTED_MOVIE', payload: movie })
    } // end handleSelectedMovie

    return (
        <div 
        onClick={() => handleSelectedMovie(movie)}
        key={movie.id} >
            <h3>{movie.title}</h3>
            <img src={movie.poster} alt={movie.title} />
        </div>
    )
} // end MovieItem

export default MovieItem;