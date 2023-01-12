import React from 'react';
import joi from 'joi-browser';
import {saveMovie, getMovie} from '../services/fakeMovieService';
import {genres, getGenres} from '../services/fakeGenreService'
import Form from '../common/Form';


class NewMovie extends Form {
    state = { 
        data:{
            title: '',
            genreId: '',
            numberInStock: '',
            dailyRentalRate: ''
        },
        genres: [],
        errors: {}
     } 
     schema = {
        _id: joi.string(),
        title: joi.string().required().min(5).label('Title'),
        genreId: joi.string().required().label('Genre'),
        numberInStock: joi.number().min(0).max(100).label('Number In Stock'),
        dailyRentalRate: joi.number().min(0).max(10).label('Rate')
     }
     componentDidMount() {
        const genres = getGenres()
        this.setState({genres})
        
        
         const movieId = this.props.match.params.id;
         console.log(movieId)
         if(movieId === "/New-Movies") return;
         
         const movie = getMovie(movieId)
         if(!movie) return this.props.history.replace("/New-Movies")

         this.setState({data: this.mapToViewModel(movie)})
     }

     mapToViewModel(movie){
        return{
            _id: movie._id,
            title: movie.title,
            genreId: movie.genre._id,
            numberInStock: movie.numberInStock,
            dailyRentalRate: movie.dailyRentalRate
        }
     }
     doSubmit = () =>{
        console.log('form submitted')
        saveMovie(this.state.data)

        this.props.history.push("/")
    }
    handleSelect = (e) =>{
        const data = {...this.state.data}
        data.genreId = e.currentTarget.value
        this.setState({data})
        console.log(data)
    }
    render() { 
        const {data} = this.state
        return (
            <>
            <h2>Register a new movie</h2>
            <form onSubmit={this.handleSubmit}>
                
                    {this.renderInput('title', 'Title', 'text')}
                <select className="form-control" value =
                    {data.genreId} 
                    onChange={this.handleSelect} name= 'genreId'  
                    aria-label="Default select example">
                       
                        <option value=""></option>
                        { genres.map(gen=> <option key={gen._id}
                         value={gen._id}>{gen.name}</option>)}
                </select>
                    
                    {this.renderInput('numberInStock', 'Number In Stock', 'number')}
                
                    {this.renderInput('dailyRentalRate', 'Rate', 'number')}
                    {this.renderButton('Save')}
                </form>
            </>
        );
    }
}
 
export default NewMovie;