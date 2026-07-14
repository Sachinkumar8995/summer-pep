import { useState } from 'react'
import './App.css'
import College from './College'
import { SubjectContext } from './ContextData'

function App() {
  const [subject, setSubject] = useState("English")

  return (
    <div className="App" style={{ backgroundColor: "yellow", padding: 10 }}>
      
      <SubjectContext.Provider value={subject}>
      <select onChange={(e) => setSubject(e.target.value)}>
        <option value="English">English</option>
        <option value="Mathematics">Mathematics</option>
        <option value="Science">Science</option>
        <option value="History">History</option>
        <option value="Geography">Geography</option>
      </select>
        <College />
      </SubjectContext.Provider>
    </div>
  );
}

export default App
