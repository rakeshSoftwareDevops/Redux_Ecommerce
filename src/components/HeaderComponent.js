
import { Header } from 'semantic-ui-react';
import '../Styles/Header.css';
import {Link} from "react-router-dom";

const HeaderComponent =()=>{
    return(
        <div className='header_container'>
            <div className = 'Heading_Style'>
            <Link exact to="/">
                <Header as='h1' textAlign='left'>
                        AwDeals
                </Header>
             </Link>
            </div>
            <p className='sub-heading'>Awesome Deals for you</p>
        </div>
    )
}

export default HeaderComponent;