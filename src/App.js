import React, { useState } from 'react';
import ConsultaProducto from './componentes/ConsultaProducto';
import DetalleProducto from './componentes/DetalleProducto';
import arrayProductos from './componentes/data';
import './App.css';
import logoPromart from './images/Promart_Homecenter_logo_blanco_2021.png'

const App = () => {
    const [skuInput, setSkuInput] = useState('');
    const [producto, setProducto] = useState(null);
    const [detalleProducto, setDetalleProducto] = useState(null);

    const buscarProducto = () => {
        const productoEncontrado = getProductBySKU(skuInput);
        setProducto(productoEncontrado);
    };

    const verDetalle = () => {
        setDetalleProducto(producto);
    };

    const getProductBySKU = (sku) => {
        return arrayProductos.find(producto => producto.items[0].itemId === sku);
    };

    const mostrarInterfazConsulta = () => {
        setDetalleProducto(null);
    };

    return (
        <div className="app">
            {!detalleProducto ? (
                <ConsultaProducto
                    skuInput={skuInput}
                    setSkuInput={setSkuInput}
                    buscarProducto={buscarProducto}
                    producto={producto}
                    verDetalle={verDetalle}
                    logoPromart={logoPromart}
                />
            ) : (
                <DetalleProducto
                    detalleProducto={detalleProducto}
                    mostrarInterfazConsulta={mostrarInterfazConsulta}
                    logoPromart={logoPromart}
                />
            )}
            <footer><p>PROMART</p></footer>
        </div>
    );
};

export default App;