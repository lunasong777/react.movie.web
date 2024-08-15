import { useEffect, useState } from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Button from "./Button.jsx"

function App() {
  const Hello = function () {
    useEffect(()=>{
      console.log('useEffect 로 한번만 실행될 때 나오는 것, 콘솔에찍힐꺼임!!!')
      return ()=>{ console.log('useEffect로 디스트로이드 될때 찍히는 것 이걸 우리는 Cleanup function이라 부름')}
    }, [])
    return <h1> Hello 익명함수 </h1>
  }
  // function Hello () {
  //   return <h1> Hello 전역함수 </h1>
  // }

  // const Hello = () => <h1>Hello arrowFun</h1>
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState('');
  const [showing, setShowing] = useState(false);
  const onClick = () => setCounter((prev) => prev + 1);
  const onClick2 = () => setShowing((prev)=>!prev);
  const onChange = (e) => setKeyword(e.target.value)
  useEffect(() => {
    if (keyword !== '' && keyword.length > 5) {
      console.log('keyword', keyword)
    }
  }, [keyword]);

  console.log('I run All the time')
  useEffect(() => {
    console.log('CALL THE API...')
  }, []);
  return (
      <>
        {showing ? <Hello /> : null}
        <button onClick={onClick2}>{showing ? 'Hide' : 'Show'}</button>
        <input
            value={keyword}
            onChange={onChange}
            type="text"
            placeholder="Search here..."/>
        <h1>{counter}</h1>
        <Button
            onClick={onClick}
            text={"click me"}/>
      </>
  )
}

export default App
