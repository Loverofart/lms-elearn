// import logo from './logo.svg';
import './css/App.css';
import './css/props.css';

//commons
import Sidebar from './common/sidebar';
import HomePage from './common/home';
import RightBar from './common/rightbar';

function App() {
  return (
    <div className="App flex">
      <Sidebar />
      <div className="app-content">
        <HomePage />
      </div>
      <RightBar />
    </div>
  );
}

export default App;
