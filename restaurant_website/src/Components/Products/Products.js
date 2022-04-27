import Card from 'react-bootstrap/Card'
import { Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import '../../styles/Products.css';

const Products = () => {
    return (
        <div className='mainDiv'>
               <h1 className='head'>Products</h1>
        <Row xs={1} md={4} className="g-2">
         
  {Array.from({ length: 8 }).map((_, idx) => (
    <Col>
      <Card>
        <Card.Img variant="top" src="card.jpg" className="cardImg" />
        <Card.Body>
          <Card.Title>Chicken Soup</Card.Title>
          <Card.Text>
           RS: 500 <br/>
           Amount: 1bowl
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
        </div>
    )
}
export default Products;