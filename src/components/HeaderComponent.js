
import { Header } from 'semantic-ui-react';
import '../Styles/Header.css';
import {Link} from "react-router-dom";

const HeaderComponent =()=>{
    return(
        <div className='header_container'>
            <div className = 'Heading_Style'>
            <Link exact to="/">
                <Header as='h1' textAlign='left'>
                        ReduxEcomm
                </Header>
             </Link>
            </div>
        </div>
    )
}

export default HeaderComponent;