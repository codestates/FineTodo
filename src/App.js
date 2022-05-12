import React, { useState } from 'react';
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Login from './pages/login_1st';
import Login_Input from './pages/login_2nd';
import Main_try from './pages/Main_try';

function App() {

  return (
    <BrowserRouter>
    <div className='App'>
      <main>
       
        <section className='features'>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/Login_2nd" element={<Login_Input />}></Route>
        <Route path="/Main_try" element={<Main_try />}></Route>
      </Routes>
      </section>
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
