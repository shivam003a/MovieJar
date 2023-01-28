import { createContext, useEffect, useState } from "react";

const AppContext = createContext();
const API = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_KEY}`



const AppProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [movieList, setMovieList] = useState([]);
    const [isError, setIsError] = useState({ show: "false", msg: "" })
    const [query, setQuery] = useState('Iron Man');

    const getData = async (url) => {
        try {
            const res = await fetch(url)
            const data = await res.json();
            console.log(data);
            if (data.Response === "True") {
                setIsLoading(false);
                setMovieList(data.Search);
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
            getData(`${API}&s=${query}`);
        },500)

        return ()=> clearTimeout(timer);
    }, [query])

    return (
        <AppContext.Provider value={{ movieList, query, setQuery }}>
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, AppProvider };