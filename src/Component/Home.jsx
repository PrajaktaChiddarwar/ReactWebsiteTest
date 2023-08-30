
import Navbar from './Navbar/Navbar'
import {Iframe} from './Header/Iframe'
import FourButtons from "./FourModules/FourButtons"
import Footer from "./Footer"
const Home = () => {
  return (
    <div>
       <Navbar/>
        <Iframe/>  
        <FourButtons/>
        <Footer/> 
    </div>
  )
}

export default Home