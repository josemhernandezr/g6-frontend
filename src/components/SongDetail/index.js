import * as React from "react";


import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  useParams
} from "react-router-dom";
import Page from '../Page';
import Content from '../UI/Content';
import LogoDetail from './player0.png';
import player1 from './player1.png';
import playeractions from'./playeractions.png';

const getSecurity = ({security})=>security;
const SongDetail = ()=>{

  const {id,songname,songartist,songduration,songalbum,songdate,songgender} = useParams();
    return (
      <Page title="Detalle canción" showHeader showNavBar>
        <Content>
          <div className="player">
           <img src={LogoDetail} style={{width:"60vw"}}/>
          </div>
          <div className="detail" key={id}>            
            <p className="parrafo">{songname}</p>
            <p className="detailsecond">{songartist}</p>
          </div>
          <div className="player">
           <img src={player1}/>
           <p className="parrafo">Duración: {songduration}</p>
          </div>
          <div className="player">
           <img src={playeractions}/>
          </div>
          <div className="detail" key={id}>            
            <div className="detailsecond">
              <p><strong>Album: </strong>{songalbum}</p>
              <p><strong>Género: </strong>{songgender}</p>      
            </div>
          </div>
        </Content>
      </Page>
    );
}
export default SongDetail;