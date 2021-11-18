import React, { useState, useEffect } from 'react';
import {characterList} from '../data';
import { useGlobalContext } from '../context';

export default function Navbar() {
    const { isTimerActive } = useGlobalContext();
    const [timer, setTimer] = useState(0);

    const formatTime = () => {  
        const getSeconds = `0${(timer % 60)}`.slice(-2)
        const minutes = `${Math.floor(timer / 60)}`
        const getMinutes = `0${minutes % 60}`.slice(-2)
        const getHours = `0${Math.floor(timer / 3600)}`.slice(-2)
        return `${getHours}:${getMinutes}:${getSeconds}`
    }

    useEffect(()=>{
        let interval = null;
        if(isTimerActive){
            interval = setInterval(()=>{
                setTimer(timer => timer+1)
            }, 1000);
        }
        return () => clearInterval(interval);
    },[isTimerActive, timer])

    return (
        <header>
            <h1 className="logo">Waldo & Co</h1>
            <div className="timer">
                <p>{formatTime()}</p>
                {/* <button onClick={handleTimer}>Start</button> */}
            </div>
            <div className="character-found-list">
                <p>3 remaining characters to find</p>
                <div className="found-img-list">
                    {characterList.map((character)=> {
                        const {image, name} = character;
                        return(
                            <img src={image} alt={name} className={`img-not-found img-found`} />
                        )
                    })}
                </div>
            </div>
        </header>
    )
}
