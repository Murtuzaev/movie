import React from "react";
import SearchBar from './SearchBar'
import MovieList from './MovieList'
import axios from "axios";

class App extends React.Component{
  
    state = {
        movies:[],
        search: ""
    }

    // async componentDidMount()  {  
    //     const baseURL =   "http://localhost:3002/movies";
    //     const response = await fetch(baseURL);
    //     const data = await response.json()
    //     this.setState({movies: data})
    // }

    async componentDidMount()  {  
     const response = await axios.get( "http://localhost:3002/movies")
     this.setState({movies: response.data})
    }
     
    //  deleteMovie = (movie) => {
    //     const newMovieList = this.state.movies.filter(
    //         m => m.id !== movie.id
    //     );
    //     this.setState(state => ({
    //         movies: newMovieList
    //     }))
    //  } 

    // FETCH API

    //  deleteMovie = async (movie) => {
        
    //     const baseURL =   `http://localhost:3002/movies/${movie.id}`
    //     await fetch(baseURL, {
    //         method: "DELETE"
    //     })

    //     const newMovieList = this.state.movies.filter(
    //         m => m.id !== movie.id
    //     );
    //     this.setState(state => ({
    //         movies: newMovieList
    //     }))
    //  } 

     // AXIOS API
      
     deleteMovie = async (movie) => {
        axios.delete(`http://localhost:3002/movies/${movie.id}`)
        
        const baseURL =   `http://localhost:3002/movies/${movie.id}`
        await fetch(baseURL, {
            method: "DELETE"
        })

        const newMovieList = this.state.movies.filter(
            m => m.id !== movie.id
        );
        this.setState(state => ({
            movies: newMovieList
        }))
     } 


      
     searchMovie = (event) =>{
        console.log(event.target.value);
        this.setState({search: event.target.value})
     }

    render(){

         let filterMovies = this.state.movies.filter(
            (movie) => {
                return movie.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
            }
         )
       
       return (
         <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <SearchBar
                    searchMovieProp={this.searchMovie}
                    />
                </div>
            </div>
            <MovieList
            movies={filterMovies}
            delete={this.deleteMovie}
            />
         </div>
        )
    }
}

export default App;