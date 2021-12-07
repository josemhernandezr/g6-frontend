
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import RequireAuth from './components/UI/RequireAuth';
import Splash from "./components/Splash";
import Login from "./components/Login";
import SignIn from "./components/SignIn";
import Dashboard from "./components/Dashboard";
import SongAdd from "./components/SongAdd";
import SongList from "./components/SongList";
import SongDetail from "./components/SongDetail";
import { useSelector } from "react-redux";
import { initiatedApp } from './store/reducers/app/actions';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
const Private = ({ children }) => <RequireAuth redirectTo="/login">{children}</RequireAuth>

function App() {
  const { appInitiated, loading} = useSelector(({app})=>app);
  const dispatch = useDispatch();
  useEffect(()=>{
    initiatedApp(dispatch);
  }, []);
  return (
      <BrowserRouter>
        <div className="App">
          { (appInitiated)? (<Routes>
            <Route path="/login"  element={<Login />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/" element={<Private><Dashboard /></Private>}/>
            <Route path="/new" element={<Private><SongAdd/></Private>} />
            <Route path="/list" element={<Private><SongList/></Private>} />
            <Route path="/SongDetail/:_id/:songname/:songartist/:songduration/:songalbum/:songdate/:songgender" element={<Private><SongDetail/></Private>}/>
          </Routes>): (<Splash />)
          }
        </div>
      </BrowserRouter>
  );
}

export default App;
