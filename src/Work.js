import React from 'react'

const Work = () => {
  return (
    <div name='work' className='w-full h-screen bg-[#0a192f] text-gray-300'>
       <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
            <div className='shadow-md shadow-[#040c16] bg-pink-600 hover:scale-110 hover:bg-teal-700 duration-500'>
              <a href='http://127.0.0.1:5500/my-portfolio/src/Rock%20Paper%20Scissors/index11.html'><p>Rock Paper Scissors Game using JavaScript</p></a>
            </div>
            <div className='shadow-md shadow-[#040c16] bg-pink-600 hover:scale-110 hover:bg-teal-700 duration-500'>
              <a href='http://127.0.0.1:5500/my-portfolio/src/CandyCrush/index4.html'><p>Candy Crush Game using JavaScript</p></a>
            </div>
            <div className='shadow-md shadow-[#040c16] bg-pink-600 hover:scale-110 hover:bg-teal-700 duration-500'>
              <a href='http://127.0.0.1:5500/my-portfolio/src/Image/gallery.html'><p>Gallery using JavaScript</p></a>
            </div>
            <div className='shadow-md shadow-[#040c16] bg-pink-600 hover:scale-110 hover:bg-teal-700 duration-500'>
              <a href='http://127.0.0.1:5500/my-portfolio/src/Image1/galBoot.html'><p>Gallery using Bootstrap</p></a>
            </div>
          </div>
       </div>
    </div>
  )
}

export default Work