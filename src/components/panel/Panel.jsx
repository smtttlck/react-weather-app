import React, { useRef } from "react"
import './Panel.css'
import * as api from '../../api/Api.jsx'
import Card from "../card/Card.jsx"

const Panel = ({ weather, setWeather, forecast, setForecast }) => {

    const inputRef = useRef()

    const search = () => {
        const get = async () => {
            const data = (await api.find(inputRef.current.value))
            if(data?.cod[0] != "4") {
                setWeather(data)
                setForecast(await api.future(inputRef.current.value, data.sys.country))
                console.log(forecast)
            }
        }
        get()
    }

    return (
        <div className="panel d-flex flex-column align-items-center">
            <div className="input w-75">
                <input className="form-control" type="text" placeholder="Enter a city"
                    onChange={search} ref={inputRef} />
            </div>
            {(weather?.cod[0] == "4" || forecast?.cod[0] == "4") ? <div></div> :
                <div className="city mt-5 w-100">
                    <div className="today d-flex justify-content-center p-3">
                        <div className="icon w-50 d-flex justify-content-center">
                            <img src={`/src/assets/img/${weather?.weather[0].main}.png`} alt="Weather Icon" />
                        </div>
                        <div className="info w-50">
                            <div className="name">
                                <h3><b>{weather?.name}</b></h3>
                                <sup className="badge bg-secondary">{weather?.sys.country}</sup>
                            </div>
                            <div className="temperature">
                                <p>Temperature: {Math.round(weather?.main.temp)}°C</p>
                            </div>
                            <div className="weather">
                                <p>{weather?.weather[0].description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="future d-flex justify-content-center">
                        {forecast?.list.map(
                            day => (day.dt_txt.split(" ")[1] == "12:00:00") 
                                    ? <Card data={day} /> 
                                    : ""
                        )}
                    </div>
                </div>
            }
        </div>
    )
}

export default Panel