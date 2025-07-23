import React, { useState } from 'react'
import AccordionCard from './AccordionCard'

const Accordion = ({title, data,isNested, isLast}) => {
   const[showDropDown, setShowDropDown] =  useState(true)
    let icon = document.getElementById("icon")
  return (
    <div className={'w-[100%] mb-3 ' + (isNested ? (isLast ? "" : "border-b border-gray-200 pb-3") : "")}>
       <div className='flex justify-between'>
        <p className=''>{title}({data.length})</p>
        <i  onClick={()=>{
            setShowDropDown(!showDropDown)
           // icon.classList.contains("fa-angle-down") ? (icon.classList.remove("fa-angle-down")(icon.classList.add("fa-angle-up"))):(icon.classList.remove("fa-angle-up")(icon.classList.add("fa-angle-down")))
        }} class={"fa-solid " + (showDropDown ? "fa-angle-up":"fa-angle-down")}></i>
       </div>
      {
        showDropDown && 
         <div>
        {data.map((item,index)=>{
            return <AccordionCard info={item.card.info} isLast={index == data.length - 1} />
        })}
       </div>
      }
    
    </div>
  )
}

export default Accordion
