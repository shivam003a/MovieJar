import React, { useContext } from "react";
import { NavLink } from 'react-router-dom';
import { AppContext } from "../context";

const Movie = () => {
    const { movieList } = useContext(AppContext);
    return (
        <>
            {
                movieList.map((movie) => {
                    const { Title, Poster, imdbID } = movie;
                    return (
                        <NavLink to={`movies/${imdbID}`} >
                            <div>{Title}</div>
                            <img src={Poster} alt={imdbID} />
                        </NavLink>
                    )
                })
            }
        </>
    )
}

export default Movie;