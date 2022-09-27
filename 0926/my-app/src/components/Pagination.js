import { useEffect, useState } from "react";

export default function Pagination(totalPosts, postsPerPage, paginate) {
    const [pageNumbers, setPageNumber] = useState([]);
    useEffect(() => {
        let arr = [];
        for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
            arr.push(i);
        }

        setPageNumbers(arr)
    }, [totalPosts, postsPerPage])
    console.log('pageNumbers', pageNumbers)
    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.length > 0 && pageNumbers.map(number => (
                    <li className="page-item" key={number}>
                        <a className="page-link" href="!#" onClick={() => paginate(number)}>{number}</a>
                    </li>
                ))
                }
            </ul>
        </nav>
    )
}