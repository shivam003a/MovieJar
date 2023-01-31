import { createContext, useEffect, useState } from "react";

const AppContext = createContext();
const API = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_KEY}`

const sampleMovie = ["Iron Man", "Hulk", "Captain America", "Harry Potter", "Fast Fourious", "James Bond","Spider Man","Transformers","Batman", "Ice Age","Batman", "Toy Story","Avengers","Die Hard", "Resident Evil","Alien","Jack Ryan","Rocky"];


const AppProvider = ({ children }) => {

    const rIndex = Math.floor(Math.random()*sampleMovie.length);
    const rMovie = sampleMovie[rIndex];

    const [isLoading, setIsLoading] = useState(true);
    const [movieList, setMovieList] = useState([]);
    const [isError, setIsError] = useState({ show: "false", msg: "" })
    const [query, setQuery] = useState(rMovie);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);

    const getData = async (url) => {
        try {
            const res = await fetch(url)
            const data = await res.json();
            if (data.Response === "True") {
                setIsLoading(false);
                setMovieList(data.Search);
                setTotalPage(parseInt(data.totalResults/10)+1);
                setIsError({
                    show: "false",
                    msg: ""
                })
            }
            else {
                setIsError({
                    show: "true",
                    msg: data.Error
                })
                setMovieList([]);
            }
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        let timer = setTimeout(()=>{
            getData(`${API}&s=${query}&page=${page}`);
        },500)

        return ()=> clearTimeout(timer);
    }, [query, page])

    return (
        <AppContext.Provider value={{ movieList, query, setQuery, page, setPage, totalPage, isError }}>
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, AppProvider };