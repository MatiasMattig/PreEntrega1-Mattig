import React, { useState, useEffect } from 'react';
import '../../styles/components/ItemListContainer/ItemListContainer.scss';
import { pedirDatos } from '../../helpers/pedirDatos';
import { useProductos } from '../../hooks/useProductos';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {
  const { productos } = useProductos()

  return (
    <div>
        <ItemList productos={productos}/>
    </div>
  );
};

export default ItemListContainer;