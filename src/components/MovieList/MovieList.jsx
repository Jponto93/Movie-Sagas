import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieItem from '../MovieItem/MovieItem';
import './MovieList.css'
import { ImageList } from '@mui/material';


function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                <ImageList>
                {movies.map(movie => {
                    return (
                        <MovieItem movie={movie}
                        key={movie.id}/>
                    );
                })} 
                </ImageList>
            </section>
        </main>

    );
}

export default MovieList;