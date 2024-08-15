import { useEffect, useState } from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'


function App() {
  const [toDo, setToDo] = useState('');
  const [toDos, setToDos] = useState([])
  const onChange = (event) => setToDo(event.target.value)
  const onSubmit = (event) => {
    event.preventDefault()
    setToDos(currentToDosArray => [toDo, ...currentToDosArray])
    setToDo('');
  }

  return (
      <>
        <h1>My To Dos({toDos.length})</h1>
        <form onSubmit={onSubmit}>
          <input value={toDo}
                 onChange={onChange}
                 type="text"
                 placeholder="write your todo..."
                 required maxLength="30"/>
          <button>Add To Do</button>
        </form>

      </>
  )
}

export default App
