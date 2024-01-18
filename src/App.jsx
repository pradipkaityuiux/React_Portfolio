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
import Blog from './Components/Blog/Blog'
import Portfolio from './Components/Portfolio/Portfolio'
import DevPortfolio from "./Components/Portfolio/DevPortfolio"
import DesignPortfolio from "./Components/Portfolio/DesignPortfolio"
import Footer from './Components/Footer/Footer'
import toast, { Toaster } from 'react-hot-toast'


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
              <Blog/>
              <Qualifications/>
              {/* <Testimonials/> */}
              <Contact/>
            </AppLayout>
            }>
          </Route>
          <Route path='/aboutme' element={<AboutMe/>}/>
          <Route path='/portfolio' element={<Portfolio/>}>
            <Route index element={<DevPortfolio/>}/>
            <Route path='development' element={<DevPortfolio/>}/>
            <Route path='uxdesign' element={<DesignPortfolio/>}/>
          </Route>
        </Routes>
        <Toaster position='top-center' gutter={12} containerStyle={{margin: '8px'}} toastOptions={{
          success:{
            duration: 3000
          },error:{
            duration: 5000
          },style:{
            fontSize: "16px",
            maxWidth: "400px",
            padding: "16px 24px",
            backgroundColor: "#FFF",
            color: "#374151"
          }
        }}/>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
