import React from 'react'
import { useSelector,useDispatch } from 'react-redux'


import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {removeFromCart} from './store/cartSlice'
const Cart = () => {
    const productCarts =useSelector((state) =>state.cart)

    const totalPrice = productCarts.reduce((total,item)=>total + item.price,0)
   // console.log(productCarts)
    const dispatch = useDispatch()
   const removeToCart =(id)=>{
       dispatch(removeFromCart(id))
    }
  return (
   <>
   <h3>Shopping Cart</h3>
    <Container fluid>
        <Row>
          {productCarts.length> 0 ?productCarts.map((product) => (
            <Col md={12}>
              <Card style={{ paddingTop: "10px", margin: "10px" }}>
                <div className="text-center">
                  <Card.Img
                    variant="top"
                    src={product.image}
                    style={{ height: "100px", width: "130px" }}
                  />
                </div>

                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>INR:{product.price}</Card.Text>
                </Card.Body>
                <Card.Footer style={{ background: "white" }}>
                  <Button variant="danger" onClick={()=>removeToCart(product.id)}>Remove item</Button>
                </Card.Footer>
              </Card>
            </Col>
          )):
          <h6>No items in Shopping cart, Please add Product in Cart !!!!!</h6>
        
        }
        </Row>
      </Container>
      {productCarts.length> 0 ?<h5>Total Price :${totalPrice}</h5>:''}
   </>
  )
}

export default Cart