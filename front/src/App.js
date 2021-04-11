// import logo from './logo.svg';
import './css/App.css';
import './css/props.css';

//commons
import Sidebar from './common/sidebar';
import HomePage from './common/home';

function App() {
  return (
    <div className="App flex">
      <Sidebar />
      <HomePage/>
    </div>
  );
}

export default App;
