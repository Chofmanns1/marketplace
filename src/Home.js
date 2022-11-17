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
                        id={1}
                        title='Barco 1'
                        price={400000}
                        image='https://upload.wikimedia.org/wikipedia/commons/4/46/Bote_chilote.jpg'
                        rating={1}
                    />

                    <Product
                        id={2}
                        title='Barco 2'
                        price={4000000}
                        image='https://imagenes.elpais.com/resizer/Tsyx6xIkJLz0t1cjUgcaFQRmSsA=/1960x1103/cloudfront-eu-central-1.images.arcpublishing.com/prisa/K23SJLZTNFH2XNGXCGQKOJ4ULM.JPG'
                        rating={4}
                    />
                </div>

                <div className='home__row'>
                    <Product
                        id={3}
                        title='Barco 3'
                        price={234532}
                        image='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/RMS_Queen_Elizabeth_2_in_Trondheim_2008.jpg/1200px-RMS_Queen_Elizabeth_2_in_Trondheim_2008.jpg'
                        rating={2}
                    />
                    <Product
                        id={4}
                        title='Barco 4'
                        price={123452}
                        image='https://d7lju56vlbdri.cloudfront.net/var/ezwebin_site/storage/images/_aliases/img_1col/noticias/un-barco-inteligente-viajara-sin-tripulacion-entre-reino-unido-y-ee-uu/8179445-1-esl-MX/Un-barco-inteligente-viajara-sin-tripulacion-entre-Reino-Unido-y-EE-UU.jpg'
                        rating={3}
                    />
                    <Product
                        id={5}
                        title='Barco 5'
                        price={4533354}
                        image='https://www.hibridosyelectricos.com/media/hibridos/images/2018/07/05/2018070513124444840.jpg'
                        rating={4}
                    />
                </div>

                <div className='home__row'>
                    <Product
                        id={6}
                        title='Barco 6'
                        price={1231244}
                        image='https://www.ro-des.com/wp-content/uploads/2022/05/embarcacion-e1653639457637-600x417.png'
                        rating={5} />
                </div>
            </div>
        </div>
    )
}

export default Home