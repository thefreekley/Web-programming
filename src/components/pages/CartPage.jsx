import React from 'react';
import Hat from "../Hat";
import hat from "../../accets/img/shapka4.jpg";
import "../../accets/css/pages-style/cart-page.css";
import CartBox from "../boxes/CartBox";
import {useDispatch, useSelector} from "react-redux";
import Button from "../Button";
import {changeCategory} from "../../redux/actions/category";


function CartPage(props) {

    const dispatch = useDispatch();

    const priceAndOverall = useSelector(({cart}) => cart.priceCountOverall);

    var cartItems = useSelector(({cart}) => cart.cartItems);
    const [listCartItems, setCartListItems] = React.useState(cartItems);

    const onGoToBack = () =>{
        dispatch(changeCategory(2))
    }


    const onCartListItems = (value) => {
        setCartListItems(value.filter(elem => elem.count>0 ))
        console.log(listCartItems)
    }

    return (
        <div className="wrapper">
            <div className="content">
                <Hat sendUrl={hat}/>
                <div className="cart-boxes-wrapper">
                    <p className="cart-news">SOPPING CART:</p>
                    {
                        listCartItems && listCartItems.map(obj =>
                            <CartBox id={obj.id} key={`${obj.id} ${obj.name}`} func={(value)=>onCartListItems(value)}/>
                        )


                    }


                </div>
                <div className="cart-buttons-wrapper">
                <div className="cart-buttons">

                    <Button value={"GO BACK ⯇"} align={"center"} width={"400px"} onClick={() => onGoToBack()} link={"/catalog"}/>
                    <Button value={"CONTINUE ⯈"} align={"center"} width={"400px"}   link={ priceAndOverall.count ? "/checkout" : null} />
                </div>
                </div>
            </div>
        </div>

    );
}

export default CartPage;