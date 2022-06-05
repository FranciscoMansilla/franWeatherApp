import React, { useState } from 'react';
import axios from "axios";
import './App.css';
import Nav from '../components/Nav/Nav';
import Cards from '../components/Cards/Cards';
import { Route } from 'react-router-dom';
import About from '../components/About.jsx';
import Ciudad from '../components/City/Ciudad';

//const apiKey = '4ae2636d8dfbdc3044bede63951a019b'; // estoy usando mi propoa key

function App() {
  const [cities, setCities] = useState([]);
  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }
  function onSearch(ciudad) {
    //Llamado a la API del clima
    // fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=03375d4a97873dec9dd46d1bcc404ec6&units=metric`)
    //   .then(r => r.json())
    //   .then((recurso) => {
      axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=03375d4a97873dec9dd46d1bcc404ec6&units=metric`)
      .then((respuesta) => {
        let recurso = respuesta.data
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }
  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if(ciudad.length > 0) {
        return ciudad[0];
    } else {
        return null;
    }
  }
  return (
    <div className="App">
      <Route
        path='/'
        render={() => <Nav onSearch={onSearch} />}
      />
      <Route
        exact path='/'
        render={() => <Cards cities={cities} onClose={onClose}/>}
      />
      <Route
        path='/about'
        component={About}
      /> 
      <Route
        exact path='/ciudad/:ciudadId'
        render={({match}) => <Ciudad
            city={onFilter(match.params.ciudadId)}
        />}
      />
    </div>

  );
}

export default App;
