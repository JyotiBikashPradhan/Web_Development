import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import { createContext, useState } from 'react';
import Navbar from './component/Navbar';
import MainPage from './component/MainPage';
import QuizQuestion from './component/QuizQuestion';
import Competition from './component/Competition';
import Scoreboard from './component/Scoreboard';
import Leaderboard from './component/Leaderboard';
import Profile from './component/Profile';
import About from './component/About';
import Login from './component/Login';
import Signup from './component/Signup';


// const AppState = createContext();

function App() {
  // const [login, setLogin] = useState(false);
  // const [userName, setUserName] = useState('');

  return (
    // <AppState.Provider value={{ login, userName, setLogin, setUserName }}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/quiz" element={<QuizQuestion/>} />
          <Route path="/competition" element={<Competition/>} />
          <Route path="/scoreboard" element={<Scoreboard/>} />
          <Route path="/leaderboard" element={<Leaderboard/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
        </Routes>
      </div>
    // </AppState.Provider> 
  );
}

export default App;
// export { AppState };
