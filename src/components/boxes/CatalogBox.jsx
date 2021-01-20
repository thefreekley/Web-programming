import React from 'react';
import Button from "../Button";
import "../../accets/css/components-style/catalog-box.css"
import LoaderCatalogBox from "../loading-blocks/LoaderCatalogBox";

function CatalogBox({obj,isLoaded}) {


    return (
        <div className="catalog-box">
            <img alt="" className="catalog-box__image" src={obj.img}/>

                <div className="catalog-box__info">
                    <div className="catalog-box__info_text">
                        <p className="catalog-box-info__name">{obj.name}</p>
                        <p className="catalog-box-info__description">{obj.description} </p>
                    </div>
                    <div>
                        <div className="catalog-box-buttons">
                            {/*<Button type={"button"} align={"center"} value={"BUY"} onClick={() => dispatchAddItem(obj)}/>*/}
                            <Button type={"button"} align={"center"}
                                    value={"MORE INFO"} link={"/item"}
                                    propsItem={obj}  width={"280px"}/>
                        </div>
                        <div className="catalog-box-date">
                            {obj.price} UAN
                        </div>
                    </div>
                </div>

        </div>

);
}

export default CatalogBox;