import React from 'react';
import {useParams} from 'react-router-dom'
import {Link} from "react-router-dom";


const HeroDetails = ({hero, setCurrent, pok}) => {
    const {id} = useParams()
    const pokemon = hero.find(el => el.id === +id)
    if (hero.length === 0) {
        return 'loading'
    }
    return (
            <div className="container">
                <Link to="/" style={{color: '#333'}} className="return mt-5 p-3 bg-primary text-white">Back</Link>

                <div className="row">
                    <div className="mx-auto mt-5">
                        <h1 className="text-warning mb-2">Pokemon Characters</h1>
                        <div className="card card_item mt-5">
                            <img src={pokemon?.img} alt="" style={{width: "180px"}}/>
                            <div className="card-body">
                                <h5 className="card-title">{pokemon?.name}</h5>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Height: {pokemon?.height}</li>
                                <li className="list-group-item">Weight: {pokemon?.weight}</li>
                                <li className="list-group-item">Weight: {pokemon?.candy}</li>
                                <li className="list-group-item">Weaknesses: {pokemon?.weaknesses}</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>

    );
};

export default HeroDetails;