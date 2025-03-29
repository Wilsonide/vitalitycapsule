import { Phone, PhoneCall } from "lucide-react"


const Enquiries = () => {
  return (
    <div>
        <h3 className='text-center font-bold text-2xl'>FOR MORE ENQUIRIES</h3>
        <div className="w-full flex justify-between items-center text-center flex-col text-white text-2xl sm:flex-row">
            <div className="flex-1/2 bg-green-600 flex items-center justify-between flex-col w-3/4 rounded-md gap-y-2 cursor-pointer h-50 m-4">
                <PhoneCall className="h-14 w-14 pt-4"/>
                <h3 className="font-semibold">CALL US</h3>
                <p className="pb-4">Contact Our Customer Care</p>
            </div>
            <div className="flex-1/2 bg-green-600 flex items-center justify-center flex-col w-3/4 rounded-md gap-y-2 cursor-pointer h-50 m-4">
                <Phone/>
                <h3  className="font-semibold">CHAT US</h3>
                <p className="pb-4">Chat Us On Whatsapp</p>
            </div>
        </div>
    </div>
  )
}

export default Enquiries