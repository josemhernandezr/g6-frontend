import { privateAxios } from "../../utils/Axios";
export const fetchSongData = (dispatch, page, pageItem, text)=>{
  dispatch(
    {
      type:"SONG_START_FETCH",
      payload:null
    }
  )
  privateAxios.get(`/api/songs/facet/${page}/${pageItem}`)
  .then(({data})=>{
    console.log(data);
    dispatch(
      {
        type:"SONG_FETCH_SUCCESS",
        payload: data
      }
    )
  })
  .catch((err)=>{
    console.log(err);
    dispatch(
      {
        type:"SONG_FETCH_ERROR",
        payload: ["Error al traer Info"]
      }
    )
  });
}

export const ViewSongDetail = (dispatch,id)=>{
  dispatch(
    {
      type:"SONG_START_FETCH",
      payload:null
    }
  )
  privateAxios.get(`/api/songs/songdetail/${id}`)
  .then(({data})=>{
    console.log(data);
    dispatch(
      {
        type:"SONG_DETAIL_SUCCESS",
        payload: data
      }
    )
  })
  .catch((err)=>{
    console.log(err);
    dispatch(
      {
        type:"SONG_FETCH_ERROR",
        payload: ["Error al traer Información de la canción"]
      }
    )
  });
}

export const addNewSong = (dispatch,songartist,songduration,songname,songalbum,songgender,navigate, to)=>{
  dispatch(
    {type:"SONG_ADD_START", payload:null}
  );
  privateAxios.post('/api/songs/newsong',{songartist,songduration,songname,songalbum,songgender})
    .then(({data})=>{
      console.log(data);
      dispatch(
        {
          type:"SONG_ADD_SUCCESS",
          payload:null
        }
      );
      dispatch({ type:"SONG_LIST_CLEAR", payload:null});
      navigate(to);
    })
    .catch((err)=>{
      console.log(err);
      dispatch(
        {type:"SONG_ADD_ERROR", payload:null}
      )
    });
}

