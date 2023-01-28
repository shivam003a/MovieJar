import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleMovie = () => {
    const [mDetails, setmDetails] = useState("");

    const { id } = useParams();
    const API = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_KEY}&i=${id}`

    const getDatabyId = async () => {
        try {
            const res = await fetch(API);
            const data = await res.json();
            console.log(data);
            if (data.Response === "True") {
                setmDetails(data);
            }
            setmDetails(data);
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getDatabyId()
    }, [])

    return (
        <>
            <h1>{mDetails.Title}</h1>
            <h1>{mDetails.Plot}</h1>
            <h1>{mDetails.Rated}</h1>
            <h1>{mDetails.Country}</h1>
            <h1>{mDetails.Genre}</h1>
            <h1>{mDetails.Actors}</h1>
            <h1>{mDetails.Director}</h1>
            <h1>{mDetails.Language}</h1>
            <h1>{mDetails.Metascore}</h1>
            <img src={mDetails.Poster} />
            <h1>{mDetails.Released}</h1>
            <h1>{mDetails.Runtime}</h1>
            <h1>{mDetails.Type}</h1>
            <h1>{mDetails.Year}</h1>
            <h1>{mDetails.imdbRating}</h1>
            <h1>{mDetails.Awards}</h1>
            <h1>{mDetails.Writer}</h1>
        </>
    )
}

export default SingleMovie;