import React, { useState } from "react";
import './SearchBar.css'


export default class SearchBar extends React.Component{
  constructor(props){
    super(props);
    this.state= {
      city: ''
    }
    this.onSearch=this.props.onSearch.bind(this)
  }
  render(){
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        this.onSearch(this.state.city);
        this.setState({city:''})
      }}>
        <input className='searchBox'
          type="text"
          placeholder="Ciudad..."
          value={this.state.city}
          onChange={e => this.setState({city: e.target.value})}
        />
        {/* <button className={c.buttonS}><img className={c.imgLupa} src="https://w7.pngwing.com/pngs/393/599/png-transparent-magnifying-glass-computer-icons-magnifying-lens-glass-angle-white.png" alt="err" /></button> */}
        <input className='buttonS' type="submit" value="🔎" />
      </form>
    );
  }
}


// export default function SearchBar({onSearch}) {
//   const [city, setCity] = useState("")
//   return (
//     <form onSubmit={(e) => {
//       e.preventDefault();
//       onSearch(city);
//       setCity('')
//     }}>
//       <input className={c.searchBox}
//         type="text"
//         placeholder="Ciudad..."
//         value={city}
//         onChange={e => setCity(e.target.value)}
//       />
//       {/* <button className={c.buttonS}><img className={c.imgLupa} src="https://w7.pngwing.com/pngs/393/599/png-transparent-magnifying-glass-computer-icons-magnifying-lens-glass-angle-white.png" alt="err" /></button> */}
//       <input className={c.buttonS} type="submit" value="🔎" />
//     </form>
//   );
// }
