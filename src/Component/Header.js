import './med.css'
import React, { Fragment } from 'react'; 
import CartBtn from './Cart/CartBtn';

const Header = props =>{
    return (
        <Fragment>
            <header className='header'>
                <h1>Med Info</h1>
                <CartBtn onClick={props.onShowCart}/>
            </header>
        </Fragment>
    );
}

export default Header;