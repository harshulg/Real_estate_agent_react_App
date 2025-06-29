import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './real-estate-agent/home';
import Properties from './real-estate-agent/search';
import Connect from './real-estate-agent/groups';
// import Register from './real-estate-agent/registration';
// import Profile from './real-estate-agent/profile';
// import Dashboard from './real-estate-agent/dashboard';
// import Chats from './real-estate-agent/chats';
// import AccountOverview from './real-estate-agent/account-overview';
// import Notifications from './real-estate-agent/notifications';
// import PostNow from './real-estate-agent/post-now';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/connect" element={<Connect />} />
        {/* <Route path="/register" element={<Register />} /> */}
        {/* <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/chats" element={<Chats />} />
        <Route path="/account" element={<AccountOverview />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/post" element={<PostNow />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
