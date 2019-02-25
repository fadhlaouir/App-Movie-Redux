import { createStore, combineReducers } from 'redux'

const ratingFilterReducer = (state = 0, action) => {
    if (action.type === 'SET_RATING_FILTER') {
        return action.rating
    }
    return state
}

const titleFilterReducer = (state = '', action) => {
    if (action.type === 'SET_TITLE_FILTER') {
        return action.title
    }
    return state
}

const moviesReducer = (state = [], action) => {
    if (action.type === 'ADD_MOVIE') {
        return state.concat(action.movie)
    }
    if (action.type === 'EDIT_MOVIE') {
        return state.map(m => {
            if (m.id === action.id) {
                return action.movie
            }
            return m
        })
    }
    if (action.type === 'DELETE_MOVIE') {
        return state.filter(m => {
            if (m.id === action.id) {
                return false
            }
            return true
        })
    }
    return state
}

const store = createStore(combineReducers({
    movies: moviesReducer,
    minRatingFilter: ratingFilterReducer,
    titleFilter: titleFilterReducer
}))

/*
    TESTING
 */

store.dispatch({
    type: 'ADD_MOVIE',
    movie: {
        id: 'whatever',
        title: 'Whatever',
        rating: 2,
        year: 1900
    }
})

const inception = {
    id: 'Creed',
    title: 'Creed II',
    rating: 4,
    image: 'https://yts.am/assets/images/movies/creed_ii_2018/medium-cover.jpg',
    year: 2018
}

const shawshank = {
    id: 'Ralph',
    title: 'Ralph Breaks the Internet',
    image: 'https://yts.am/assets/images/movies/ralph_breaks_the_internet_2018/medium-cover.jpg',
    year: 2018,
    rating: 3
}

store.dispatch({
    type: 'ADD_MOVIE',
    movie: inception
})

store.dispatch({
    type: 'ADD_MOVIE',
    movie: shawshank
})

export default store
