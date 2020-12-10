import React from 'react';


const Pagination = ({filteredTasks, setCurrentPage}) => {
    return (
        <nav>
            <ul className="pagination mt-5 mx-auto">

                {
                    Array(Math.ceil(filteredTasks.length / 15)).fill(null).map((page, idx) => (
                        <li className="page-item">
                            <a className="page-link" href="" onClick={e => {
                                e.preventDefault()
                                setCurrentPage(idx)
                            }}>{idx + 1}</a>
                        </li>
                    ))
                }

            </ul>
        </nav>
    );
};

export default Pagination;