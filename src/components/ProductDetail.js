import { useParams } from "react-router-dom";
import axios from 'axios';
import { useEffect } from "react";
import { selectedProduct, removeProducts } from '../redux/actions/Product-actions';
import { useSelector,useDispatch } from "react-redux";
import { Grid, Image, Header, Button     } from 'semantic-ui-react';
import { Card, Icon } from 'semantic-ui-react';
import '../Styles/selectedProduct.css';

const ProductDetail =()=>{
    const product = useSelector((state) => state.selectedProductReducer);
    const {image, title, price, category, description} = product;
    const { productId } = useParams();
    const dispatch = useDispatch()

    const getProduct = async () => {
        const result = await axios
              .get(`https://fakestoreapi.com/products/${productId}`)
              .catch((error) => {
                  console.log(error);
              })
         dispatch(selectedProduct(result.data));     
  
    }
    useEffect(() => {
        if(productId && productId !== "") {
            getProduct()
        }
        return()=>{
         dispatch(removeProducts());     
        }
    }, [productId]);

    return(
        <div className="selected_product">
                {Object.keys(product).length === 0 ? (
                    <div>Loading Product...</div>
                ):(
                    <Grid>
                    <Grid.Row>
                        <Grid.Column width={5}>
                            <Card fluid={true}>
                                <Image src={image} wrapped ui={false} />
                            </Card>
                        </Grid.Column>  
                        <Grid.Column width={10} className='product_cart'>
                            <Card fluid={true}>
                                <Card.Header>
                                  <Header as='h1'>{title}</Header>
                                </Card.Header>
                                <Card.Description>
                                  <Icon name='tags' color="blue" size="large">
                                   {price}$
                                  </Icon>
                                  <Header as='h2'></Header>  
                                  <Header as='h3'>{category}</Header>
                                  <Header as='h4'>{description}</Header>
                                  <Button primary>Add To Cart</Button>
                                </Card.Description>
                            </Card>
                        </Grid.Column>                
                    </Grid.Row>
                    
                </Grid>

                )

            }
          
        </div>
    )
}

export default ProductDetail;