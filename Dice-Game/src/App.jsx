import GamePlay from "./Components/GamePlay";
import StartGame from "./Components/StartGame"
import {useState} from "react";

function App() {
  
  const[isGameStarted, setIsGameStarted]=useState(false);

  const toggleGamePlay=()=>{
    setIsGameStarted((currentValue)=>!currentValue);
  };

    if(isGameStarted){
       return <GamePlay/>
    }
    else{
      return <StartGame toggle={toggleGamePlay}/>
    }
}

export default App
