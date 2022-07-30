 import './App.css';
import Context from './data/context';
import List from './list';
function App() {
  return (
    <div className="App">
   <Context>
<List/>

   </Context>
    </div>
  );
}

export default App;
