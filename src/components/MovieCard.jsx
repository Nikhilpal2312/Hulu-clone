import React from 'react';

const MovieCard = (movie) => {

  const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original";
  return (
    <div className=' m-2 md:m-3 cursor-pointer group inline-block'> 
        <img src={IMAGE_BASE_URL+movie.movie.backdrop_path} 
        className="w-[190px] md:w-[280px] object-cover rounded-2xl 
        group-hover:border-[3px] border-gray-400 p-1  transition-all duration-300 ease-in-out"/>
        <h2 className='text-gray-400 mt-2 text-[12px] md:text-[15px] font-medium'>{movie.movie.id%2==1?'WATCH MOVIE':'START WATCHING'}</h2>
        <h2 className='text-white mt-1 transition-all md:text-[18px] 
        group-hover:font-bold'>{movie.movie.original_title}</h2>
    </div>
  )
}

export default MovieCard;