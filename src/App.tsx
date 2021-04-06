import React from 'react';
import NotesContainer from './components/Notes/NotesContainer';
import Logo from './components/Logo/Logo'
import AddNote from './components/AddNote/AddNote'

function App() {
  return (
    <div className="App">
      <Logo/>
      <NotesContainer/>
      <AddNote/>
    </div>
  );
}

export default App;
