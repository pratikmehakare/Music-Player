import React from 'react'
import Dashboard from './pages/Dashboard'
import { Routes,Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import FavSidebar from './components/FavSidebar'
import TopSidebar from './components/TopSidebar'
import RecentSidebar from './components/RecentSidebar'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard/>} >
       <Route path='' element={<Sidebar/>} />
       <Route path='/favourites' element={<FavSidebar/>} />
       <Route path='/recently-played' element={<RecentSidebar/>}/>
       <Route path='/top-tracks' element={<TopSidebar/>}/>
      </Route>
    </Routes>
  )
}

export default App
