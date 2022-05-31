import React from 'react';
import {Link} from 'react-router-dom'
import './Card.css'


class Card extends React.Component{
  render(){
    return (
      <div>
      <div className='divCard' >
      {console.log(this.props)}
        <button className='closeButton' onClick={this.props.onClose} >x</button>
        <Link to={`/ciudad/${this.props.id}`} >
          <h3 className="card-title">{this.props.name}</h3>
        </Link>
        {/* <h3>{props.name}</h3> */}
        <ul className='ulCard'>
          <li>
            <p>Min</p>
            <p>{this.props.min + '°'}</p>
          </li>
          <li>
            <p>Max</p>
            <p>{this.props.max + '°'}</p>
          </li>
          <li><img src={`http://openweathermap.org/img/wn/${this.props.img}@2x.png`} alt="icono clima" /></li>
        </ul>
      </div>
    </div>
    )
  }
}
export default Card;


// export default function Card ({min, max, name, img, onClose, id}) {
//   export default function Card (props) {
//     return (
//       <div>
//       <div className={c.divCard} >
//         <button className={c.closeButton} onClick={props.onClose} >x</button>
//         <Link to={`/ciudad/${props.id}`} >
//           <h3 className="card-title">{props.name}</h3>
//         </Link>
//         {/* <h3>{props.name}</h3> */}
//         <ul className={c.ulCard}>
//           <li>
//             <p>Min</p>
//             <p>{props.min + '°'}</p>
//           </li>
//           <li>
//             <p>Max</p>
//             <p>{props.max + '°'}</p>
//           </li>
//           <li><img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="icono clima" /></li>
//         </ul>
//       </div>
//     </div>


//     );
// };
