import { useState } from "react"
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";

function MovieForm() {

    const history = useHistory();
    const dispatch = useDispatch();

    const [newMovie, setNewMovie] = useState({
        title: '',
        poster: '',
        description: '',
        genre_id:'1'
    })

    const categoryChange = event => {
        console.log(event.target.value);
    }

    const handleNameChange = (event, property) => {
        console.log('event happened');
        setNewMovie({
            ...newMovie,
            [property]: event.target.value
        })
    }

    const addNewMovie = event => {
        event.preventDefault();
        dispatch({ type: 'ADD_MOVIE', payload: newMovie })
    }
    return (
        <form onSubmit={addNewMovie}>

            <input
                placeholder="Title"
                type="text"
                value={newMovie.title}
                onChange={() => handleNameChange(event, 'title')}
            />

            <input
                placeholder="URL"
                type="text"
                value={newMovie.poster}
                onChange={() => handleNameChange(event, 'poster')}
            />

            <input
                placeholder="Description"
                type="text"
                value={newMovie.description}
                onChange={() => handleNameChange(event, 'description')}
            />

            <select
            value={newMovie.genre}
            name="category"
            onChange={() => handleNameChange(event, 'genre')}>
                <option value={1}>Adventure</option>
                <option value={2}>Animated</option>
                <option value={3}>Biographical</option>
                <option value={4}>Comedy</option>
                <option value={5}>Disaster</option>
                <option value={6}>Drama</option>
                <option value={7}>Epic</option>
                <option value={8}>Fantasy</option>
                <option value={9}>Musical</option>
                <option value={10}>Romantic</option>
                <option value={11}>Science Fiction</option>
                <option value={12}>Space-Opera</option>
                <option value={13}>Superhero</option>
            </select>
            <button onClick={() => history.push('/')}>CANCEL</button>
            <button type="submit">ADD MOVIE</button>

        </form>
    )
} // end MovieForm;

export default MovieForm;