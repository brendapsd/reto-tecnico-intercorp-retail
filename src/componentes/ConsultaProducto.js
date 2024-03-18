import React from 'react';

const ConsultaProducto = ({ skuInput, setSkuInput, buscarProducto, producto, verDetalle, logoPromart }) => {
    return (
        <div className="componente">
            <div className="bloque-header">
                <div className="bloque-header__elemento">
                    <img className="bloque__logo" src={logoPromart} alt="logo promart"/>
                    <h1 className="bloque__titulo">Consulta de Producto</h1>
                </div>
            </div>
            <div className="bloque-consulta">
                <div className="bloque-consulta__elemento">
                    <label>SKU: </label>
                    <input
                        type="text"
                        placeholder="Ingrese el SKU"
                        value={skuInput}
                        onChange={(e) => setSkuInput(e.target.value)}
                    />
                    <button className="bloque__boton" onClick={buscarProducto}>Consultar</button>
                </div>
            </div>
            {producto && (
                <div className="bloque-resultado">
                    <p>Resultado de la búsqueda</p>
                    <div className="bloque">
                        <div className="bloque-elemento">
                            <img className="bloque-elemento_imagen imagen--short" src={producto.items[0].images[0].imageUrl} alt="imagen producto"/>
                        </div>
                        <div className="bloque-elemento">
                            <h2><strong>{producto.productName}</strong></h2>
                            <p>SKU: {producto.items[0].itemId}</p>
                            <p>Categoría: {producto.categories[2].slice(1, -1)}</p>
                            <p>Marca: {producto.brand}</p>
                            <p>Precio: S/ {producto.items[0].sellers[0].commertialOffer.Price}</p>
                            <button className="bloque__boton" onClick={verDetalle}>Ver Detalle</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ConsultaProducto;