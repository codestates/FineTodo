import React, { useState } from 'react';
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Login from './pages/login_1st';
import Login_2nd from './pages/login_2nd';
import Signup from './pages/signup';
import Mypage from './pages/Mypage';
import Main from './pages/Main';


function App() {

  return (
    <BrowserRouter>
    <div className='App'>
      <main>
        <section className='features'>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/login_2nd" element={<Login_2nd />}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/mypage" element={<Mypage/>}></Route>
        <Route path="/main" element={<Main/>}></Route>
      </Routes>
      </section>
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
