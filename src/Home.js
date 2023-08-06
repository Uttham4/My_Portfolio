import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  const myFunc=()=>{
    document.getElementById("myImg").src=require('./UTTHAM SING Resume.jpg');
    const toggle=document.getElementById("myId")
    if (toggle.style.display === "none") {
      toggle.style.display = "flex";
    } else {
      toggle.style.display = "none";
    }
    
    const text=document.querySelector("button");
    if (text.textContent === "View Work") {
      text.textContent="MY RESUME";
    } else {
      text.textContent = "View Work";
    }

    
  }
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          UTTHAM SING
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a ECE Student and a Full Stack Developer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          Eventhough i'am a Electronics and Communication Student,
          I have  quite an amount of intrest in Full Stack Development.Currently
          i'am focusing on programming languages such as Python and Java.
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600' onClick={myFunc}>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
        <div id='myId' className='none w-80 h-150'>
        <img id="myImg" src="" alt="myResume" ></img>
        </div>
      </div>
    </div>
  );
};

export default Home;