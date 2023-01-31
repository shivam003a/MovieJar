import { useContext } from "react";
import { AppContext } from "../context";

const Pagination = () => {
    const { movieList, totalPage, page, setPage, isError } = useContext(AppContext);

    const getNextPage = () => {
        if (page < totalPage) {
            setPage(parseInt(page) + 1);
        }
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    const getPrevPage = () => {
        if (page > 1) {
            setPage(parseInt(page) - 1);
        }
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    return (
        <>
            <div className="pagination" style={isError.show == "true" ? { display: "none" } : {}}>
                <button onClick={getPrevPage}>Prev</button>
                <span>{page} /{parseInt(totalPage)}</span>
                <button onClick={getNextPage}>Next</button>
            </div>
        </>
    )
}

export default Pagination;