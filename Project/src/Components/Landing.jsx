import React from 'react'
import logoImg from '../assets/logo.png'
import one from '../assets/one.avif'
import two from '../assets/two.avif'
import three from '../assets/three.avif'
import four from '../assets/four.avif'
import { useNavigate } from 'react-router-dom'
import left from '../assets/left.avif'
import right from '../assets/right.avif'


const Landing = () => {
   const navigate =  useNavigate()
  return (
    <div className='bg-[#FF5200] min-h-[100vh] relative'>
           <nav className='flex justify-between p-6'>
            <img className='h-[48px]' src={logoImg} alt="" />
            <div className='flex items-center gap-4 text-white'>
                <p>Swiggy Corporate</p>
                <p>Partner with us</p>
                <button className='border  border-white rounded-lg py-3 px-6'>Get The App
                    <i className="fa-solid fa-arrow-right fa-sm text-white ml-2"></i>
                </button>
                <button className='border bg-black rounded-lg py-3 px-6'>Sign In</button>
            </div>
           </nav>
           <div className='flex  flex-col items-center gap-5 mt-30'>
              <h1 className='text-white text-4xl text-center leading-12'>Order food & groceries. Discover <br />best restaurants. Swiggy it!</h1>
              <div className='h-[50px] w-[35vw]  relative'>
                <input className='bg-white h-[100%] w-[100%] rounded px-4 outline-none' type="text" placeholder='Search for restaurant,items or more' />
                <i className="fa-solid fa-magnifying-glass absolute top-4 right-8"></i>
              </div>
              <div className='flex'>
                <img onClick={()=>{
                    navigate('/restaurants')
                }} className='h-[250px]' src={one} alt="" />
                <img onClick={()=>{
                    navigate('/instamart')
                }} className='h-[250px]' src={two} alt="" />
                <img onClick={()=>{
                    navigate('/dineout')
                }} className='h-[250px]' src={three} alt="" />
                <img onClick={()=>{
                    navigate('/genie')
                }} className='h-[250px]' src= {four} alt="" />
              </div>
           </div>
               <img className='absolute top-20 h-[90vh]' src={left} alt="" />
              <img className='absolute top-20 h-[90vh] right-0' src={right} alt="" />
    </div>
  )
}

export default Landing
