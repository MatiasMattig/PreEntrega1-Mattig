import React, { useState, useEffect } from 'react';
import '../../styles/components/ItemListContainer/ItemListContainer.scss';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { pedirDatos } from '../../helpers/pedirDatos';

const ItemListContainer = () => {

  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)

  const { categoryId } = useParams()
  console.log(categoryId)

  useEffect(() => {
    setLoading(true)

    pedirDatos()
        .then(r => {
          if (categoryId) {
            setProductos( r.filter(prod => prod.category === categoryId) )
          } else {
            setProductos(r)
          }
        })
        .catch(e => console.log(e))
        .finally(() => {
          setLoading(false)
        })
  }, [categoryId])

  return (
    <div>
        {
          loading
              ? <h2>Cargando...</h2>
              : <ItemList productos={productos}/>
        }
    </div>
  );
};

export default ItemListContainer;