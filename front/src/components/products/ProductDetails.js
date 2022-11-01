import React, { Fragment } from "react";
import MetaData from "../layout/MetaData";

export const ProductDetails = () => {
    return (
        <Fragment>
            <MetaData title="Monopoly Super Banco Electronico"></MetaData>
            <div className="row d-flex justify-content-around">
                <div className="col-12 col-lg-5 img-fluid" id="imagen_producto">
                    <img src="../../images/productos/Monopoly_Super_Banco_Electronico.png" alt="Imagen_producto" height="450" width="450"></img>
                </div>
                <div className="col-12 col-lg-5 mt-5">
                    <h3>Juego De Mesa Monopoly Súper Banco Electrónico</h3>
                    <p id="product_id">Producto #32541256</p>
                </div>
            </div>
        </Fragment>
    )
}