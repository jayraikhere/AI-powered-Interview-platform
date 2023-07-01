import React from 'react';
import { useState, useEffect } from 'react';
import Problem from './Problem';
import CodeEditor from './CodeEditor';
import './Problem.css';
import './CodeEditor.css';
import './Editor.css'



const problems = [
    "Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0."+"<br />" + "<br />" + " A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters."+"<br/>"+" <br />"+ "For example, 'ace' is a subsequence of 'abcde'. A common subsequence of two strings is a subsequence that is common to both strings.",
    ' Write a program to check if a given number is prime.',
    ' Write a program to calculate the factorial of a number.',
  ];

const Editor = () => {
    const [selectedProblem, setSelectedProblem] = useState('');

  useEffect(() => {
    generateRandomProblem();
  }, []);

  const generateRandomProblem = () => {
    const randomIndex = Math.floor(Math.random() * problems.length);
    setSelectedProblem(problems[randomIndex]);
  };


    return (  
    <div className="Editor">
    <div className="problem-statement">
      <Problem  problem = {selectedProblem} />
      </div>
      <div className="code-editor">
      <CodeEditor problem = {selectedProblem} />
      </div>
    </div>
    );
}
 
export default Editor;