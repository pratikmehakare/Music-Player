import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  color: null,
}
// "#33425E"
const bgSlice = createSlice({
  name: "bgcolor",
  initialState: initialState,
  reducers: {
    setColor(state, value) {
      state.color = value.payload
    },
  },
})

export const { setColor } = bgSlice.actions

export default bgSlice.reducer
