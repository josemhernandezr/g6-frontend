import Page from '../Page';
import { useSelector } from 'react-redux';
import Content from '../UI/Content';
import Title from '../UI/Title';
import logoUser from './LogoUser.svg';
import Spotifylogo from './Spotify-logo.png';

const getSecurity = ({security})=>security;
const Dashboard = ()=>{
  const {user } = useSelector(getSecurity);
  return (
    <Page title="" showHeader showNavBar>
      <Content>
        <div className="logo">
          <img src={Spotifylogo}/>
        </div>
        <div className="logo">
          <img src={logoUser}/>
        </div>
        <Title></Title>
        <div className="user">
          { user.email}
        </div>
      </Content>
    </Page>
  );
}

export default Dashboard;
