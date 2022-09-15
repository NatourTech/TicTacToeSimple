import logo from './logo.svg';
import './App.css';
import Show from './components/UI/Show';
import BoardElement from './components/Board/BoardElement';
function App() {
  return (
    <div className="App">
      <div className = "tic-tac">
        <Show />
      </div>
    </div>
  );
}

export default App;
