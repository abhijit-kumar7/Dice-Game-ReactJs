import styled from "styled-components";
import { useState } from "react";

const RollDice = ({ currentDice,rollDice}) => {

  return (
    <DiceContainer>
       <div className="dice"
        onClick={rollDice}
       >
          <img src={`images/dice/dice_${currentDice}.png`}></img>
       </div>
       <p>Click on Dice to roll</p>

    </DiceContainer>
  )
}

export default RollDice;

const DiceContainer=styled.div`
  margin-top:48px;
  display:flex;
  justify-content:center;
  flex-direction:column;
  align-items:center;

  p{
    font-size:24px;
  }

  .dice{
   cursor:pointer;
  }

  `;