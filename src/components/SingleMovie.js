import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleMovie = () => {
    const [singleMovie, setSingleMovie] = useState("");
    const { Title, Plot, Rated, Country, Genre, Actors, Director, Language, Metascore, Poster, Released, Runtime, Type, Year, imdbRating, Awards, Writer, BoxOffice, Ratings } = singleMovie
    const { id } = useParams();
    const API = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_KEY}&i=${id}`

    const getDatabyId = async () => {
        try {
            const res = await fetch(API, {
                referrerPolicy: "unsafe-url"
            });
            const data = await res.json();
            console.log(data);
            if (data.Response === "True") {
                setSingleMovie(data);
            }
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getDatabyId()
    }, [])

    return (
        <>
            <section className="single-movie">
                <div className="left">
                    <img src={Poster} alt={Title} />
                </div>
                <div className="right">
                    <span className="title">{Title}</span>
                    <div className="general-info">
                        <span>{Genre}</span>
                        <span>{Rated}</span>
                        <span>{Year}</span>
                        <span>{Type}</span>
                    </div>
                    <span className="plot">{Plot}</span>
                    <div className="rating">
                        <span>Imdb - {imdbRating}</span>
                        <span>Metascore - {Metascore}</span>
                    </div>
                    <span><strong>Year of Release &nbsp;: &nbsp;&nbsp; </strong>{Released}</span>
                    <span><strong>Country of Origin &nbsp;: &nbsp;&nbsp; </strong>{Country}</span>
                    <span><strong>Language &nbsp;: &nbsp;&nbsp; </strong>{Language}</span>
                    <span><strong>Runtime &nbsp;: &nbsp;&nbsp; </strong>{Runtime}</span>
                    <span><strong>Starring &nbsp;: &nbsp;&nbsp; </strong>{Actors}</span>
                    <span><strong>Awards &nbsp;: &nbsp;&nbsp; </strong>{Awards}</span>
                    <span><strong>Directed By &nbsp;: &nbsp;&nbsp; </strong>{Director}</span>
                    <span><strong>Written By &nbsp;: &nbsp;&nbsp; </strong>{Writer}</span>
                    <span><strong>BoxOffice &nbsp;: &nbsp;&nbsp; </strong>{BoxOffice}</span>
                </div>
            </section>
        </>
    )
}

export default SingleMovie;