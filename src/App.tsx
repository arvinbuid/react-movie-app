import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Navbar} from "./components/navbar";

function App() {
  return (
    <div className='h-screen w-screen'>
      <Router>
        <Navbar />
        <div className='pt-[80px]'>
          <Routes>
            <Route
              path='/'
              element={<h1 className='text-center text-slate-800 text-4xl font-bold'>Home</h1>}
            ></Route>
            <Route
              path='/rated'
              element={<h1 className='text-center text-slate-800 text-4xl font-bold'>Rated</h1>}
            ></Route>
            <Route
              path='/auth'
              element={<h1 className='text-center text-slate-800 text-4xl font-bold'>Auth</h1>}
            ></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
