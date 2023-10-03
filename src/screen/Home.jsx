import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import GenreMovieList from '../components/GenreMovieList';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        <GenreMovieList/>
        <Footer/>
    </div>
  )
}

export default Home