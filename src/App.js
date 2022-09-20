import FormToTable from './form/formToTable';
import './App.css';
import { useState } from 'react';

function App() {
  const [person, setPerson] = useState("");
  return (
    <div className="App">
      <FormToTable setStaff={setPerson} />

      <p>{person}</p>
    </div>
  );
}

export default App;
