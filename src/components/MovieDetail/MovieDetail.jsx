import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useHistory } from "react-router";

function MovieDetail() {

    const selectedMovie = useSelector(store => store.selectedMovie)
    const history = useHistory();

    return (
        <section>
            <h1>Selected Movie</h1>
            {
                selectedMovie.title ? (
                    <>
                        <h2>{selectedMovie.title}</h2>
                        <img src={selectedMovie.poster} alt="" />
                        <button onClick={() => history.push('/')}>HOME</button>
                    </>
                ) : (
                    <>
                        <p>No movie selected.</p>
                        <button onClick={() => history.push('/')}>HOME</button>
                    </>
                )
            }
        </section>
    )
} // end MovieDetail

export default MovieDetail;