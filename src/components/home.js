import React, {useState, useEffect, useRef} from 'react';
import {Link} from "react-router-dom";
import Pagination from "./pagination";
import VanillaTilt from "vanilla-tilt";

const Home = ({hero}) => {
    const useHome = useRef()
    const [search, setSearch] = useState('')
    const [currentPage, setCurrentPage] = useState(0)

    useEffect(() => {
        {
            VanillaTilt.init(useHome.current, {
                max: 25,
                speed: 400
            })
        }
    }, [])

    let filteredTasks = hero.filter(el => el.name.toLowerCase().includes(search.toLowerCase()))


    return (
        <div className="container text-center">
            <h1 className="text-warning mb-3">Pokemon Characters</h1>
            <div className="mx-auto">
                <input type="text" onChange={e => setSearch(e.target.value)} className=""
                       style={{width: "280px"}}   placeholder="Type to search..."/>
            </div>
            <div className="row">

                {
                    filteredTasks.slice(currentPage * 15, (currentPage * 15) + 15).map(pok => (
                        <div className='col-md-3 col-sm-4 mt-5' key={pok.id}>
                            <img src={pok.img} alt=""/>
                            <div className="names">
                                <h2>
                                    <Link to={`/pokemon/${pok.id}`} className="pokemon"
                                          style={{color: '#333'}}> {pok.name}</Link>
                                </h2>
                            </div>
                        </div>
                    ))
                }

            </div>
            <Pagination filteredTasks={filteredTasks} setCurrentPage={setCurrentPage}/>
        </div>
    );
};

export default Home;
