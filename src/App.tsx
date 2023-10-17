import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Todo from './Todo';

function App() {
  
  return (
    <div>
     <Routes>
        <Route path='Login' element={ <Login/> }/>
        <Route path='Register' element={ <Register/> }/>
        <Route path='Todo' element={ <Todo/>} />
     </Routes>
    </div>
  )

  
}

export default App
