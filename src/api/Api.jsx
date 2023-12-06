const apiKey = ""

export const find = async (cityName) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    return (await (fetch(url).then(response => response.json()).catch(err => console.error(err))))
}

export const future = async (cityName, countryCode) => {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName},${countryCode}&appid=${apiKey}&units=metric`;
    return (await (fetch(url).then(response => response.json()).catch(err => console.error(err))))    
}
