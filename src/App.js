import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
//import Banner from './components/Banner/Banner' 
import Main from "./components/Main/Main";
import Propos from "./components/Propos/Propos";
import Pages from "./components/Pages/Pages";
import Footer from "./components/Footer/Footer";
import ErrorPage from "./components/ErrorPage/ErrorPage";
//import Carrousel from "./components/Carrousel/Carrousel";
import './assets/styles/index.scss'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/propos" element={<Propos />} />
        <Route path="/pages/:id" element={<Pages />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;