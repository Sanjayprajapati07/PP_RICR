// import React, { useState } from 'react'
// //import fetch from 'node-fetch'

// const Weather = () => {

//     const [place,setPlace] =useState("");
//     const [Location,setLocation] = useState("");

//    const API_KEY = "7c2b01891bd5f50b650a6586e7c8efbf";
//    const get_Loc =async (city) => {
//       LOC_URL = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`

//       const res = await fetch(LOC_URL);
//       const data =  await res.json();
      

//    }
//    const get_weather = () => {
//     let city = place;
//     get_Loc(city);
//     LOC_URL = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`

//    }

//   return (
//     <>
//     <div className='container m-auto mt-10 p-4'>
//        <input type="text" name="city" id="city" placeholder='City Name' value={place} onChange={(e) => setPlace(e.target.value)} className='p-2 rounded border-2 border-b-grey'/>
//        <button className='bg-green-500 p-2 rounded ' onClick={get_weather}>Get Weather</button>
//     </div>
//     </>
//   )
// }

// export default Weather


import React, { useState } from "react";

const Weather = () => {
  const [place, setPlace] = useState("");
  const [location, setLocation] = useState({ lat: "", lon: "" });
  const [mausam, setMausam] = useState(null);
  const [loading, setLoading] = useState(false);
  const API_KEY = "7c2b01891bd5f50b650a6586e7c8efbf";

  const get_LOC = async (city) => {
    const Loc_URL = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`;
    try {
      const res = await fetch(Loc_URL);
      const data = await res.json();
      if (data.length > 0) {
        setLocation({ lat: data[0].lat, lon: data[0].lon });
      }
    } catch (error) {
      console.error("Error finding GEO-Location: " + error);
    }
  };

  const get_weather = async () => {
    setLoading(true);
    await get_LOC(place);
    if (!location.lat || !location.lon) return;
    
    try {
      const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&units=metric&appid=${API_KEY}`;
      const res = await fetch(weatherURL);
      const data = await res.json();
      setMausam(data);
    } catch (error) {
      console.error("Error Fetching Weather: " + error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-600 text-white shadow-lg">
     <div className="bg-gradient-to-b from-white to-gray-200 p-6 rounded-lg shadow-xl w-96 text-center text-gray-900 border border-gray-300">
        <h1 className="text-3xl font-bold mb-4 text-indigo-700">Weather App</h1>
        <input
          type="text"
          placeholder="Enter city name"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
          className="w-full p-3 border border-gray-400 rounded-lg mb-4 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button onClick={get_weather} className="w-full bg-indigo-600 p-3 rounded-lg text-white hover:bg-indigo-700 shadow-md transition-transform transform hover:scale-105">
          Get Weather
        </button>
      </div>

      {loading ? (
        <div className="mt-6">
          <img src="https://i.gifer.com/ZZ5H.gif" alt="Loading..." className="w-16 h-16" />
        </div>
      ) : mausam && mausam.cod === 200 ? (
        <div className="mt-6 bg-white p-6 rounded-lg shadow-xl w-96 text-center text-gray-900">
          <h2 className="text-xl font-bold">{mausam.name}</h2>
          <img
            src={`https://openweathermap.org/img/wn/${mausam.weather[0].icon}@2x.png`}
            alt="weather icon"
            className="mx-auto shadow-md"
          />
          <p className="text-lg font-semibold">{mausam.weather[0].description}</p>
          <p className="text-2xl font-bold">{mausam.main.temp}°C</p>
        </div>
      ) : (
        mausam && (
          <p className="mt-4 text-white text-lg shadow-md">No data found</p>
        )
      )}
    </div>
  );
};

export default Weather;

