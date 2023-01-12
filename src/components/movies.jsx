import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Like from '../common/Like';
import Pagination from '../common/pagination';
import { paginate } from '../utils/paginate';
import {getMovies} from '../services/fakeMovieService'
import { getGenres } from '../services/fakeGenreService';
import ListGroup from '../common/listGroup';

class Movies extends Component {
    state = { 
        movies:[],
        genres: [],
        pageSize: 4,
        currentPage: 1
     } 

     componentDidMount() {
        this.setState({movies: getMovies(), genres: getGenres()})
     }
     handleDelete = movie => {
        const movies = this.state.movies.filter(m => m._id !== movie._id)
        this.setState({movies})
     }
     handleLike(movie){
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = {...movies[index]};
        movies[index].liked = !movies[index].liked;

        this.setState({movies});
     }
     
     handlePageChange = page =>{
        this.setState({currentPage: page
        })
     }
     handleFiltering = (gen) =>{
        this.setState({selectedGenre: gen})
     }
     handleSort = (path )=> {
        console.log(path)
     }
    //  handleNewMovie = () =>{
    //     this.props.history.push('/New-Movies')
    //  }
    
    render() { 
        
        const { currentPage, pageSize,selectedGenre, movies:allMovies} = this.state
        
        if(this.state.movies.length === 0) return<span className=
        "badge badge-danger mt-3" 
        style={{alignItems: 'center', justifyContent: 'center'}}><h2>
        There are no movies in the stock</h2></span>;
        const filtered = selectedGenre ? allMovies.filter(m =>
             m._id === selectedGenre._id): 
        allMovies

        const movies = paginate(allMovies,currentPage,pageSize)
        console.log(movies)
        return (
            <div className='row'>
                <div className="col-3 mt-5">
                    <ListGroup items = {this.state.genres} 
                    textProperty="name" valueProperty="_id"
                    selectedItem={this.state.selectedGenre}
                    onFiltering={this.handleFiltering}/>
                </div>
                <div className="col-9">
               <Link to='/New-Movies'>  <button className="btn btn-md btn-primary m-3" 
               >New Movie</button></Link>
                <div className="alert alert-info" role="alert">
                    Displaying {this.state.movies.length} movies in the stock
                </div>
            <table className="table">
                <thead>
                    <tr> 
                        
                        <th onClick={()=>this.handleSort('title')}>Title</th>
                        <th onClick={()=>this.handleSort('genre.name')}>Genre</th>
                        <th onClick={()=>this.handleSort('numberInStock')}>Stock</th>
                        <th onClick={()=>this.handleSort('dailyRentalRate')}>Rate</th>
                        <th>Like</th>
                        <th></th>
                        
                    </tr>
                </thead>
                <tbody>
                    {allMovies.map(movie =><tr key={movie._id}>
                        
                        <td><Link to={`/Movies/${movie._id}`}>{movie.title}</Link></td>
                        <td>{movie.genre.name}</td>
                        <td>{movie.numberInStock}</td>
                        <td>{movie.dailyRentalRate}</td>
                        <td><Like onClick={() => this.handleLike(movie)} Like={movie.liked} /></td>
                        <td><button onClick={() =>this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
                        </tr>)}
                    
                </tbody>
            </table>
            <Pagination itemCount = {filtered.length} 
            pageSize = {pageSize}
            onPageChange = {this.handlePageChange}
            currentPage = {currentPage}/>
            </div>
                </div>
           
        );
    }
}
 
export default Movies;