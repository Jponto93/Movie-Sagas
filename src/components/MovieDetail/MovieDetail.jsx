import { useSelector } from "react-redux";
import { useEffect } from "react";

function MovieDetail () {
    const selectedMovie = useSelector(store => store.selectedMovie)
    
    return (
        <section>
            <h1>Selected Movie</h1>
            {
                selectedMovie.title? (
                    <>
                    <h2>{selectedMovie.title}</h2>
                    <img src={selectedMovie.poster} alt="" />
                    </>
                ) : (
                    <p>No movie selected.</p>
                )
            }
        </section>
    )
} // end MovieDetail

export default MovieDetail;