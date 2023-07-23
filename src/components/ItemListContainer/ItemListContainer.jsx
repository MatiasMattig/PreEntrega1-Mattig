import React, { useState, useEffect } from 'react';
import '../../styles/components/ItemListContainer/ItemListContainer.scss';

const MOCK_DATA = [
    {
        id: 1,
        nombre: 'Producto 1',
        descripcion: 'rewrfwef',
        precio: 1500,
        img: "daasd"
    },
    {
        id: 2,
        nombre: 'Producto 2',
        descripcion: 'rewrfwef',
        precio: 2500,
        img: "daasd"
    },
    {
        id: 3,
        nombre: 'Producto 3',
        descripcion: 'rewrfwef',
        precio: 3500,
        img: "daasd"
    },
    {
        id: 4,
        nombre: 'Producto 4',
        descripcion: 'rewrfwef',
        precio: 4500,
        img: "daasd"
    },
    {
        id: 5,
        nombre: 'Producto 5',
        descripcion: 'rewrfwef',
        precio: 5500,
        img: "daasd"
    },
    {
        id: 6,
        nombre: 'Producto 6',
        descripcion: 'rewrfwef',
        precio: 6500,
        img: "daasd"
    },
];

const pedirDatos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(MOCK_DATA);
    }, 2000);
  });
};

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    pedirDatos()
      .then((res) => {
        setProductos(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h2>Item List Container</h2>
      <p>Hola mundo</p>

      <div className='row'>
        {
          productos.map((prod) => (
            <div key={prod.id} className='col-3 m-2'>
              <h4>{prod.nombre}</h4>
              <img src={prod.img} alt={prod.nombre} />
              <p>{prod.descripcion}</p>
              <p>Precio: ${prod.precio}</p>
              <button className='btn btn-primary'>Ver más</button>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default ItemListContainer;