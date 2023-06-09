import React, {useEffect, useState} from 'react';
import facade from "../apiFacade.js";
import {dadJokeURL,chuckURL,ultimateJokeURL} from "../settings.js";

const Joke = ({user}) => {


    const [dataFromServer, setDataFromServer] = useState("")
    const [joke, setJoke] = useState([])
    const [likedJoke, setLikedJokes] = useState([])
    let data = "";

    const addFavorite = (likedJoke) => {
        setLikedJokes((prevLikedJokes ) =>[...prevLikedJokes, likedJoke])
    };

    useEffect( () => {
        if(user.username === ''){ setDataFromServer('Please login to see data from server');

            return;
        }
        fetch(ultimateJokeURL)
            .then(response => response.json())
            .then(data =>setJoke(data.jokes) // Jokes because in the DTO the string is jokes

            ).catch(err => {
                console.error(err)
        });
        const url = user.roles.split(',').includes('user') ? '/info/user' : '/info/admin';
        facade.fetchData(url).then(res => {

            console.log(res);
            setDataFromServer(res.msg)});
    },[user]);

    return (
        <div class="alljokepages">
            {dataFromServer}
            <h3>{"CHUCK JOKE:    "+ joke[0]}</h3>
            <button onClick={() => addFavorite(joke[0])}>Like</button>
            <br/>
            <h3>{"DAD JOKE:     "+ joke[1]}</h3>
            <button onClick={() => addFavorite(joke[1])}>Like</button>
            <h3>Liked jokes: {likedJoke}</h3>
        </div>
    );
};

export default Joke;