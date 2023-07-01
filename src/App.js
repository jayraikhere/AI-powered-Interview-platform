import './App.css';
import Problem from './components/Problem';
import CodeEditor from './components/CodeEditor';
import './components/Problem.css';
import './components/CodeEditor.css';



function App() {
 

  return (
    <div className="App">
    <div className="problem-statement">
      <Problem />
      </div>
      <div className="code-editor">
      <CodeEditor />
      </div>
    </div>
  );
}

export default App;
