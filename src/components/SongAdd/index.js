import { useState } from 'react';
import Page from '../Page';
import Content from '../UI/Content';
import TextBox from '../UI/TextBox';
import { PrimaryButton } from '../UI/Button';
import ComboBox from '../UI/ComboBox';

import { useDispatch } from 'react-redux';
import { addNewSong } from '../../store/reducers/song/actions';
import { useNavigate } from 'react-router';

const SongAdd = () => {
  const [txtsongartist, setTxtsongartist] = useState();
  const [txtsongduration, setTxtsongduration] = useState();
  const [txtsongname, setTxtsongname] = useState();
  const [txtsongalbum, setTxtsongalbum] = useState();
  const [txtsonggender, setTxtsonggender] = useState('Pop');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onChangeHandler = (e)=> {
    const {name, value} = e.target;
    switch(name){
      case "txtsongartist":
        setTxtsongartist(value);
        break;
      case "txtsongduration":
        setTxtsongduration(value);
        break;
      case "txtsongname":
        setTxtsongname(value);
        break;
      case "txtsongalbum":
        setTxtsongalbum(value);
        break;
      case "txtsonggender":
        setTxtsonggender(value);
        break;
    }
  }
  const onBtnClick = (e)=> {
    e.preventDefault();
    e.stopPropagation();
    addNewSong(dispatch,txtsongartist,txtsongduration,txtsongname,txtsongalbum,txtsonggender,navigate, "/list" )
  }
  return (
    <Page showHeader showNavBar title={"Añadir Canción"}>
      <Content>
        <TextBox
          label="Artista"
          placeholder="Nombre del artista"
          value={txtsongartist}
          name="txtsongartist"
          onChange={onChangeHandler} >
        </TextBox>
        <TextBox
          label="Duración"
          placeholder="Duración de la canción"
          value={txtsongduration}
          name="txtsongduration"
          onChange={onChangeHandler} >
        </TextBox>
        <TextBox
          label="Nombre"
          placeholder="Nombre de la canción"
          value={txtsongname}
          name="txtsongname"
          onChange={onChangeHandler} >
        </TextBox>
        <TextBox
          label="Album"
          placeholder="Album"
          value={txtsongalbum}
          name="txtsongalbum"
          onChange={onChangeHandler} >
        </TextBox>
        
        <ComboBox
          label="Género"
          name="txtsonggender"
          value={txtsonggender}
          onChange={onChangeHandler}
        >
          <option value="Pop">Pop</option>
          <option value="Reggaeton">Reggaeton</option>
          <option value="Rock">Rock</option>
          <option value="Bachata">Bachata</option>
          <option value="Merengue">Merengue</option>
          <option value="Salsa">Salsa</option>
          <option value="Salsa">Cumbia</option>
          <option value="Salsa">Otras</option>
        </ComboBox>
        <div style={{ width: "100%", padding: '0.5em', marginTop: '1em' }}>
          <PrimaryButton onClick={onBtnClick}>Añadir</PrimaryButton>
        </div>
      </Content>
    </Page>
  );
}
export default SongAdd;
