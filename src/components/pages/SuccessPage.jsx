import React from 'react';
import okey from '../../accets/img/success.gif'
import '../../accets/css/pages-style/success-page.css'
import Hat from "../Hat";
import hat from "../../accets/img/hat.jpg";
import Button from "../Button";
import {changeCategory} from "../../redux/actions/category";
import {useDispatch} from "react-redux";



function SuccessPage(props) {

    const dispatch = useDispatch();

    const onGoToBack = () =>{
        dispatch(changeCategory(2))
    }

    return (
        <div className="wrapper">
            <div className="content">
                <Hat sendUrl={hat}/>
                <div className="success-container">
                    <img src={okey} alt="okey" className="seccess-img"/>

                    <p>
                        SUCCESS! <br/>
                        Your order was sent to processing! <br/>
                        Check your email box for further information
                    </p>
                    <Button value={"GO BACK ⯇"} align={"center"} width={"400px"} onClick={() => onGoToBack()} link={"/catalog"}/>
                </div>
            </div>
        </div>
    );
}

export default SuccessPage;