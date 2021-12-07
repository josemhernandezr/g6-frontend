import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { FaPlayCircle } from 'react-icons/fa';
import Page from '../Page';
import { List, ListItem } from '../UI/List';
import logo from './spotify.png';
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import { fetchSongData } from '../../store/reducers/song/actions';
const Loader = ()=>{
  return (
  <div className="loading">
      <div className="loading_child">
        <img src={logo} style={{width:"4em"}}/>
        <p>cargando...</p>
      </div>
  </div>);
}
const SongList = ()=>{
  const song = useSelector(({song})=>song);
  const dispatch = useDispatch();
  const {hasMore, items, currentPage, pageSize, totalDocs} = song;
  const fetchMore = () => {
    console.log("Cargando más");
    fetchSongData(dispatch, currentPage + 1, pageSize)
  }

  useEffect(()=>{
    if (hasMore) {
      fetchMore();
    }
  }, []);

  const itemsUI = items.map((o,i)=>{
    return (   
    <ListItem key={i}>
        <Link to={`/SongDetail/${o._id}/${o.songname}/${o.songartist}/${o.songduration}/${o.songalbum}/${o.songdate}/${o.songgender}`}>
          <FaPlayCircle size={50} />   
          <div className="details">
            <div className="song">{o.songname}</div>
            <div className="artist">{o.songartist}</div>
          </div>
        </Link>
    </ListItem>);
  });
  return (
    <Page showHeader title="Mis canciones" showNavBar>
      <List
        id="songList"
        hasMore={hasMore}
        fetchMore={fetchMore}
        loader={(<Loader />)}
        dataLength={items.length}
      >
        {itemsUI}
      </List>
    </Page>
  );
}

export default SongList;
