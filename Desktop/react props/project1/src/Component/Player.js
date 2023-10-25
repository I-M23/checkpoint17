import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Player(props) {
  console.log ()
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{props.singlePlayer.name}</Card.Title>
        <Card.Text>
          {props.singlePlayer.nationality}
        </Card.Text>
        <Card.Text>
          {props.singlePlayer.age}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Player;