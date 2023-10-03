import React from 'react'
import GenreList from '../genreList/GenreList'
import MoviesList from './MoviesList';

const GenreMovieList = () => {
  return (
    <div>
        {GenreList.genere.map((items,index)=> index<=20&&(
            <div key={items.id} className='p-5 px-10 md:px-20'>
                <h2 className='text-white text-xl font-bold break-words...'>{items.name}
              <span className=' flex float-right font-noraml text-[14px] cursor-pointer text-gray-400'>View All</span></h2>
              <MoviesList genereId={items.id} />
            </div>
        )) }
    </div>
  )
}

export default GenreMovieList;