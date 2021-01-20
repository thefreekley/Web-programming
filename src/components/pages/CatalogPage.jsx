import React from 'react';
import Hat from "../Hat";
import hat from "../../accets/img/shapka2.jpg";
import "../../accets/css/pages-style/catalog-page.css";
import CatalogBox from "../boxes/CatalogBox";
import Button from "../Button";
import Select from "../Select";
import Input from "../Input";
import {useDispatch, useSelector} from "react-redux";
import {
    setFilterMaxPrice,
    setFilterMinPrice,
    setFilterProducer,
    setFilterSearch,
    setFilterType
} from "../../redux/actions/filters";
import LoaderCatalogBox from "../loading-blocks/LoaderCatalogBox";
import {fetchPrinters} from "../../redux/actions/printers";
import dance from "../../accets/img/dance.gif";


function CatalogPage() {

    const dispatch = useDispatch();



    const items = useSelector(({printers}) => printers.items);

    const isLoaded = useSelector(({printers}) => printers.isLoaded);

    const searchFilter = useSelector(({filters}) => filters.search);
    const typeFilter = useSelector(({filters}) => filters.typePrinter);
    const producerFilter = useSelector(({filters}) => filters.producer);
    const minFilter = useSelector(({filters}) => filters.min);
    const maxFilter = useSelector(({filters}) => filters.max);


    const dispatchType = (value) =>{ dispatch(setFilterType(value));}
    const dispatchProducer = (value) =>{ dispatch(setFilterProducer(value)) }
    const dispatchMinPrice = (value) => {dispatch(setFilterMinPrice(value))}
    const dispatchMaxPrice = (value) => {dispatch(setFilterMaxPrice(value))}
    const dispatchSearch = (value) => {dispatch(setFilterSearch(value))}


    React.useEffect(() => {
        dispatch(fetchPrinters());
    },[]);


    function clearFilters() {
        dispatchMaxPrice('');
        dispatchMinPrice('');
        dispatchSearch('');
        dispatchType('TYPE');
        dispatchProducer('PRODUCER');
        dispatch(fetchPrinters());
    }






    const onListItems = () => {
        var getFilterItem = ''
        if (typeFilter != "TYPE") getFilterItem += `type=${typeFilter}&`;
        if (minFilter > 0) getFilterItem += `price_gte=${minFilter}&`;
        if (maxFilter > 0) getFilterItem += `price_lte=${maxFilter}&`;
        if (producerFilter!="PRODUCER")getFilterItem += `name_like=${producerFilter}&`;
        if (searchFilter!="")getFilterItem += `name_like=${searchFilter}&`;

        dispatch(fetchPrinters(getFilterItem));


    }

        // var filteredList = items.filter(function (item) {
        //     if (item.name.toLowerCase().search(searchFilter.toLowerCase()) !== -1) {
        //         if (producerFilter=="PRODUCER" || item.name.toLowerCase().search(producerFilter.toLowerCase()) !== -1) {
        //                         return item;
        //         }}});
        //
        // setListItems(filteredList);




    function visualBox() {
            return (
                isLoaded ? items.map(obj =>
                        <CatalogBox
                            key={`${obj.id} ${obj.name}`}
                            obj={obj}
                        />)
                    :
                     Array(5).fill(<LoaderCatalogBox />)
            );
        }

    return (
        <div className="wrapper">
            <div className="content">
                <Hat sendUrl={hat}/>
                <div className="catalog-filters">


                    <div className="catalog-filters-left">


                        <Select data={["TYPE", "MONOCHROMATIC", "MULTICOLORED"]} id={"catalog-page-type"}
                                func={(value) => dispatchType(value)} value={typeFilter}
                        />
                        <Select
                            data={["PRODUCER", "Canon", "Epson", "Acer", "Agfa", "Artec", "Brother", "Genius", "Guillemot International"]}
                            id={"catalog-page-producer"} value={producerFilter}
                            func={(value) => dispatchProducer(value)}
                        />
                        <span className="price-catalog">PRICE:</span>
                        <Input placeholder={"min"} type={"number"} width={"80px"} id={"catalog-page-min"}
                               func={(value) => dispatchMinPrice(Number(value))} value={minFilter}/>
                        <Input placeholder={"max"} type={"number"} width={"80px"} id={"catalog-page-max"}
                               func={(value) => dispatchMaxPrice(Number(value))} value={maxFilter}/>

                    </div>

                    <div className="catalog-filters-right">
                        <Input placeholder={"SEARCH"} id={"catalog-page-search"}
                               func={(value) => dispatchSearch(value)}
                               value={searchFilter}
                        />
                        <Button type={"button"} align={"center"} value={"сlear"} onClick={() => clearFilters()}/>
                        <Button type={"button"} align={"center"} value={"APPLY"} onClick={() => onListItems()}/>
                    </div>
                </div>

                <div className="catalog-boxes-wrapper">
                    {
                       visualBox()
                    }
                </div>
            </div>
        </div>
    );

}

