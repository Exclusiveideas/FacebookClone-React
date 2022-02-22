import './App.css';
import Feed from './Feed';
import Header from './Header';
import Login from './Login';
import Sidebar from './Sidebar';
import { useStateValue } from './StateProvider';
import Widget from './Widget';

function App() {
  const [{user}, dispatch] = useStateValue();

  if(!user) {
    return(
      <Login />
    )
  }

  return (
    <div className="app">
      <Header /> 

      <div className='app__body'>
        <Sidebar />
        <Feed />
        <Widget />
      </div>
    </div>
  );
}

export default App;