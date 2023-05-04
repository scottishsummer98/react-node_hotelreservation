import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Home from './components/pages/Home'
import Hotels from './components/pages/Hotels'
import SingleHotel from './components/pages/SingleHotel'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
            </>
          }
        ></Route>
        <Route
          path="/hotels"
          element={
            <>
              <Hotels />
            </>
          }
        ></Route>
        <Route
          path="/hotel/:id"
          element={
            <>
              <SingleHotel />
            </>
          }
        ></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
