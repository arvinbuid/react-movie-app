import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Navbar} from "./components/navbar";
import {Auth} from "./pages/auth";
import {Home} from "./pages/home";
import {Movie} from "./pages/movie";
import {TvShow} from "./pages/tvshow";
import {Rated} from "./pages/rated";

function App() {
  return (
    <div className='h-screen'>
      <Router>
        <Navbar />
        <div className='pt-[60px]'>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route
              path='/rated'
              element={
                <h1 className='text-center text-slate-800 text-4xl font-bold'>{<Rated />}</h1>
              }
            ></Route>
            <Route path='/auth' element={<Auth />}></Route>
            <Route path='/movie/:id' element={<Movie />}></Route>
            <Route path='/tvshow/:id' element={<TvShow />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
