import Cards from "./card";
import { Container } from 'reactstrap';
import { Col } from 'reactstrap';
import { Row } from 'reactstrap';
import { NavLink } from "react-router-dom";
function ProductType(props) {
    const sp = props.data.list.map(function(item)
    {
        return(
            <Col className="bg-light border" xs="auto">
                <Cards data={item}/>
            </Col>
        );
    })
    return (
        <>
            
            <span className="type-product">{props.data.ten}</span>
            <div className="button-all-of-type">
                
                
                    <NavLink to="/products" className="btn btn-outline-dark xem">Xem tất cả</NavLink>
                
            </div>
            <Container>
                <Row>
                
                    {sp}
                
                </Row>
            </Container>
        </>
    )
}
export default ProductType