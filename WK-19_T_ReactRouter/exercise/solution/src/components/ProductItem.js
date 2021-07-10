import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function ProductItem({title, description, image}) {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="primary">Buy Now!</Button>
        </Card.Body>
      </Card>
    );
  }
  
  export default ProductItem;
