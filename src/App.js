import Contact from "./components/contact-me/contact";
import Footer from "./components/footer/footer";
import Intro from "./components/intro/intro";
import Navbar from "./components/navbar/navbar";
import Skills from "./components/skills/skills";
import Works from "./components/works/works";



function App() { 
 
return (
  <div className="myRoot">
    <div className="myRoot1">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Works/>
      <Contact/>
    </div>
    <Footer/>
    
  </div>
)
}


export default App;
