import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useHistory } from "react-router";
import { Container, List, ListItem, ListItemText, Button } from "@material-ui/core";

function MovieDetail() {

    const selectedMovie = useSelector(store => store.selectedMovie)
    const details = useSelector(store => store.details)

    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'FETCH_DETAILS', payload: selectedMovie.id })
    }, [])

    console.log('this is details at index 0', details[0]);

    return (
        <Container className="mainDetail">
            <h1>Selected Movie</h1>
            {
                details[0] ? (
                    <>
                        <h2>{details[0].title}</h2>
                        <img src={details[0].poster} alt="" />
                        <p>{details[0].description}</p>
                        <h2>Genres</h2>
                        <List>
                            {details.map((genre) => {
                                return (
                                    <ListItemText
                                        key={genre.id}>{genre.name}</ListItemText>
                                )
                            })}
                        </List>
                        <Button
                            variant="contained"
                            onClick={() => history.push('/')}>BACK TO LIST</Button>
                    </>
                ) : (
                    <>
                        <p>No movie selected.</p>
                        <Button onClick={() => history.push('/')}>BACK TO LIST</Button>
                    </>
                )
            }
        </Container>
    )
} // end MovieDetail

export default MovieDetail;