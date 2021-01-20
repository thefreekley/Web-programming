import React,{useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import logo from '../accets/img/logo.png'
import triangle from '../accets/img/Shape.svg'
import '../accets/css/components-style/header.css';
import cartImg from '../accets/img/cart.png'
import {useDispatch, useSelector} from "react-redux";
import {changeCategory} from "../redux/actions/category";

function Header() {

    const priceAndOverall = useSelector(({cart}) => cart.priceCountOverall);

    const dispatch = useDispatch();
    const categoryIndex = useSelector(({category}) => category.indexCategory);



    const [itemVal, setcategoryIndex] = React.useState(0);

    const onSelectItem = (index) => {
        setcategoryIndex(index);
        dispatch(changeCategory(index))
    }



    useEffect(() => {
        if(window.location.pathname == ('/'))onSelectItem(1)
        else if(~window.location.pathname.indexOf('/catalog'))onSelectItem(2)
        else if(~window.location.pathname.indexOf('/cart'))onSelectItem(3)

    },[]);
    return (
        <header className="header">
            <nav className="header__nav">
                <a className="header__title transition" href="/">
                    WORLD OF PRINTERS
                    <img alt="" className="logo" src={logo}/>
                </a>
                <div className="hat__button">
                    <a className="hat__button_title" href="!#">Watch the movie</a>
                    <div className="hat__button_img">
                        <img alt="Watch the movie" src={triangle} style={{padding: "12px"}}/>
                    </div>
                </div>

                <ul className="category">
                    <Link to="/" className="navbar-logo">
                        <li onClick={() => onSelectItem(1)}
                            className={categoryIndex === 1 ? 'active category-home transition' : 'category-home transition'}> HOME
                        </li>
                    </Link>
                    <Link to="/catalog" className="navbar-logo">
                        <li onClick={() => onSelectItem(2)}
                            className={categoryIndex === 2 ? 'active category-home transition' : 'category-home transition'}>CATALOG
                        </li>
                    </Link>
                    <Link to="/cart" className="navbar-logo">
                        <li onClick={() => onSelectItem(3)}
                            className={categoryIndex === 3 ? 'active category-home transition' : 'category-home transition'}>
                            CART
                        </li>
                    </Link>
                    <span className="header-price-count">{priceAndOverall.price} UAN</span>
                </ul>
            </nav>





        </header>
    );
}

export default Header;
