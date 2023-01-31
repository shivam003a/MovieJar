import React, { useContext } from "react";
import { NavLink } from 'react-router-dom';
import { AppContext } from "../context";
import notFound from '../notFound.jpg';

const Movie = () => {
    const { movieList, isError } = useContext(AppContext);
    return (
        <>
            <section className="movie">
            <span style={isError.show == "true" ? { color: "red", justifyContent: "center" } : { display: "none" }}>No Movie Found !</span>
                <div className="movie-group">
                    {
                        movieList.map((movie) => {
                            const { Title, Poster, Year, imdbID } = movie;
                            const subTitle = Title.substring(0, 35);

                            return (
                                <NavLink to={`movies/${imdbID}`} className="movie-item" key={imdbID}>
                                    <img src={Poster == "N/A" ? notFound : Poster} alt={Title} />
                                    <span>{Title.length > 35 ? subTitle + "..." : subTitle}<br />({Year})</span>
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