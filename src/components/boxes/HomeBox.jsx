import React from 'react';
import "../../accets/css/components-style/home-box.css"
import Button from "../Button";
import axios from "axios";
import {useDispatch} from "react-redux";
import {addItem} from "../../redux/actions/cart";
function HomeBox({obj}) {
    const dispatch = useDispatch();
    const dispatchAddItem = (value) =>{dispatch(addItem(value))}

    return (
        <div className="home-box">
            <div className="home-boxe-wrapper-line"></div>
            <img alt="" className="home-box__image" src={obj.img}/>

                <div className="home-box__info">
                    <div className="home-box__info_text">
                        <p className="home-box-info__name">{obj.name}</p>
                        <p className="home-box-info__description">{obj.description} </p>
                    </div>
                    <div className="home-box-bottom">
                        <div className="home-box-buttons">
                            {/*<Button type={"button"} align={"center"} value={"BUY"} onClick={() => dispatchAddItem(obj)}/>*/}
                            {/*<Button type={"button"} align={"center"} value={"MORE INFO"} link={"/item"} propsItem={obj} />*/}
                        </div>
                        <div className="home-box-date">
                            {obj.date}
                        </div>
                    </div>
                </div>
        </div>
);
}

export default HomeBox;