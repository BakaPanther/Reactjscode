import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from 'reactstrap';
import { NavLink } from "react-router-dom";
function Cards(props) {
  return (
    <>
      <Card
        style={{
          width: '18rem'
        }}
      >
        <img className='height-img'
          alt="Sample"
          src={props.data.img}
        />
        <CardBody>
          <CardTitle tag="h5">
            {props.data.ten}
          </CardTitle>
          <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
          >
            Giá bán: {props.data.gia}
          </CardSubtitle>
          <NavLink to="/detail" class="btn btn-secondary"  >
            <Button >
              Button
            </Button>
          </NavLink>
        </CardBody>
      </Card>
    </>
  )
}
export default Cards;
