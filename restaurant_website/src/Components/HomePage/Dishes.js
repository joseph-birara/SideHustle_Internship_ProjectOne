//
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col'
import '../../styles/Dishes.css';
const Dishes=() =>{
    return(
        <div>
            <Row>
                <Col className="dish">
                <h1>Dishes </h1>
                </Col>
            </Row>
            <Row>
                <Col md={{span: 3, offset: 1}} >
                <img src="./cheff.jpg" className="img"></img>
                </Col>
                <Col md={{span: 4, offset: 1}}>
                    <h4>We provide best quality food to our customers. They always give us 
                    best comments. Special Dishes of our Restuarant are Jollof Rice, Egusi, Ofe Akwu.
                    Once you visit our Restuarant, You will surely come again. 

                    </h4>
                </Col> 

             </Row>
        </div>
    )

}
export default Dishes;