import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './comps/UI/page/homePage/HomePage'
import GoodPage from './comps/UI/page/goodPage/GoodPage'

function App() {
  return (
    <div className='App'>
      <BrowserRouter basename='/SkvoshStore'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/:slug' element={<GoodPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App