import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <div className='nav-c text-slate-700 sec-f text-[14px] font-[400] absolute top-0 z-[5] w-[100%] p-[20px] flex items-center justify-center gap-[50px]'>
                <Link href='/'>Home</Link>

        <Link href='/documentation'>Documentation</Link>
    </div>
  )
}

export default Nav