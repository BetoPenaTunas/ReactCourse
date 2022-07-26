/* 
  El index de la aplicación generalmente es esto

*/
import ReactDOM from 'react-dom';
import './index.css'; /* index.css para estilos globales */
import App from './App';
import Counter from './Counter';



ReactDOM.render(<App name='Betito'/>,document.getElementById('root'))
ReactDOM.render(<Counter/>,document.getElementById('counter'))

