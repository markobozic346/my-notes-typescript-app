import React from 'react';
import NotesContainer from './components/Note/NotesContainer';
import Logo from './components/Logo/Logo'
import Search from './components/Search/Search'
import AddNote from './components/AddNote/AddNote'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
   app:{
    
   }
   
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <Logo/>
      <Search/>
      <NotesContainer/>
      <AddNote/>
    </div>
  );
}

export default App;
