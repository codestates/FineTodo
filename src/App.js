import React, { useState } from 'react';
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Login_1st from './pages/login_1st';
import Login_2nd from './pages/login_2nd';
import Signup from './pages/signup';
import Mypage_myinfo from './pages/Mypage_myinfo';
import Mypage_infoedit from './pages/Mypage_infoedit';
import Mypage_goodsentence from './pages/Mypage_goodsentence';
import Main from './pages/Main';


function App() {

  return (
    <BrowserRouter>
    <div className='App'>
      <main>
        <section className='features'>
      <Routes>
        <Route path="/" element={<Login_1st />}></Route>
        <Route path="/login_2nd" element={<Login_2nd />}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/mypage_myinfo" element={<Mypage_myinfo/>}></Route>
        <Route path="/mypage_infoedit" element={<Mypage_infoedit/>}></Route>
        <Route path="/mypage_goodsentence" element={<Mypage_goodsentence/>}></Route>
        <Route path="/main" element={<Main/>}></Route>
        
      </Routes>
      </section>
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
