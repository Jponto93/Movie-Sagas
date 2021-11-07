import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useHistory } from "react-router";

function MovieDetail() {

    const selectedMovie = useSelector(store => store.selectedMovie)
    const details = useSelector(store => store.details)

    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'FETCH_DETAILS', payload: selectedMovie.id})
    }, [])
    
    console.log('this is details at index 0', details[0]);

    return (
        <section className="mainDetail">
            <h1>Selected Movie</h1>
            {
                details[0] ? (
                    <>
                        <h2>{details[0].title}</h2>
                        <img src={details[0].poster} alt="" />
                        <p>{details[0].description}</p>
                        <h2>Genres</h2>
                        <ul>
                        {details.map((genre) => {
                            return (
                                <li key={genre.id}>{genre.name}</li>
                            )
                        })}
                        </ul>
                        <button onClick={() => history.push('/')}>BACK TO LIST</button>
                    </>
                ) : (
                    <>
                        <p>No movie selected.</p>
                        <button onClick={() => history.push('/')}>BACK TO LIST</button>
                    </>
                )
            }
        </section>
    )
} // end MovieDetail

export default MovieDetail;