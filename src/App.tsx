import React from 'react';
import ToDoList from "./components/ToDoList/ToDoList";
import style from './App.module.scss'
import './normalize.scss'

const App: React.FC = () =>{
  return(
    <main className={style.sectionMain}>
      <ToDoList />
    </main>
  )
}

export default App;
