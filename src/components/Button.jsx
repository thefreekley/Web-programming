import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import "../accets/css/components-style/button.css"
import Header from "./Header";
import HomePage from "./pages/HomePage";
import CatalogPage from "./pages/CatalogPage";
import CartPage from "./pages/CartPage";
const SIZES = ['button--standart', 'button--large'];
function Button(props) {

    const checkSize = SIZES.includes(props.size) ? props.size : SIZES[0]

    const button = () =>{
        return(
            <input
                style={{textAlign:`${props.align}`,width:`${props.width}`}}
                value={props.value}
                className={`${checkSize} button`}
                onClick={props.onClick}
                type={props.type}

            />
        );
    }


    if (props.link != null) {

        return (
            <Link to={{pathname:props.link,
                propsSearch:props.propsItem}}>
                {button()}
            </Link>

        );
    } else {
        return (
            button()
        );
    }
}

export default Button;