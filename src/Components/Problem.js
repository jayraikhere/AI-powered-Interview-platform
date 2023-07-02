import React from 'react';
import { useState, useEffect } from 'react';





const Problem = ({problem}) => {
  
  
  return (
    <div>
      <h2>Problem Statement</h2>
      <p>{problem.prob}</p>
     
       <ul>
        <li> <p>{problem.inp1[0]}</p> <br/>
             <p>{problem.inp1[1]}</p>
        </li>
        <li> <p>{problem.inp2[0]}</p> <br/>
             <p>{problem.inp2[1]}</p>
        </li>
        <li> <p>{problem.inp3[0]}</p> <br/>
             <p>{problem.inp3[1]}</p>
        </li>
       </ul>
      {/* Add your problem statement content here */}
    </div>
  );
};

export default Problem;