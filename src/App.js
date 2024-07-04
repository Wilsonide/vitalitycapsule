import Contact from "./components/contact-me/contact";
import Footer from "./components/footer/footer";
import Intro from "./components/intro/intro";
import Navbar from "./components/navbar/navbar";
import Skills from "./components/skills/skills";
import Works from "./components/works/works";



function App() { 
 
return (
  <div>
    <Navbar/>
    <Intro/>
    <Skills/>
    <Works/>
    <Contact/>
    <Footer/>
  </div>
)
}


export default App;
