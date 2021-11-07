import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './MovieItem.css';

function MovieItem({ movie }) {

    const dispatch = useDispatch();
    const history = useHistory();

    const handleSelectedMovie = (movie) => {
        // store selected pet object in Redux
        dispatch({ type: 'SET_SELECTED_MOVIE', payload: movie })
        // go to details view
        history.push('/details');
    } // end handleSelectedMovie

    return (
        <Card
            className="mainCard"
            sx={{ maxWidth: 345 }}
            onClick={() => handleSelectedMovie(movie)}
            key={movie.id}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="450"
                    image={movie.poster}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography
                        variant="caption">{movie.title}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
} // end MovieItem

export default MovieItem;