import { Link } from "react-router-dom";
import { AiFillHome } from 'react-icons/ai';
import { MdAddCircle, MdLogin,MdLogout } from 'react-icons/md';
import { BsMusicNoteList } from 'react-icons/bs';

import { useSelector } from "react-redux";

import './index.css';
const NavBar = ()=>{
  const {isLogged} = useSelector(({security})=>security);
  const menu = isLogged ?
    (<ul>
      <li><Link to="/"><AiFillHome size={28}/></Link></li>
      <li><Link to="/new"><MdAddCircle size={28}/></Link></li>
      <li><Link to="/list"><BsMusicNoteList size={28}/></Link></li>
    </ul>) :
    (<ul>
      <li><Link to="/login"><MdLogin /> Login</Link></li>
      <li><Link to="/signin"><MdLogout/>Signin</Link></li>
    </ul>);

  return (
    <nav>
     {menu}
    </nav>
  );
}

export default NavBar;
