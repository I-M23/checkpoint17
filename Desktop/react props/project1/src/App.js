
import {product} from "./players";
import PlayerList from "./Component/PlayersList";


function App() {
    
   
  return (
    <div className="App">
      <PlayerList info = {product}/>
    </div>
  );
}

export default App;
