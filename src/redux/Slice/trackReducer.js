import { createSlice } from "@reduxjs/toolkit"
import Alone from "../../assets/Alone.jpg"

const initialState = {
  song: {
    title:"Alone",
    author:"Alan Walkar",
    img:Alone,
    favorite: false,
    audio:null
  },
}

const trackSlice = createSlice({
  name: "trackSlice",
  initialState: initialState,
  reducers: {
    setSong(state, value) {
      state.song = value.payload
    },
    // toggleFavorite: (state) => {
    //   state.song = { ...state.song, favorite: !state.song.favorite };
    // },
  },
})

export const { setSong } = trackSlice.actions

export default trackSlice.reducer
