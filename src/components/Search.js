import React, { useContext } from "react";
import { AppContext } from "../context";
import '../App.css'
import logo from '../logo.png'

const Search = () => {
    const { setQuery, setPage, isError } = useContext(AppContext);
    return (

        <section className="search">
            <img src={logo} alt="logo" />
            <form action="#" onSubmit={e => e.preventDefault()} >
                <input type="text" onChange={e => { setQuery(e.target.value); setPage("1")}}  placeholder="Search your movie"/>
            </form>
            <span style={isError.show=="true"?{display:"block"}:{display:"none"}}>{isError.msg}</span>
        </section>
    )
}

export default Search;