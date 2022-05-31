import React from 'react';
import SearchBar from '../SearchBar/SearchBar.jsx';
import { Link } from 'react-router-dom';
import './Nav.css'

class Nav extends React.Component{
  constructor(props){
    super(props);
    this.onSearch =  this.props.onSearch.bind(this)
  }
  
  render(){
    return (
      <div className='divNav'>
        <SearchBar onSearch={this.onSearch} />
        <Link to='/'>
          <span className='titleNav'>⛅Weather App</span>
        </Link>
        <div>
          <a href="#">
            <img className='imgLogo_' src='https://cdn-icons-png.flaticon.com/512/25/25231.png' alt="" />
          </a>
          <a href="https://www.linkedin.com/in/francisco-mansilla-5a6667237/">
              <img className='imgLogo_' src='https://cdn-icons-png.flaticon.com/512/61/61109.png' alt="" />
          </a>
        </div>
        {/* <Link to='/about'>
          <span>About</span>
        </Link> */}
      </div>
    )
  }
}
export default Nav;



// function Nav({onSearch}) {
//   return (
//     <div className={c.divNav}>
//       <Link to='/'>
//         <span className={c.titleNav}>⛅Weather App</span>
//       </Link>
//       <Link to='/about'>
//         <span>About</span>
//       </Link>
//       <SearchBar onSearch={onSearch} />

//     </div>
//   );
// };

// export default Nav;
