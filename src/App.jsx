import { Route, Routes } from "react-router"
import Navbar from "./components/Navbar"
import './scss/main.scss'
import Home from "./routes/Home"
import Footer from "./components/Footer"
import Projects from "./routes/Projects"
import FullProjectsList from "./routes/FullProjectsList"
import Contacts from "./routes/Contacts"
import { useEffect, useState } from "react"
import portfolioContext from "./context/PortfolioContext"

function App() {

  const [theme, setTheme] = useState(localStorage.getItem('theme'))

  useEffect(() => {
    if (!theme)
      localStorage.setItem('theme', 'light')

  }, [])

  const changeTheme = () => {
    if (theme === 'light') {
      localStorage.setItem('theme', 'dark')
    }
    else if (theme === 'dark') {
      localStorage.setItem('theme', 'light')
    }
    setTheme(localStorage.getItem('theme'))
  }

  return (    
    <>
    <div className={`main ${theme}`}>

      <portfolioContext.Provider value={{
        theme,
        changeTheme,
      }}>

        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/allProjects" element={<FullProjectsList />} />
          <Route path="/contact" element={<Contacts />} />
        </Routes>
        <Footer />
      </portfolioContext.Provider>
        </div>
    </>
  )
}

export default App
