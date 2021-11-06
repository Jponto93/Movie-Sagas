import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieItem from '../MovieItem/MovieItem';
import './MovieList.css'
import { ImageList, Paper } from '@mui/material';


function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main className="">
            <h1>MovieList</h1>
            <Paper elevation={24}>
                <section className="movies listMain">
                    <ImageList cols={3}
                        gap={16}
                    >
                        {movies.map(movie => {
                            return (
                                <MovieItem movie={movie}
                                    key={movie.id} />
                            );
                        })}
                    </ImageList>
                </section>
            </Paper>
        </main>

    );
}

export default MovieList;