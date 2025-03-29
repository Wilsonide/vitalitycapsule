import { PhoneCall, ShoppingCart, Smile, Truck } from "lucide-react"


const Describe = () => {
  return (
    <>
        <h3 className="text-2xl text-center font-bold">HOW WE WORK</h3>
        <div className="display flex flex-col sm:flex-row">
            <div className="flex-1/4 p-2 rounded-md border-2 m-2 flex items-center justify-center flex-col space-y-3">
                <ShoppingCart className="text-green-600 h-10 w-10"/>
                <h3 className="text-green-500 font-bold text-2xl">Order Right Now to Get Yours</h3>
                <p>
                    You can order from us via our website form. our whatsApp or Phone call(if you like)
                </p>
            </div>
            <div className="flex-1/4 p-2 rounded-md border-2 m-2 flex items-center justify-center flex-col space-y-3">
                <PhoneCall className="text-green-600 h-10 w-10"/>
                <h3 className="text-green-500 font-bold text-2xl">We'll Confirm Your Order</h3>
                <p>
                    We'll call to confirm your order and start processing your order very immediately.
                </p>
            </div>
            <div className="flex-1/4 p-2 rounded-md border-2 m-2 flex items-center justify-center flex-col space-y-3">
                <Truck className="text-green-600 h-10 w-10"/>
                <h3 className="text-green-500 font-bold text-2xl">We'll Send Your Product</h3>
                <p>
                    We'll send the product to you with the fastest delivery service in your state.
                </p>
            </div>
            <div className="flex-1/4 p-3 rounded-md border-2 m-2 flex items-center justify-center flex-col space-y-3">
                <Smile className="text-green-500 h-10 w-10"/>
                <h3 className="text-green-500 font-bold text-2xl">Receive & Pay (1-3 Days)</h3>
                <p>
                    We'll send your product to your doorstep. We offer payment on delivery(cash/transfer).
                </p>
            </div>
        </div>
        <div className="flex items-center justify-center flex-col text-center mb-4">
            <img src="/guarantee.jpg" alt="gaurantee" className="mb-0 h-50 w-50 object-cover block" />
            <h2 className="text-2xl font-bold">100% Satisfaction 60-Day Money Back Guarantee</h2>
            <p>Your order today is covered by our iron-clad 60-day 100% money-back guarantee. If you are not impressed with the results, then just write to us and we wiill refund every single cent</p>
        </div>
    </>
  )
}

export default Describe