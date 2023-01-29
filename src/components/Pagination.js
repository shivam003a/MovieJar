import { useContext } from "react";
import { AppContext } from "../context";

const Pagination = () => {
    const { movieList, totalPage, page, setPage } = useContext(AppContext);

    const getNextPage = () => {
        if (page < totalPage) {
            setPage(parseInt(page) + 1);
        }
    }

    const getPrevPage = () => {
        if (page > 1) {
            setPage(parseInt(page) - 1);
        }
    }

    return (
        <>
            <div className="pagination">
                <button onClick={getPrevPage}>Prev</button>
                <span>{page} /{parseInt(totalPage)}</span>
                <button onClick={getNextPage}>Next</button>
            </div>
        </>
    )
}

export default Pagination;