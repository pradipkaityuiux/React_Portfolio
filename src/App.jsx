import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import About from './Components/About/About'
import Contact from './Components/Conatct/Contact'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Qualifications from './Components/Qualifications/Qualifications'
import Services from './Components/Services/Services'
import Skills from './Components/Skills/Skills'
import Testimonials from './Components/Testimonials/Testimonials'
import AppLayout from './AppLayout'
import AboutMe from './Components/About/AboutMe'


function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' index element={
            <AppLayout>
              <Home/>
              <About/>
              <Skills/>
              {/* <Services/> */}
              <Qualifications/>
              <Testimonials/>
              <Contact/>
            </AppLayout>
            }>
          </Route>
          <Route path='/aboutme' element={<AboutMe/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
