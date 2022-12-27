import logo from './logo.svg';
import './App.css';
import { Route, Router, RouterProvider } from 'react-router-dom';
import { router } from './Component/Routes/Route/Route';

function App() {
  return (
   <RouterProvider router={router}>

   </RouterProvider>
  );
}

export default App;
