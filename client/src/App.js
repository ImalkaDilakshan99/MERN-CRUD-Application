import { Route, Routes } from 'react-router-dom';
import "./App.css";
import UpdateUser from "./screen/UpdateUser";
import User from './screen/User';
import CreateUser from './screen/CreateUser';
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
      <nav>
        <Link className="bg-green-950 text-white font-bold px-5 py-3 m-5 rounded-lg" to={'/create'} >Create</Link>
      </nav>
      <br/>
      <Routes>
        <Route path='/' element={<User/>}/>
        <Route path='/update/:id' element={<UpdateUser/>}/>
        <Route path='/create' element={<CreateUser/>}/>
      </Routes>
    </>
  );
}

export default App;
