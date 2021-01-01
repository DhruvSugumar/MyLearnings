import './App.css';
import Content from './spa/content';
import Menu from './spa/menu';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Menu></Menu>
      <Content></Content>
      </header>
    </div>
  );
}

export default App;
