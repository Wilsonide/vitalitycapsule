
const Symptom = () => {
  return (
    <div className="w-full bg-transparent">
        <h3 className='bg-pink-950 text-4xl text-white flex justify-center items-center w-full py-2'>Early Symptoms of Infections and their Risks.</h3>
        <div className="flex flex-col text-white md:flex-row gap-2">
          <div className="bg-linear-to-t from-gray-800 to-pink-300 flex items-center justify-center text-left pl-4 md:flex-1/2 rounded-r-md">
            <div>
              <h1 className="text-3xl text-center">For Men:</h1>
              <h3 className="font-medium text-3xl mt-3">1. Urinary Track Infections (UTIs)</h3>
              <p className="text-xl font-semibold">Early Symptoms:</p>
              <div className="text-muted indent-5 text-xl"> Painful urination, frequent urge to urinate, cloudy or foul-smelling urine, and lower abdominal pain.</div>
              <p className="text-xl font-semibold">Types:</p>
              <div className="text-muted indent-5 text-xl">Cytitis(bladder infection) and prostatitis(prostrate infection)</div>
              <p className="text-xl font-semibold">Risk of Delay:</p>
              <div className="text-muted indent-5 text-xl">Untreared UTIs can lead to severe kidney infections(pyelonephritis) which might result in kidney damage or sepsis - a life threatening condition. </div>

              <h3 className="font-medium text-3xl mt-3">2. Sexually Transmitted Infections (STIs)</h3>
              <p className="text-xl font-semibold">Early Symptoms:</p>
              <div className="text-muted indent-5 text-xl"> Unusual discharge from the penis, painful urination, sores or bumps around the genital area, and itching.</div>
              <p className="text-xl font-semibold">Types:</p>
              <div className="text-muted indent-5 text-xl">Gonorrhea, clamydia, syphilis, and herprs.</div>
              <p className="text-xl font-semibold">Risk of Delay:</p>
              <div className="text-muted indent-5 text-xl">STIs can cause long-term health issues such as infertility, increased risk of HIV, and can be passed on to sexual patners. </div>

              <h3 className="font-medium text-3xl mt-3">3. Skin Infections</h3>
              <p className="text-xl font-semibold">Early Symptoms:</p>
              <div className="text-muted indent-5 text-xl"> Red, swollen, and painful areas on the skin, sometimes with pus or blistering.</div>
              <p className="text-xl font-semibold">Types:</p>
              <div className="text-muted indent-5 text-xl">Cellulitis, impetigo, and fungal infections like ringworm.</div>
              <p className="text-xl font-semibold">Risk of Delay:</p>
              <div className="text-muted indent-5 text-xl pb-4">Skin infections can spread rapidly, leading to systemic infections that might require more aggressive treatments or even surgical intervention. </div>
              
                
            
              
            </div>
            
          </div>
          <div className="bg-linear-to-t from-gray-800 to-pink-300  flex items-center justify-center md:flex-1/2 pl-4 space-y-3 rounded-l-md">
            <div>
            <h1 className="text-3xl text-center">For Women:</h1>
              <h3 className="font-medium text-3xl mt-3">1. Vaginal Infections:</h3>
              <p className="text-xl font-semibold">Early Symptoms:</p>
              <div className="text-muted indent-5 text-xl"> Itching, unusual discharge, foul odor, and discomfort during intercourse.</div>
              <p className="text-xl font-semibold">Types:</p>
              <div className="text-muted indent-5 text-xl">Bacterial vaginosis, yeast infections, and trichomoniasis.</div>
              <p className="text-xl font-semibold">Risk of Delay:</p>
              <div className="text-muted indent-5 text-xl">Untreated infections can lead to pelvic inflammatory disease (PID), which can cause chronic pain, infertility, and increase the risk of ectopic pregnancy. </div>

              <h3 className="font-medium text-3xl mt-3">2. Urinary Tract Infections (UTIs):</h3>
              <p className="text-xl font-semibold">Early Symptoms:</p>
              <div className="text-muted indent-5 text-xl"> Painful urination, frequent urge to urinate, cloudy or strong-smelling urine, and lower abdominal discomfort.</div>
              <p className="text-xl font-semibold">Types:</p>
              <div className="text-muted indent-5 text-xl">Cystitis (bladder infection) and pyelonephritis (kidney infection).</div>
              <p className="text-xl font-semibold">Risk of Delay:</p>
              <div className="text-muted indent-5 text-xl">Similar to men, untreated UTIs in women can lead to kidney damage, severe infection, and complications that might affect overall health.
              </div>

              <h3 className="font-medium text-3xl mt-3">3. Sexually Transmitted Infections (STIs):</h3>
              <p className="text-xl font-semibold">Early Symptoms:</p>
              <div className="text-muted indent-5 text-xl"> Abnormal vaginal discharge, painful urination, sores or blisters in the genital area, and pelvic pain.</div>
              <p className="text-xl font-semibold">Types:</p>
              <div className="text-muted indent-5 text-xl">Gonorrhea, chlamydia, syphilis, and genital herpes.</div>
              <p className="text-xl font-semibold">Risk of Delay:</p>
              <div className="text-muted indent-5 text-xl pb-4">STIs can lead to serious reproductive health issues, including infertility and increased susceptibility to other infections. </div>
              
                
            </div>
          </div>
        </div>
    </div>
  )
}

export default Symptom