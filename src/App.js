import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Customers from './Routes/Customers';
import Movies from './components/movies';
import Rentals from './Routes/Rentals';
import NavBar from './components/navigationBar';
import Product from './components/product';
import NotFound from './components/notFound';
import MovieDetails from './components/movieDetails';
import NewMovie from './components/newMovies';
import LoginForm from './common/loginForm';
import RegisterForm from './common/Register';


function App() {
  function numberDip(){
    const luckyDip = [];

    const getRandom = (max, min) =>{
      const numbers = Math.floor(Math.random() * (max - min) + min)
    return numbers
  }

      do{
        luckyDip.push(getRandom(1,59))
        // luckyDip = [...new Set(luckyDip)]
      }while(luckyDip.length < 5)
    
    return luckyDip;
  }
  console.log(numberDip())
  return (
    <>
    <NavBar />
    <main className='container'>
      <Switch>
      <Route path='/NotFound' component={NotFound} />
      <Route path='/Movies/:id' component={NewMovie} />
      <Route path='/common/Login' component={LoginForm} />
      <Route path='/New-Movies' component={NewMovie} />
      <Route path='/Products' component={Product} />
      <Route path='/common/Register' component={RegisterForm} />
      <Route path='/Routes/Customers' component ={Customers} />
      <Route path='/Routes/Rentals' component ={Rentals} />
      <Route path='/' exact component={Movies} />
      <Redirect to='/NotFound' />
      </Switch>
    </main>
    </>

  );
}

export default App;
