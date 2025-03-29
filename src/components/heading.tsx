

export const Heading = () => {
    return (
      <div className="space-y-4 flex items-center justify-center mt-20 md:flex-row flex-col mx-8">
        <div className="font-semibold ml-6 text-yellow-950 text-2xl sm:text-3xl md:text-5xl space-y-4">
          <div className="indent-8">Say Goodbye to infections Forever: The Ultimate Infection Cleanser for Men and Women.<br></br></div>
          <div className="text-pink-300 indent-8">Effective Against STDs, UTIs, Fungi, and More. Fast, safe and natural </div>
          <div>
            <img src="/certification-preview.png" alt="image" />
          </div>
        </div>
        <div className="flex justify-center items-center flex-shrink-0 w-[400px] h-[400px] mt-10 ">
          <img
            src="/image-fourb.png"
            alt="image"
            className="object-fit"
          />
        </div>
        
      </div>

    )
}