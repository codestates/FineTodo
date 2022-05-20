import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Loginpage2 from "./pages/loginpage2";
import Signuppage from "./pages/signuppage";
import Mypage from "./pages/mypage";
import Mypage_infoedit from "./pages/Mypage_infoedit";
import Mypage_goodsentence from "./pages/Mypage_goodsentence";
import LoginPage1 from "./pages/loginpage1";
import Mainpage from "./pages/mainpage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <main>
          <section className="features">
            <Routes>
              <Route path="/" element={<LoginPage1 />}></Route>
              <Route path="/loginpage2" element={<Loginpage2 />}></Route>
              <Route path="/signup" element={<Signuppage />}></Route>
              <Route path="/mypage" element={<Mypage />}></Route>
              <Route
                path="/mypage_infoedit"
                element={<Mypage_infoedit />}
              ></Route>
              <Route
                path="/mypage_goodsentence"
                element={<Mypage_goodsentence />}
              ></Route>
              <Route path="/main" element={<Mainpage />}></Route>
            </Routes>
          </section>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