export default CatalogPage;




function CatalogPage() {
    const dispatch = useDispatch();

    const items = useSelector(({printers}) => printers.items);
    const isLoaded = useSelector(({printers}) => printers.isLoaded);

    React.useEffect(() => {
        dispatch(fetchPrinters());
    },[]);


    const searchFilter = useSelector(({filters}) => filters.search);
    const typeFilter = useSelector(({filters}) => filters.typePrinter);
    const producerFilter = useSelector(({filters}) => filters.producer);
    const minFilter = useSelector(({filters}) => filters.min);
    const maxFilter = useSelector(({filters}) => filters.max);



    const dispatchType = (value) =>{ dispatch(setFilterType(value));}
    const dispatchProducer = (value) =>{ dispatch(setFilterProducer(value)) }
    const dispatchMinPrice = (value) => {dispatch(setFilterMinPrice(value))}
    const dispatchMaxPrice = (value) => {dispatch(setFilterMaxPrice(value))}
    const dispatchSearch = (value) => {dispatch(setFilterSearch(value))}


    function clearFilters() {
        dispatchMaxPrice('');
        dispatchMinPrice('');
        dispatchSearch('');
        dispatchType('TYPE');
        dispatchProducer('PRODUCER');
        setListItems(items);
    }

    const [listItems, setListItems] = React.useState(items);

    React.useEffect(() => {
        listItems && onListItems()
    }, [items]);


    const onListItems = () => {

        var filteredList = items.filter(function (item) {
            if (item.name.toLowerCase().search(searchFilter.toLowerCase()) !== -1) {
                if (producerFilter=="PRODUCER" || item.name.toLowerCase().search(producerFilter.toLowerCase()) !== -1) {
                    if (typeFilter == "TYPE"  || item.type == typeFilter ) {
                        if (!(minFilter > 0) || item.price > minFilter) {
                            if (!(maxFilter > 0) || item.price < maxFilter) {
                                return item;
                            }
                        }
                    }
                }
            }


        });

        setListItems(filteredList);


    }

    function visualBox() {

        if(listItems.length==0){
            return(
                <div className="catalog-page-wrapper">
                    <img alt="" className="catalog-box__image" src={dance}/>
                    <p>NOTHING WAS FOUND</p>
                </div>
            );
        }
        else{
            return (
                listItems && listItems.map(obj =>
                    <CatalogBox
                        key={`${obj.id} ${obj.name}`}
                        obj={obj}
                    />)
            );
        }
    }
    return (
        <div className="wrapper">
            <div className="content">
                <Hat sendUrl={hat}/>
                <div className="catalog-filters">


                    <div className="catalog-filters-left">


                        <Select data={["TYPE", "MONOCHROMATIC", "MULTICOLORED"]} id={"catalog-page-type"}
                                func={(value) => dispatchType(value)} value={typeFilter}
                        />
                        <Select
                            data={["PRODUCER", "Canon", "Epson", "Acer", "Agfa", "Artec", "Brother", "Genius", "Guillemot International"]}
                            id={"catalog-page-producer"} value={producerFilter}
                            func={(value) => dispatchProducer(value)}
                        />
                        <span className="price-catalog">PRICE:</span>
                        <Input placeholder={"min"} type={"number"} width={"80px"} id={"catalog-page-min"}
                               func={(value) => dispatchMinPrice(Number(value))} value={minFilter}/>
                        <Input placeholder={"max"} type={"number"} width={"80px"} id={"catalog-page-max"}
                               func={(value) => dispatchMaxPrice(Number(value))} value={maxFilter}/>

                    </div>

                    <div className="catalog-filters-right">
                        <Input placeholder={"SEARCH"} id={"catalog-page-search"}
                               func={(value) => dispatchSearch(value)}
                               value={searchFilter}
                        />
                        <Button type={"button"} align={"center"} value={"сlear"} onClick={() => clearFilters()}/>
                        <Button type={"button"} align={"center"} value={"APPLY"} onClick={() => onListItems()}/>
                    </div>
                </div>

                <div className="catalog-boxes-wrapper">
                    {
                        listItems && visualBox()
                    }
                </div>
            </div>
        </div>
    );

}

export default CatalogPage;