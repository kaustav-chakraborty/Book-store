import React from 'react';
import 'tailwindcss/tailwind.css'; 
import { Routes,Route } from 'react-router-dom';
import 'tailwindcss/tailwind.css'; 
import Home from './pages/Home';
import ShowBook from './pages/ShowBook';
import EditBook from './pages/EditBook';
import DeleteBook from './pages/DeleteBook'; // Corrected import path
import CreateBooks from './pages/CreateBooks';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/books/create' element={<CreateBooks/>}></Route>
      <Route path='/books/details/:id' element={<ShowBook/>}></Route>
      <Route path='/books/edit/:id' element={<EditBook/>}></Route>
      <Route path='/books/delete/:id' element={<DeletBook/>}></Route>
    </Routes>
  )
}

export default App