import React from 'react';
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-fe.ssl-images-amazon.com/images/G/35/kindle/journeys/ZjBiMDcxY2Qt/ZjBiMDcxY2Qt-MjM2M2JkNWIt-w1500._CB645256551_.jpg" alt="" />

                <div className="home__row">
                    <Product
                        id="MZ3XtimT3tERJXnvWhab"
                        title='The Lean Startup'
                        price={29.99}
                        image="https://m.media-amazon.com/images/I/4151dD06RqL._AC_SY230_.jpg"
                        rating={3}
                    />
                    <Product
                        id="1002"
                        title='The Lean Startup'
                        price={29.99}
                        image="https://m.media-amazon.com/images/I/4151dD06RqL._AC_SY230_.jpg"
                        rating={3}
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="1001"
                        title='The Lean Startup'
                        price={29.99}
                        image="https://m.media-amazon.com/images/I/4151dD06RqL._AC_SY230_.jpg"
                        rating={3}
                    />
                    <Product
                        id="1002"
                        title='The Lean Startup'
                        price={29.99}
                        image="https://m.media-amazon.com/images/I/4151dD06RqL._AC_SY230_.jpg"
                        rating={3}
                    />
                    <Product
                        id="1001"
                        title='The Lean Startup'
                        price={29.99}
                        image="https://m.media-amazon.com/images/I/4151dD06RqL._AC_SY230_.jpg"
                        rating={3}
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="1002"
                        title='The Lean Startup'
                        price={29.99}
                        image="https://m.media-amazon.com/images/I/4151dD06RqL._AC_SY230_.jpg"
                        rating={3}
                    />
                </div>


            </div>
        </div>
    )
}

export default Home
