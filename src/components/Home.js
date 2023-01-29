import React from "react";
import Search from './Search';
import Movie from './Movie';
import Pagination from "./Pagination";
import Footer from './Footer';


const Home = ()=>{
    return (
        <>
            <Search />
            <Movie />
            <Pagination />
            <Footer />
        </>
    )
}

export default Home;