import React from 'react';
import { useState, useEffect } from 'react';
const problems = [
  "Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0."+"<br />" + "<br />" + " A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters."+"<br/>"+" <br />"+ "For example, 'ace' is a subsequence of 'abcde'. A common subsequence of two strings is a subsequence that is common to both strings.",
  ' Write a program to check if a given number is prime.',
  ' Write a program to calculate the factorial of a number.',
];




const Problem = () => {
  const [selectedProblem, setSelectedProblem] = useState('');

  useEffect(() => {
    generateRandomProblem();
  }, []);

  const generateRandomProblem = () => {
    const randomIndex = Math.floor(Math.random() * problems.length);
    setSelectedProblem(problems[randomIndex]);
  };
  
  return (
    <div>
      <h2>Problem Statement</h2>
      <h3>Longest Common Subsequence</h3>
      <p>{selectedProblem}</p>
      {/* Add your problem statement content here */}
    </div>
  );
};

export default Problem;