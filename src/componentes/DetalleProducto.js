import React from 'react'; 

const DetalleProducto = ({ detalleProducto, mostrarInterfazConsulta, logoPromart }) => {
    return (
        <div className="componente">
            <div className="bloque-header">
                <div className="bloque-header__elemento">
                    <img className="bloque__logo" src={logoPromart} alt="logo promart"/>
                    <h1 className="bloque__titulo">Página de Producto</h1>
                </div>
            </div>
            <div className="bloque-detalle">
                <div className="bloque">
                    <div className="bloque-elemento">
                        <img className="bloque-elemento_imagen" src={detalleProducto.items[0].images[0].imageUrl} alt="imagen producto"/>
                    </div>
                    <div className="bloque-elemento">
                        <h2>{detalleProducto.productName}</h2>
                        <p>SKU: {detalleProducto.items[0].itemId}</p>
                        <p>Categoría: {detalleProducto.categories[2].slice(1, -1)}</p>
                        <p>Marca: {detalleProducto.brand}</p>
                        <p>Precio Base: S/ {detalleProducto.items[0].sellers[0].commertialOffer.Price}</p>
                        <p>Precio de Lista: S/ {detalleProducto.items[0].sellers[0].commertialOffer.ListPrice}</p>
                        <p>Descripción: </p>
                        <div dangerouslySetInnerHTML={{ __html: detalleProducto.description }} />
                        <p>Ficha Técnica:</p>
                        <ul>
                            {Object.entries(detalleProducto["Ficha Técnica"]).map(([atributo, valor]) => (
                                <li key={atributo}>
                                    <strong>{valor}:</strong> {detalleProducto[valor]}
                                </li>
                            ))}
                        </ul>
                        <button className="bloque__boton" onClick={mostrarInterfazConsulta}>Volver a la consulta</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetalleProducto;