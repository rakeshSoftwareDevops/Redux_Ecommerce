import { useSelector } from "react-redux";
import { Grid, Image } from 'semantic-ui-react';
import { Card, Icon } from 'semantic-ui-react';
import '../Styles/ProductComponent.css';
import {Link} from "react-router-dom";

const ProductComponent =()=>{
    const products = useSelector((state) => state.productReducer.productList);
    const allMarkUp = products.map((prod) => {
        return(
                <Grid.Column key={prod.id} >
                    <Card>
                        <Image src={prod.image} wrapped ui={false} />
                        <Card.Content>
                        <Card.Header>
                            <p>{prod.price}$</p>
                            <p>{prod.title} </p>
                            <p>{prod.category} </p>
                            <Link  id="RouterNavLink" to={`/products/${prod.id}`}>
                                <a className="view_Product">
                                    <Icon name='eye' />
                                    View Product
                                </a>
                            </Link>
                        </Card.Header>
                        </Card.Content>
                        <Card.Content extra>
                          
                        </Card.Content>
                    </Card>
                </Grid.Column>
            
        )
    });

    return(
        <div className="Product-Component">
            <Grid container columns={4} divided  width={2800}>
                <Grid.Row >
                {allMarkUp}
                </Grid.Row>
            </Grid>
        </div>

    )
}

export default ProductComponent;