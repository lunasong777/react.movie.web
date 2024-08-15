import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
    <App />
)

{/*

두 번 실행되는 이유
index.js에 React.StrictMode 테그에 감싸져 있어서 그렇다고 합니다.
StrictMode는 create-react-app로 설치했을 때 기본적으로 생성되는 테그로,
해당 테그로 감싸져 있는 경우 자손까지 검사한다해서 두 번 실행된다고 합니다.
React.StrictMode 테그를 지우시고 해보세요.

*/}
