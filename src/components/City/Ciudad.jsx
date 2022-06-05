import React from "react";
import { Link } from "react-router-dom";
import './Ciudad.css'

class Ciudad extends React.Component{
    render(){
        return (
            <div className="divTotal_">
                <div className="divCiudad_">
                            {/* {console.log(this.props)} */}
                            <h2>{this.props.city.name}</h2>
                            <div className="info">
                            <img src={`http://openweathermap.org/img/wn/${this.props.city.img}@2x.png`} alt="icono clima" />
                                <div><b>Temperatura: </b>{this.props.city.temp} ºC</div>
                                <div><b>Clima: </b>{this.props.city.weather}</div>
                                <div><b>Viento: </b>{this.props.city.wind} km/h</div>
                                <div><b>Cantidad de nubes: </b> {this.props.city.clouds}</div>
                                <div><b>Latitud: </b>{this.props.city.latitud}º</div>
                                <div><b>Longitud: </b>{this.props.city.longitud}º</div>
                            </div>
                            <Link to='/' className="buttonClose_">close</Link>
                </div>
            </div>
        )
    }
}
export default Ciudad;



// export default function Ciudad({city}) {
//     return (
//         <div className="ciudad">
//                 <div className="container">
//                     <h2>{city.name}</h2>
//                     <div className="info">
//                         <div>Temperatura: {city.temp} ºC</div>
//                         <div>Clima: {city.weather}</div>
//                         <div>Viento: {city.wind} km/h</div>
//                         <div>Cantidad de nubes: {city.clouds}</div>
//                         <div>Latitud: {city.latitud}º</div>
//                         <div>Longitud: {city.longitud}º</div>
//                     </div>
//             </div>
//         </div>
//     )
// }