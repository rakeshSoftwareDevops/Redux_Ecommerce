import { useSelector } from "react-redux";
import { Grid, Image } from 'semantic-ui-react';
import { Card, Icon } from 'semantic-ui-react';
import '../Styles/ProductComponent.css';
import {Link} from "react-router-dom";
import NavbarComponent from "./NavbarComponent";
import Carousel from 'react-bootstrap/Carousel';

const ProductComponent =()=>{
    const products = useSelector((state) => state.productReducer.productList);
    const allMarkUp = products.map((prod) => {
        return(
                <Grid.Column key={prod.id} >
                    <Card>
                        <Image src={prod.image} size='small' centered='true'/>
                        <Card.Content>
                        <Card.Header>
                            <p>{prod.price}$</p>
                            <p>{prod.title} </p>
                            <p>{prod.category} </p>
                            <Link className="view_Product" id="RouterNavLink" to={`/products/${prod.id}`}>
                                    <Icon name='eye' />
                                    View Product
                            </Link>
                        </Card.Header>
                        </Card.Content>
                        <Card.Content extra>
                          
                        </Card.Content>
                    </Card>
                </Grid.Column>
            
        )
    });
    const carouselImage =  products.map((prod) => {
        return(
            <Carousel.Item key={prod.id}>
                <img
                className="d-block w-100"
                style ={{height:500}}
                src={prod.image}
                alt="First slide"
                />
                <Carousel.Caption>
                    <h3>{prod.title}</h3>
                    <p>{prod.category}</p>
                </Carousel.Caption>
            </Carousel.Item>
        )
    });
    return(
            <div className="Product-Component">
                {carouselImage}
                <Grid container doubling columns={4} divided  width={2800}>
                    <Grid.Row >
                    {allMarkUp}
                    </Grid.Row>
                </Grid>
            </div>
    )
}

export default ProductComponent;