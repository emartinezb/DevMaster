import React, { Fragment, useEffect } from 'react'
import MetaData from './layout/MetaData';
import {useDispatch} from 'react-redux';
import { getProducts } from "../actions/productActions";

export const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch])
        
    return (
        <Fragment>
            <MetaData title='Lo mejor para los más pequeños de la casa'></MetaData>
            <h1 id='encabezado_productos'>Últimos Productos</h1>

            <section id='productos' className='container mt-5'>
                <div className='row'>

                    {/*Producto 1*/}
                    <div className='col-sm-12 col-md-6 col-lg-3 my-'>
                        <div className='card p-3 rounded'>
                            <img className='card-img-top mx-auto' src='./images/masa_play_doh_tubo_10_latas.png' alt='Masa_play_doh_tubo_10_latas'></img>
                            <div className='card-body d-flex flex-column'>
                                <h5 id='titulo_producto'><a href='http://localhost:3000/'>Masa Moldeable Play-Doh Tubo de Fiesta X10 latas 280g (10 Oz)</a></h5>
                                <div className='rating mt-auto'>
                                    <div className='rating-outer'>
                                        <div className='rating-inner'></div>
                                    </div>
                                    <span id='No_de_opiniones'>15 reviews</span>
                                </div>
                                <p className='card-text'>$19.900</p><a href='http://localhost:3000/' id='view_btn' className='btn btn-block'>Ver detalles</a>
                            </div>
                        </div>
                    </div>

                    {/*Producto 2*/}
                    <div className='col-sm-12 col-md-6 col-lg-3 my-'>
                        <div className='card p-3 rounded'>
                            <img className='card-img-top mx-auto' src='./images/set_masa_kitchen_creations.png' alt='set_masa_kitchen_creations'></img>
                            <div className='card-body d-flex flex-column'>
                                <h5 id='titulo_producto'><a href='http://localhost:3000/'>Set de Masa Moldeable Play-Doh Kitchen Creations Batidora de Postres</a></h5>
                                <div className='rating mt-auto'>
                                    <div className='rating-outer'>
                                        <div className='rating-inner'></div>
                                    </div>
                                    <span id='No_de_opiniones'>28 reviews</span>
                                </div>
                                <p className='card-text'>$99.900</p><a href='http://localhost:3000/' id='view_btn' className='btn btn-block'>Ver detalles</a>
                            </div>
                        </div>
                    </div>

                    {/*Producto 3*/}                    
                    <div className='col-sm-12 col-md-6 col-lg-3 my-'>
                        <div className='card p-3 rounded'>
                            <img className='card-img-top mx-auto' src='./images/minecraft_set_capitan_ravenger.png' alt='minecraft_set_capitan_ravenger'></img>
                            <div className='card-body d-flex flex-column'>
                                <h5 id='titulo_producto'><a href='http://localhost:3000/'>Set Capitan Raid y Ravanger - Minecraft</a></h5>
                                <div className='rating mt-auto'>
                                    <div className='rating-outer'>
                                        <div className='rating-inner'></div>
                                    </div>
                                    <span id='No_de_opiniones'>53 reviews</span>
                                </div>
                                <p className='card-text'>$139.800</p><a href='http://localhost:3000/' id='view_btn' className='btn btn-block'>Ver detalles</a>
                            </div>
                        </div>
                    </div>

                    {/*Producto 4*/}
                    <div className='col-sm-12 col-md-6 col-lg-3 my-'>
                        <div className='card p-3 rounded'>
                            <img className='card-img-top mx-auto' src='./images/peluche_oso_pardo_sentado_100cm.png' alt='peluche_oso_pardo_sentado_100cm'></img>
                            <div className='card-body d-flex flex-column'>
                                <h5 id='titulo_producto'><a href='http://localhost:3000/'>Peluche Oso Pardo Sentado Kisses 100 cm</a></h5>
                                <div className='rating mt-auto'>
                                    <div className='rating-outer'>
                                        <div className='rating-inner'></div>
                                    </div>
                                    <span id='No_de_opiniones'>46 reviews</span>
                                </div>
                                <p className='card-text'>$104.900</p><a href='http://localhost:3000/' id='view_btn' className='btn btn-block'>Ver detalles</a>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </Fragment>
    )
}

export default Home;