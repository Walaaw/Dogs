import { createHashRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import DogDetails from './Componenet/Details/DogDetails';
import Main from './Componenet/Main/Main';

function App() {
 const router= createHashRouter([
  {path:'',element:<Main/>},
  {path:'details',element:<DogDetails/>,children:[{path:':name'}]},
])
  return (
   <RouterProvider router={router}/>
  );
}

export default App;
