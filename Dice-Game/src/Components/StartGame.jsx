import styled from "styled-components";
import { Button } from "../styled/button.js";

const StartGame = ({toggle}) => {
  return (
    <Container>
        {/* note */}
        <div> <img src="/images/dices.png"></img> </div>
        <div className="content">
            <h1>DICE GAME</h1>
            <Button onClick={toggle}>Play Now</Button>
        </div>
    </Container>
  )
}

export default StartGame

const Container=styled.div`
max-width:1180px;
display:flex;
margin:0 auto;
height:100vh;
align-items:center;

.content h1{
     font-size:96px;
     white-space:nowrap;

    }
`;

