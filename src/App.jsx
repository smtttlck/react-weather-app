import React, { useState } from 'react'
import './App.css'
import Panel from './components/panel/Panel'

function App() {

  const [weather, setWeather] = useState({cod: "4", weather: [{main: "Default"}]})
  const [forecast, setForecast] = useState()

  return (
    <div className="background d-flex justify-content-center"
          style={{backgroundImage: `url(/src/assets/gif/${weather?.weather[0].main}.gif)`}}>
      < Panel 
          weather={weather} 
          setWeather={setWeather} 
          forecast={forecast} 
          setForecast={setForecast} 
      />
    </div>
  )
}

export default App
