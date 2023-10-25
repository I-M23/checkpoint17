import React from "react";


import './styles/cards.css';
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import Image from './components/Image';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { product } from "./product";



function App() {
  let userName ="IM";
  return (
    
    <div className="Cartes">
    
     
    
    <Card style={{ width: '18rem' }}>
      <Card.Img src = {<image/>}/>
      <Card.Body>
        <Card.Title>
          <Name/>
        </Card.Title>
        <Card.Title>
          <Price/> $
        </Card.Title>
        <Card.Text>
          <Description/>
        </Card.Text>
      </Card.Body>
    </Card>
   
     <h1> {`Hello ${userName} `} </h1>
     {userName ? <img src ="" /> : "Please write your name" }  
    </div>
  );
}

export default App;
