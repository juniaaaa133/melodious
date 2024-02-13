"use client"
import ButtonX from '@/elements/button/ButtonX'
import ToastX from '@/elements/toastalert/ToastX';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaYoutube } from "react-icons/fa";


const HomePage = () => {

let [style,setStyle] = useState('close_toast')

  useEffect(()=>{
if(localStorage.getItem('toast_control') !== null){
setStyle('open_toast trans')
console.log('it is toast')
setTimeout(() => {
  setStyle('close_toast trans')
  console.log('it is end toast')
  localStorage.removeItem('toast_control')
}, 3000);
}else {
  return;
}
  },[])

  return (
    <div className='overflow-hidden'>
        <div className="bg-layer"></div>
        <div className="hm-layer">
          <div className="hm-hero-ctn">
           <div className="flex gap-[10px] items-center">
            <div className='text-[12px] main-f font-[400] main-c'>Powered By</div>
    <FaYoutube className='text-[#F70203]'/ > 
           </div>
          <div className="hm-title text-[56px] main-f main-c font-[600]">Melodious</div>
            <div className="hm-desc sec-c main-f font-[400] text-[14px]">Change your surrounding into music. </div>
            <Link href='/questions' className="w-[200px] mt-[30px]">
  <ButtonX txt={'explore now'} add_style={'main-f bcu trans'}/>
              </Link>
              <div className=" w-fit z-[4] h-fit absolute m-auto bottom-[23px] logo-ctn flex gap-[15px] items-center text-[10px] text-slate-800 font-[400] main-f">
              <div>ICONIC</div>
              <div className="logo-bar w-[1px] h-[30px] bg-slate-700"></div>
              <div className="">PRESENTS</div>
            </div>
          </div>
          <img src='./image/cd.png' className='hm-img pic' alt="CD" srcset="" />
          <img src='./image/cd.png' className='hm-imgr pic' alt="CD" srcset="" />

        </div>
        <div className={`${style}`}>
          <ToastX add_style={'text-[13px] main-c main-f'} txt={'Successfully removed playlist.Hope you enjoyed it!'} />
        </div>
    </div>
  )
}

export default HomePage