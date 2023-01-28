import React, { useContext } from "react";
import { AppContext } from "../context";

const Search = ()=>{
    const { query, setQuery} = useContext(AppContext);
    return (
        <form action="#" onSubmit={e=> e.preventDefault()} >
            <input type="text" value={query} onChange={e=>{setQuery(e.target.value)}} />
        </form>
    )
}

export default Search;