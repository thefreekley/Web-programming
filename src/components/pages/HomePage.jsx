import React from 'react';
import Hat from "../Hat";
import hat from "../../accets/img/hat.jpg"
import musicIMG from "../../accets/img/music.svg"
import steamIMG from "../../accets/img/steam.svg"
import twitchIMG from "../../accets/img/twitch.svg"
import "../../accets/css/pages-style/home-page.css"
import HomeBox from "../boxes/HomeBox";
import Button from "../Button";
import {useDispatch, useSelector} from "react-redux";
import {fetchPrinters} from "../../redux/actions/printers";
import loading from "../../accets/img/loading.gif";

function HomePage() {

    const dispatch = useDispatch();

    const items = useSelector(({printers}) => printers.items);
    const isLoaded = useSelector(({printers}) => printers.isLoaded);


    React.useEffect(() => {
        if(!items.length)dispatch(fetchPrinters());
    },[]);

    const [showMore, setShowMore] = React.useState(false)

    const onShowMore = (flag) => {
        setShowMore(flag);
    }

    if(!isLoaded) {
        return (
            <div className="wrapper">
                <img src={loading} alt="loading-img" className="loading-img"/>
            </div>
        );
    }
    else {
    return (
        <div className="wrapper">
            <div className="content">
                <Hat sendUrl={hat}>

                    <div className="hat__wrapper">
                        <a className="social-network" href="https://www.instagram.com/?hl=uk"><img alt="mus"
                                                                                                   src={musicIMG}/> Listen
                            us in Apple music</a>
                        <a className="social-network" href="https://www.spotify.com/ua/"><img alt="steam"
                                                                                              src={steamIMG}/>Play
                            with us in Steam</a>
                        <a className="social-network" href="https://mail.google.com/mail/u/0/#inbox"><img alt="twitch"
                                                                                                          src={twitchIMG}/> Watch
                            us in Twitch</a>
                    </div>

                </Hat>


                <div className="home-boxes-wrapper">
                    <p className="home-news">NOVELTY:</p>
                    {
                        items && items.slice(0, showMore ? 10 : 2).map(obj =>
                            <HomeBox
                                key={`${obj.id} ${obj.name}`}
                                obj={obj}
                            />)
                    }


                </div>
                <div className="home-page-button">
                    <Button type={"button"} onClick={() => onShowMore(!showMore)} align={"center"}
                            size={'button--large'}
                            value={"VIEW MORE"}/>
                </div>
            </div>
        </div>
    );
    }
}

export default HomePage;
