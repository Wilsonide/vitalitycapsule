import { useActionState } from 'react';
import emailjs from '@emailjs/browser';

const sendEmail = async (
  templateParams: Record<string, unknown> | undefined
) => {
  try {
    const response = await emailjs.send(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      templateParams,
      { publicKey: import.meta.env.VITE_API_KEY }
    );
    console.log('SUCCESS!', response.status, response.text);
    return { success: true };
  } catch (error) {
    console.log('FAILED...', error);
    return { success: false, error: 'Error... Try again' };
  }
};

const submitForm = async (
  prevState: unknown,
  formData: { get: (arg0: string) => unknown }
) => {
  const templateParams = {
    name: formData.get('name'),
    phone : formData.get('phone'),
    whatsapp : formData.get('whatsapp'),
    email: formData.get('email'),
    Address: formData.get('Address'),
  };
  console.log('templateParams=', templateParams);
  const response = await sendEmail(templateParams);
  return response;
};

export function ContactForm() {
  const [state, handleSubmit, isPending] = useActionState(submitForm, null);

  return (
   <>
        <h1 className='p-4 font-bold text-2xl'>PLACE YOUR ORDER BELOW</h1>
        <div className="w-3/4 bg-white shadow-[0_0px_5px_gray] rounded-lg p-6">
        {state?.success && (
            <div className="mb-4 text-center text-green-600 font-medium">
            Thank you for your message!
            </div>
        )}
        {state?.error && (
            <div className="mb-4 text-center text-red-600 font-medium">
            {state.error}
            </div>
        )}
        <form action={handleSubmit}>
            <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">Name <span className='text-red-400'> *</span></label>
            <input
                className="w-full border border-gray-300 rounded-lg p-2"
                type="text"
                name="name"
                required
            />
            </div>
            <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">Email <span className='text-red-400'> *</span></label>
            <input
                className="w-full border border-gray-300 rounded-lg p-2"
                type="email"
                name="email"
                required
            />
            </div>
            <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">Your Active Phone Number <span className='text-red-400'> *</span></label>
            <input
                className="w-full border border-gray-300 rounded-lg p-2"
                type="phone"
                name="phone"
                required
            />
            </div>
            <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">Your WhatsApp Phone Number <span className='text-red-400'> *</span></label>
            <input
                className="w-full border border-gray-300 rounded-lg p-2"
                type="phone"
                name="whatsapp"
                required
            />
            </div>
            <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">
                Address <span className='text-red-400'> *</span>
            </label>
            <input
                className="w-full border border-gray-300 rounded-lg p-2"
                type="text"
                name="Address"
                required
            />
            </div>
            <div className='flex items-center justify-center'>
                <button
                type="submit"
                disabled={isPending}
                className="cursor-pointer bg-green-900 text-white font-medium p-2 rounded-md hover:bg-blue-700"
                >
                Place My Order
                </button>
            </div>
        
        </form>
        </div>
        <div className='space-y-3 text-xl mb-2 '>
            <h1 className='text-center text-red-500 text-2xl font-bold mt-2'>WARNING!!!</h1>
            <p className='text-center'>Do not order if your Money is <span className='font-bold'>Not Complete</span> or You are Travelling.</p>
            <p className='text-center'>Delivery Takes 2-3 days, Do not order if you are not ready yet.</p>
        </div>
    </> 
  );
}