import { Link } from 'react-router-dom';

import './navBarHome.css';

// const itemsNavBar = ["Home", "Services", "FAQ", "About us"];

export const NavBarHome = () => {
  return (
    // <nav>
    //   <ul className='header'>
    //     {itemsNavBar.map((item) => (<li><a href="">{item}</a></li>))}
    //   </ul>
    //   <ul>
    //     <img src="https://cdn.icon-icons.com/icons2/104/PNG/256/real_madrid_footballteam_18009.png" alt="Madrid" />
    //   </ul>
    // </nav>

<nav>
      <ul className='header'>
        <Link to="/Home"><li>Home</li></Link>
        <Link to="/AboutUS"><li>AboutUS</li></Link>
        <Link to="/ContactUS"><li>ContactUS</li></Link>
        <Link to="/ChangeColor"><li>ChangeColor</li></Link>
        <Link to="/UseState"><li>UseState</li></Link>
        <Link to="/GeneratorTweets"><li>GeneratorTweets</li></Link>
        <Link to="*"><li>NotFound</li></Link>
      </ul>
      <ul>
        <img src="https://cdn.icon-icons.com/icons2/3919/PNG/256/doom_eternal_icon_249831.png" alt="warzone" />
      </ul>
    </nav>


  )
}