import React, {useEffect, useState} from 'react'
import './App.css';
import Header from "./components/header";
import Home from './components/home'
import HeroDetails from "./components/heroDetails";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import axios from "axios";


function App() {
    const [hero, setHero] = useState([])
    useEffect(() => {
        axios('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json')
            .then(({data}) => setHero(data.pokemon))
    }, [])
    return (
        <Router>
            <Header/>

            <Switch>
                <Route exact path="/" component={() => <Home hero={hero}/>}/>
                <Route exact path="/pokemon/:id" component={() => <HeroDetails hero={hero}/>}/>
            </Switch>
        </Router>


    );
}

export default App;
