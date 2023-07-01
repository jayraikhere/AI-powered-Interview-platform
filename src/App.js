import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Components/Home"
import Signup from "./Components/Signup"
import Login from "./Components/Login"
import Conversation from "./Components/Conversation"

function App() {
  return (
    <BrowserRouter>
      {/* <Suspense fallback={<div className='App'><Loader margin /></div>}> */}
        <div className="App">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/signup" exact element={<Signup />} />
            <Route path="/conversation" exact element={<Conversation />} />
            {/* <Route path="/forgotpassword" exact element = {<ForgotPassword />} />
            <Route path="/user/:userId" exact element = {<Profile />} />
            <Route path="/user/:userId/edit" exact element = {<EditProfile />} />
            <Route path="/schedulemeet" exact element = {<ScheduleMeet />} />
            <Route path="/allprofiles" exact element = {<AllProfiles />} />
            <Route path="/changePassword" exact element = {<ChangePassword />} />
            <Route path="/resetpassword/:token" exact element = {<ResetPassword />} /> */}
          </Routes>
        </div>
      {/* </Suspense> */}
    </BrowserRouter>
  );
}

export default App;
