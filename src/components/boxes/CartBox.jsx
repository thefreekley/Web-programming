import React from 'react';
import "../../accets/css/components-style/cart-box.css"

import Button from "../Button";
import {useDispatch, useSelector} from "react-redux";
import {addItem, removeItem} from "../../redux/actions/cart";
function CartBox({id,func}) {

    const onAddItem = (value) =>{
        func(cartItems)
        dispatch(addItem(value))
        setStateCounter(cartItem.count)
    }
    const onRemoveItem = (value) =>{
        func(cartItems)
        dispatch(removeItem(value))
        setStateCounter(cartItem.count)
    }

    const dispatch = useDispatch();
    const cartItems = useSelector(({cart}) => cart.cartItems);
    const cartItem = cartItems.find(elem => elem.id == id);
    const [stateCounter,setStateCounter] = React.useState(cartItem.count)





    return (

        <div className="cart-box">

            <div className="cart-box-wrapper-line"></div>

            <img alt="" className="cart-box__image" src={cartItem.object.img}/>

                <div className="cart-box__info">
                    <div className="cart-box__info_text">
                        <p className="cart-box__info_name"> {cartItem.object.name}</p>
                        <p className="cart-box-price"> {cartItem.object.price*cartItem.count} UAN</p>
                    </div>
                    <div>

                        <div className="cart-box-buttons">
                            <Button type={"button"} align={"center"} value={"–"} width={"100px"}
                                    onClick={() => onRemoveItem(cartItem.object)}
                            />
                                <p className="cart-total-sum">{stateCounter}</p>
                            <Button type={"button"} align={"center"} value={"+"} width={"100px"}
                                    onClick={() => onAddItem(cartItem.object)}/>

                        </div>
                        <div className="cart-box-date">

                        </div>
                    </div>
                </div>
        </div>
    );

}

export default CartBox;