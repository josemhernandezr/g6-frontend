import Page from "../Page"
import logo from './spotify.png';

import "./index.css";
const Splash = ()=>{
  return (
    <Page className="page-center">
      <img src={logo} style={{width:"64px"}}/>
      <div className="splash_song">
        cargando...
      </div>
    </Page>
  );
}

export default Splash;
