import { createContext, useEffect, useState } from "react";

const AppContext = createContext();
const API = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_KEY}`



const AppProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [movieList, setMovieList] = useState([]);
    const [isError, setIsError] = useState({ show: "false", msg: "" })
    const [query, setQuery] = useState('Iron Man');
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
                console.log(url)
            }
            else {
                setIsError({
                    show: "true",
                    msg: data.Error
                })
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
        <AppContext.Provider value={{ movieList, query, setQuery, page, setPage, totalPage }}>
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, AppProvider };