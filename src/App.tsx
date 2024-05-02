import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className='h-dvh w-screen bg-slate-900'>
      <Router>
        <Routes>
          <Route
            path='/'
            element={<h1 className='text-center text-slate-100 text-4xl font-bold py-6'>Home</h1>}
          ></Route>
          <Route
            path='/auth'
            element={<h1 className='text-center text-slate-100 text-4xl font-bold py-6'>Auth</h1>}
          ></Route>
          <Route
            path='/rated'
            element={<h1 className='text-center text-slate-100 text-4xl font-bold py-6'>Rated</h1>}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
