import { useSelector,useDispatch } from "react-redux";
import ProductComponent from './ProductComponent';
import axios from 'axios';
import { useEffect } from "react";
import { allProducts } from '../redux/actions/Product-actions'
import NavbarComponent from "./NavbarComponent";

const Allproducts = ()=>{
    const products = useSelector((state) => state);
    
    const dispatch = useDispatch()

    const getAllProducts = async () => {
      const result = await axios
            .get('https://fakestoreapi.com/products')
            .catch((error) => {
                console.log(error);
            })
       console.log(result.data);
       dispatch(allProducts(result.data));     

    }

    console.log(products);
    useEffect(() => {
        getAllProducts();
    }, []);

    return(
        <div>
            <ProductComponent/>
        </div>
    )
}

export default Allproducts;