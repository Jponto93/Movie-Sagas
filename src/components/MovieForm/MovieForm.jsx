import { useState } from "react"
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import './MovieForm.css';
import { TextField, Select, MenuItem, InputLabel, Container, Paper, Button } from '@mui/material';


function MovieForm() {

    const history = useHistory();
    const dispatch = useDispatch();

    const [newMovie, setNewMovie] = useState({
        title: '',
        poster: '',
        description: '',
        genre_id: '1'
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
        <Container className="mainFormContainer">
            <form onSubmit={addNewMovie}>
                {/* <Container className="mainFormContainer"> */}
                <Paper elevation={24}>
                    <div className="mainIn">
                        <TextField
                            multiline
                            required
                            variant="standard"
                            label="Title"
                            type="text"
                            value={newMovie.title}
                            onChange={() => handleNameChange(event, 'title')}
                        />
                    </div>

                    <div className="mainIn">
                        <TextField
                            multiline
                            required
                            variant="standard"
                            label="URL"
                            type="text"
                            value={newMovie.poster}
                            onChange={() => handleNameChange(event, 'poster')}
                        />
                    </div>

                    <div className="mainIn">
                        <TextField
                            multiline
                            required
                            variant="standard"
                            label="Description"
                            type="text"
                            value={newMovie.description}
                            onChange={() => handleNameChange(event, 'description')}
                        />
                    </div >

                    <div className="mainIn">
                        <InputLabel>Genre</InputLabel>
                        <Select
                            defaultValue={1}
                            label="Genre"
                            value={newMovie.genre}
                            name="category"
                            onChange={() => handleNameChange(event, 'genre')}>
                            <MenuItem value={1}>Adventure</MenuItem>
                            <MenuItem value={2}>Animated</MenuItem>
                            <MenuItem value={3}>Biographical</MenuItem>
                            <MenuItem value={4}>Comedy</MenuItem>
                            <MenuItem value={5}>Disaster</MenuItem>
                            <MenuItem value={6}>Drama</MenuItem>
                            <MenuItem value={7}>Epic</MenuItem>
                            <MenuItem value={8}>Fantasy</MenuItem>
                            <MenuItem value={9}>Musical</MenuItem>
                            <MenuItem value={10}>Romantic</MenuItem>
                            <MenuItem value={11}>Science Fiction</MenuItem>
                            <MenuItem value={12}>Space-Opera</MenuItem>
                            <MenuItem value={13}>Superhero</MenuItem>
                        </Select>
                    </div>

                    <div className="formBtnContainer">
                        <Button
                        variant="contained"
                            color="warning"
                            className="formBtn"
                            onClick={() => history.push('/')}>CANCEL</Button>
                        <Button 
                        variant="contained"
                            color="success"
                            className="formBtn"
                            type="submit">SUBMIT</Button>
                    </div>
                </Paper>
                {/* </Container> */}
            </form>
        </Container>
    )
} // end MovieForm;

export default MovieForm;