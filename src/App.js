import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Components/Home"
import Signup from "./Components/Signup"
import Login from "./Components/Login"
import Conversation from "./Components/Conversation"
import Conversation2 from "./Components/Conversation2"
import Editor from "./Components/Editor"
// import { fetchQuestion } from './Api/index';

const problems = [
  "Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0. A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters. For example, 'ace' is a subsequence of 'abcde'. A common subsequence of two strings is a subsequence that is common to both strings.",
  ' Write a program to check if a given number is prime.',
  ' Write a program to calculate the factorial of a number.',
];
const randomIndex = Math.floor(Math.random() * problems.length);
const selectedProblem=problems[randomIndex];

function App() {

  // const problems = [
  //   "Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0. A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters. For example, 'ace' is a subsequence of 'abcde'. A common subsequence of two strings is a subsequence that is common to both strings.",
  //   ' Write a program to check if a given number is prime.',
  //   ' Write a program to calculate the factorial of a number.',
  // ];

    // const [selectedProblem, setSelectedProblem] = useState('');
    // const randomIndex = Math.floor(Math.random() * problems.length);
    // // setSelectedProblem(problems[randomIndex]);
    // const selectedProblem=problems[randomIndex];
    // console.log(selectedProblem);


  return (
    <BrowserRouter>
      {/* <Suspense fallback={<div className='App'><Loader margin /></div>}> */}
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/conversation" exact element={<Conversation />} />
          <Route path="/conversation2" exact element={<Conversation2 ques={selectedProblem} />} />
          <Route path="/editor" exact element={<Editor selectedProblem={selectedProblem} />} />
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
