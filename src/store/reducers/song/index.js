const initialState = {
  hasMore:true,
  items:[],
  fetching:false,
  hasErrors:false,
  errors:[],
  currentPage:0,
  pageSize:15,
  totalPages:0,
  totalDocs:0
}

const songReducer = (state=initialState, action)=>{
  const {type, payload} = action;
  switch( type ){
    case "SONG_START_FETCH":
      return {
        ...state,
        fetching:true,
        hasErrors:false,
        errors:[]
      }
    case "SONG_FETCH_SUCCESS":
      const totalPages = (Math.ceil(payload.docsMatched / payload.itemsPerPage));
      const hasMore = payload.page !== totalPages;
      return {
        ...state,
        fetching:false,
        hasErrors:false,
        errors:[],
        totalPages: totalPages,
        currentPage: payload.page,
        items: [...state.items, ...payload.documents],
        hasMore: hasMore,
        totalDocs: payload.docsMatched
      }
    case "SONG_DETAIL_SUCCESS":
        return {
          ...state,
          fetching:false,
          hasErrors:false,
          errors:[],
          items: [...payload.documents]
        }
    case "SONG_LIST_CLEAR":
      return{...initialState};
  default:
    return state;
  }
}

export default songReducer;
