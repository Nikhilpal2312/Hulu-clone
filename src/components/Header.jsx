import React, { useState } from 'react';
import logo from './../assets/images/logo.svg';
import {BiSearch} from 'react-icons/bi';
import {IoIosArrowDown, IoIosArrowUp} from 'react-icons/io';

const Header = () => {

  const [toggle, setToggle] =useState(false);
    const menu=[
        {
        id:1,
        name: 'Home'
    },
    {
        id:2,
        name: 'Live'
    },
    {
        id:3,
        name: 'TV'
    },
    {
        id:4,
        name: 'Movies'
    },
    {
        id:5,
        name: 'Sports'
    },
    {
        id:6,
        name: 'My Stuff'
    },
    {
        id:7,
        name: 'Hubs'
    },
]
  return (
    <div className=' absolute flex z-30 justify-between items-center px-10 p-4 w-full bg-gradient-to-b from-[#1e2126] to-transparent'>

  <ul className='hidden md:flex gap-8 text-white'>
    <div className='flex items-center mt-1.5'>
    <BiSearch className='text-xl'/>
    </div>
  {
        menu.map((item, index)=>(
          <li key={item.id} className='text-[16px] hover:bg-gray-700 hover:text-white p-2 rounded-md transition-all duration-300 ease-in-out '>{item.name}</li>
        ))
    }
  </ul>
  <div className='md:hidden'>
    <h2 className='text-white font-medium flex items-center bg-gray-700 rounded-md cursor-pointer p-2 gap-2' onClick={()=> setToggle(!toggle)}>Home 
   {!toggle? <IoIosArrowDown className="mt-1"/>:
    <IoIosArrowUp className="mt-1"/>
   }
    </h2>
    {toggle? 
    <ul className='absolute bg-gray-700 w-[200px] text-center mt-3 left-0 right-0 ml-auto mr-auto rounded-md hover:bg-gray-600 text-black'>
 {
        menu.map((item, index)=>(
          <li key={item.id} className='text-[16px] hover:bg-gray-700 hover:text-white p-2 rounded-md transition-all duration-300 ease-in-out '>{item.name}</li>
        ))
    }
    </ul>:null  
  }
   
  </div>
<div className='flex items-center gap-5 '>
<h2 className='border-[2px] border-white rounded-full w-[40px] h-[40px] text-white items-center flex justify-center'>Ni</h2>
    <img src={logo}  className='w-[70px]'/>
   
</div>
    </div>
  )
}

export default Header;