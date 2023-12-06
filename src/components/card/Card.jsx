import React from "react"
import './Card.css'

const Card = ({data}) => {

    return (
        <div className="day text-center mx-2">
            <div className="day-name">
                <p><b>{new Date(data.dt * 1000).toLocaleString('en-us', {weekday:'long'})}</b></p>
            </div>
            <div className="day-icon">
                <img src={`/src/assets/img/${data.weather[0].main}.png`} alt="Weather Icon" />
            </div>
            <div className="day-temperature">
                <p><b>{Math.round(data.main.temp)}°C</b></p>
            </div>
        </div>
    )
}

export default Card