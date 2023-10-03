import React, { useEffect, useState } from 'react';
import GlobalApi from '../service/GlobalApi';

const IMAGE_BASE_URL ='https://image.tmdb.org/t/p/original';

const Hero = () => {

const [movieList, setMovieList]=useState([]);
    useEffect(()=>{
        getFetch()
    },[])


    const getFetch =()=>{
        GlobalApi.getPopularMovies.then((resp) =>{
            const results=resp.data.results;
            const randomNum = Math.floor(Math.random() *10);
            // console.log(resp.data.results)
            setMovieList(results[randomNum])
        })
    } 
  return (
    <div>
        <div className='absolute h-[100vh] bg-gradient-to-t 
              from-[#1e2126] via-transparent to-transparent w-full'></div>
        <div className='absolute mt-[300px] md:mt[350px] 
        px-10 md:px-24'>
           
            <h2 className='text-white text-[14px]
            lg:text-[14px] '>Watch only on HULU</h2>
            <h2 className='text-white text-[40px]
            lg:text-[47px] font-bold'>{movieList.original_title}</h2>
            <div className='flex gap-5 mt-5'>
                <button className='bg-white px-8 py-3  border-none rounded-md tex-[18px] font-medium
                hover:bg-[#66aa33] hover:text-white
                '>PLAY</button>
                <button className='bg-transparent border-2 border-white
                text-white cursor-pointer hover:border-gray-500 px-8 py-3 rounded-md'>DETAILS</button>

            </div>
        </div>
            
                <img src={IMAGE_BASE_URL+movieList.backdrop_path} width={1920} height={1080} className='object h-[100vh]'/>
    </div>
  )
}

export default Hero;