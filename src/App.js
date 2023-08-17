import './App.css';
import Header from './Components/Header';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MovieDetail from './Organisms/MovieDetail';
import Home from './Organisms/Home';

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element = {<Home/>}/>
          <Route path="/movies/:movieId" element = {<MovieDetail/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
