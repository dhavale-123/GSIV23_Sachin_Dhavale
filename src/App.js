import './App.css';
import Header from './Components/Header';
import { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MovieDetail from './Organisms/MovieDetail';
import Home from './Organisms/Home';

function App() {
  const [isHomePage , setIsHomePage] = useState(true);
  return (
    <div className="App">
      <Header isHomePage={isHomePage}/>
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
//I want react routing code for two page movie app first home page which will show default and if user will click on movie card then moview detail page shoulb be display?
