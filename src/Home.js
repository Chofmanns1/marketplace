import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className='home'>
            <div className='home__container'>
                <img className='home__image'
                    src='https://img.freepik.com/free-photo/grunge-paint-background_1409-1337.jpg?w=2000'
                    alt=''
                />
                <div className='home__row'>
                    <Product
                        title='Juan'
                        price={40000}
                        image='https://img.freepik.com/vector-premium/barco-dibujos-animados-agua_49499-111.jpg?w=2000'
                        rating={5} />
                    <Product />
                </div>

                <div className='home__row'>
                    <Product />
                    <Product />
                    <Product />
                </div>

                <div className='home__row'>
                    <Product />
                </div>
            </div>
        </div>
    )
}

export default Home