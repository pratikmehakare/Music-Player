import { combineReducers } from "@reduxjs/toolkit"

import bgReducer from "./Slice/bgReducer"
import trackReducer from "./Slice/trackReducer"

const rootReducer = combineReducers({
  bgcolor: bgReducer,
  trackSlice: trackReducer,
})

export default rootReducer
