
import { useEffect, useState } from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // useState는 무조건 배열로 구조분해할당
  const [todo, setTodo] = useState([
    // {id: 1, title: '아침 챙겨먹기', completed: true},
    // {id: 2, title: '점심 챙겨먹기', completed: false},
    // {id: 3, title: '저녁 챙겨먹기', completed: false},
  ])
  const [newTodo, setNewTodo] = useState('');
  const onChangeNewTodo = (e) => {
    setNewTodo(e.target.value);
  }
  const onSubmit = (e) => {
    e.preventDefault();
    const nexTodo = [...todo, {id: Math.random(), title: newTodo, completed: false}];
    setTodo(nexTodo)
  }

  useEffect(() => {
    // todo가 바뀌었는지 감지하는 함수
  }, [todo]);


  return (
      <>
        <h2 className='App'>TO DO List</h2>
        <div className='App'>
          {todo.length === 0 ? (
              <div>
                <div>할 일을 추가해보세요</div>
                <TodoForm onChangeNewTodo={onChangeNewTodo} newTodo={newTodo} onsubmit={onSubmit}/>
              </div>
          ) : (
              <div>
                {todo.map((item) => (<div key={item.id}>{item.title}</div>))}
                <form onSubmit={onSubmit}>
                  <input value={newTodo} onChange={onChangeNewTodo} type="text"/>
                  <button>추가</button>
                </form>
              </div>
          )}
        </div>

        {/*  <a href="https://vitejs.dev" target="_blank">*/}
        {/*    <img src={viteLogo} className="logo" alt="Vite logo" />*/}
        {/*  </a>*/}
        {/*  <a href="https://react.dev" target="_blank">*/}
        {/*    <img src={reactLogo} className="logo react" alt="React logo" />*/}
        {/*  </a>*/}

        {/*<h1>Vite + React</h1>*/}
        {/*<div className="card">*/}
        {/*  <button onClick={() => setCount((count) => count + 1)}>*/}
        {/*    count is {count}*/}
        {/*  </button>*/}
        {/*  <p>*/}
        {/*    Edit <code>src/App.jsx</code> and save to test HMR*/}
        {/*  </p>*/}
        {/*</div>*/}
        {/*<p className="read-the-docs">*/}
        {/*  Click on the Vite and React logos to learn more*/}
        {/*</p>*/}
      </>
  )
}

export default App

