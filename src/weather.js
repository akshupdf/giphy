import {  useState } from "react";
import axios from 'axios'


function Weather () {

  const [data, setData] = useState({})
  const [location, setLocation] = useState('')
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=c4eee2c1c866c7b06d714c10862f8891`
            
    const searchLocation = () => {
     
        axios.get(url).then((response)  => 
        {
          setData(response.data)
          console.log(response.data)
        } )
        setLocation('')
      
        
      }


return( 

    <div>
            <div>
        <h1>Weather App</h1>
        

        </div>
        
        <div className="flex m-2">
        <input value={location}
          onChange={event => setLocation(event.target.value)}
          placeholder='Enter Location' type="text" className="w-80 h-10 border-2 border-black"></input>
        <button onClick={searchLocation} className="border-2 border-black " >search</button>

        </div>
        <div className="m-2 w-[60vh] h-80 border-2 border-black bg-[url('https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg')]" >
        <div className="flex">
            <p>Your location : {data.name}</p>
            
          </div>
          <div> {data.main ? <h1>Today's temp : {data.main.temp.toFixed()}°F</h1> : null}</div>
        <div>
        {data.weather ? <p>Weather type : {data.weather[0].main}</p> : null}
        </div>
          
         
        </div>


    </div>
)

}

export default Weather;