import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { MainHeading } from './style/components/Heading'
import Error from './pages/error'
import ForgetPassword from './pages/forgetpassword'


const App = () => {
  return (
    <div >
      <NavBar />
      <Routes>
        <Route path='/'  element={<MainHeading>Hello Dev's </MainHeading>} />
        <Route path='/forgetpassword' element={<ForgetPassword> </ForgetPassword>} />
        <Route path='/error' element={<Error></Error>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
