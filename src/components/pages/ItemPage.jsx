import React from 'react';
import Hat from "../Hat";
import hat from "../../accets/img/shapka3.jpg";
import Button from "../Button";
import "../../accets/css/pages-style/item-page.css"
import {useDispatch, useSelector} from "react-redux";
import {addItem} from "../../redux/actions/cart";
import Input from "../Input";
import Select from "../Select";
import dance from "../../accets/img/dance.gif"
import {changeCategory} from "../../redux/actions/category";


function ItemPage(props) {
    const [stateAmountOfPaint,setStateAmountOfPaint] = React.useState(-1);
    const [stateBoxType,setStateBoxType] = React.useState('BOX TYPE');

    const onStateAmountOfPaint = (value) => { setStateAmountOfPaint(value)}
    const onSetStateBoxType = (value) => { setStateBoxType(value)}



    const dispatch = useDispatch();


    const dispatchAddItem = (value,AmountOfPaint,BoxType) =>{

        if(stateAmountOfPaint==-1){
            alert("Enter the amount of paint in the field please!")
            return
        }
        else if(stateBoxType == 'BOX TYPE'){
            alert("Select the type of box please!")
            return
        }
        else{
            dispatch(addItem(value,AmountOfPaint,BoxType))
        }


    }
    if (!props.location.propsSearch){
        return (
            <div className="wrapper">
                <div className="content">
                    <div className="item-page-wrapper">
                    <Hat sendUrl={hat}/>
                    <img alt="" className="catalog-box__image" src={dance}/>
                    <p>RETURN TO CATALOG</p>
                    </div>
                </div>

            </div>
        );
    }
    else{
    return (
        <div className="wrapper">
            <div className="content">
                <Hat sendUrl={hat}/>


                <div className="item-box">
                    <div className="item-boxe-wrapper-line"></div>
                    <img alt="" className="item-box__image" src={props.location.propsSearch.img}/>

                    <div className="item-box__info">
                        <div className="item-box__info_text">
                            <p className="item-box-info__name">{props.location.propsSearch.name}</p>
                            <p className="item-box-info__description">{props.location.propsSearch.description} </p>
                        </div>
                        <div className="item-bottom">
                            <div className="item-info">
                                <p className="item-price">PRICE: {props.location.propsSearch.price} UAN</p>
                                <p className="item-type">TYPE: {props.location.propsSearch.type}</p>
                            </div>
                            <div className="item-features">
                                <Input type="number"  placeholder="AMOUNT OF PAINT" func={(value)=>onStateAmountOfPaint(value)}/>

                                <Select data={["ORIGINAL", "SAFE", "CHEAP"]} width={"235px"}
                                        value={"BOX TYPE:"}  id={"catalog-page-type"}
                                        func={(value)=>onSetStateBoxType(value)}
                                />

                                <Button type={"button"} align={"start"} value={"ADD TO CART ⯈"}
                                        onClick={() => dispatchAddItem(props.location.propsSearch,stateAmountOfPaint,stateBoxType)}

                                />
                                <Button type={"button"} align={"start"} value={" GO BACK ⯇"} link={"/catalog"}   width={"235px"}
                                />

                            </div>

                            <p className="item-box-date">
                                {props.location.propsSearch.data}
                            </p>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
    }
}

export default ItemPage;