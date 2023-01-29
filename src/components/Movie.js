import React, { useContext } from "react";
import { NavLink } from 'react-router-dom';
import { AppContext } from "../context";

const Movie = () => {
    const { movieList } = useContext(AppContext);
    return (
        <>
            <section className="movie">
                <div className="movie-group">
                    {
                        movieList.map((movie) => {
                            const { Title, Poster, Year, imdbID } = movie;
                            return (
                                <NavLink to={`movies/${imdbID}`} className="movie-item" key={imdbID}>
                                    <img src={Poster} alt={Title} />
                                    <span>{Title}<br />({Year})</span>
                                </NavLink>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default Movie;