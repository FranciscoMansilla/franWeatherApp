import React from 'react';
import './Cards.css';

import Card from '../Card/Card';



class Cards extends React.Component{
  render(){
      if(this.props.cities){
        return (
          <div className='cards'>
            {this.props.cities.map(c => <Card
                max={c.max}
                min={c.min}
                name={c.name}
                img={c.img}
                onClose={() => this.props.onClose(c.id)}
                id={c.id}
              /> )}
          </div>
        );
      }else {
        return(
          <div>Sin ciudades</div>
        )
      }
  } 
}
export default Cards;

// export default function Cards({cities, onClose}) {
//   if(cities){
//     return (
//       <div className='cards'>
//         {cities.map(c => <Card
//             max={c.max}
//             min={c.min}
//             name={c.name}
//             img={c.img}
//             onClose={() => onClose(c.id)}
//             id={c.id}
//           /> )}
//       </div>
//     );
//   } else {
//     return(
//       <div>Sin ciudades</div>
//     )
//   }
// }
