import React, { Component } from "react";
import TitleFilter from './TitleFilter'
import RatingFilter from './RatingFilter'
import MovieList from './MovieList'
import './MovieApp.css'

const MovieApp = () => (
    <div className="movie-app">
        <header className="movie-app-header">
            <TitleFilter />
            <RatingFilter />
        </header>
        <main className="movie-app-main">
            <MovieList />
        </main>
    </div>
)

export default MovieApp;
