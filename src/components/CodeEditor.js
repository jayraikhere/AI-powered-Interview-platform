import React, { useState } from 'react';
import axios from 'axios';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-c_cpp';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/theme-twilight';
import 'ace-builds/src-noconflict/ext-language_tools'; // Import the language tools for code completion
import styles from './CodeEditor.module.css';

const CodeEditor = ({problem}) => {
  const [language, setLanguage] = useState('c_cpp');
  const [code, setCode] = useState(getInitialCode(language));

  const handleCodeChange = (newCode) => {
    setCode(newCode);
  };

  const submitCode = async () => {
    try {
      const response = await axios.post('/checkCode', {
        problem: problem,
        code: code,
      });
      console.log(response.data); // Handle the response from the backend
    } catch (error) {
      console.error(error);
    }
  };

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);
    setCode(getInitialCode(selectedLanguage));
  };
  
  const getInitialCode = (language) => {
    switch (language) {
      case 'c_cpp':
        return `#include <iostream>
  using namespace std;
  
  int main() {
  // Write your C++ code here
  
  return 0;
  };`
   case 'java': return `public class Main {
  public static void main(String[] args) {
  // Write your Java code here
  }
  };`
   case 'python': return `# Write your Python code here`;
  default:
  return '';
  }
  };
  

  return (
    <div>
      <div className="language-select">
        <select value={language} onChange={handleLanguageChange}>
          <option value="c_cpp">C++</option>
          <option value="java">Java</option>
          <option value="python">Python</option>
        </select>
      </div>
      <AceEditor
        mode={language}
        theme="twilight"
        onChange={handleCodeChange}
        value={code}
        name="code-editor"
        editorProps={{ $blockScrolling: true }}
        style={{ height: '500px', width: '100%' }}
        enableBasicAutocompletion={true} // Enable basic code completion
        enableLiveAutocompletion={true} // Enable live code completion
      />
      <button onClick={submitCode}>Submit Code</button>
    </div>
  );
};

export default CodeEditor;