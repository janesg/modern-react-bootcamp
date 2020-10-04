import React, { useState, useEffect } from "react";
import axios from "axios";

const SWMovies = () => {
    const apiUrl = "https://swapi.dev/api/";
    const movieIds = [1,2,3,4,5,6];
    const movieOptions = () => movieIds.map(i => <option value={i}>{i}</option>);
    const [movieId, setMovieId] = useState(movieIds[0]);
    const [movie, setMovie] = useState({});

    // The 2nd param specifies an array of relevant state values
    // Function only runs if one of the state values changes
    useEffect(() => {
        // useEffect has to return a synchronous function so we put the 
        // async function inside and call it immediately
        const fetchData = async () => {
            const response = await axios.get(apiUrl + `films/${movieId}`);
            setMovie(response.data);
        }
        fetchData();
    }, [movieId]);

    return (
        <div>
            <h1>Pick a Star Wars movie</h1>
            <select value={movieId} onChange={e => setMovieId(e.target.value)}>{movieOptions()}</select>
            <h3>{movie.title}</h3>
            <p>{movie.opening_crawl}</p>
        </div>
    )
}

export default SWMovies;