
import { ContactForm } from "./components/contactform"
import Describe from "./components/Describe"
import Enquiries from "./components/enquiries"
import Footer from "./components/footer"
import { Heading } from "./components/heading"
import Navbar from "./components/navbar"
import Symptom from "./components/symptoms"


function App() {

  return (
    <div className="flex flex-col min-h-screen">
     <div className="flex-1 h-full">
       <Navbar/>
       <Heading/>
       <p className="text-3xl p-3 mt-6">
          <div className="indent-5">Infections can be persistent, uncomfortable, and even dangerous if left untreated.
            From UTIs to STIs and fungal infections, finding an effective solution is critical </div>
        </p>
        <div className="flex  h-60 justify-center items-center gap-20">
          <div className="text-4xl flex items-center justify-center flex-col ">
            <h3 className="">BROAD</h3>
            <h3 className="font-bold">INFECTION</h3>
            <h3 className="mb-2">CLEANSER</h3>
            <p className="text-sm">Natural Formula✅  Easy To Use✅</p>
            <p className="text-sm">Non-GMO✅  No Stimulants✅</p>
          </div>
          <div className="flex items-center justify-center  w-[100px] h-[100px] gap-4">
            <img src="/myimage.png" alt="" className="object-cover"/>
            <img src="/new-image.png" alt="" />
          </div>
        </div>
        <div className="flex justify-center items-center mb-4">
          <button className="border-2 rounded-md p-2 bg- bg-green-950 text-white font-semibold text-2xl cursor-pointer">
            Click Here To Order Yours!
          </button>
        </div>
        <Symptom/>
        <div className="flex-col flex items-center justify-center">
          <ContactForm/>
        </div>
        <Describe/>
        <Enquiries/>
     </div>
     <Footer/>
    </div>
  )
}

export default App
