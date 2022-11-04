import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./itemListContainer.css";
import ItemList from './ItemList'
import Main from '../Main/Main'
import { Waveform } from '@uiball/loaders'

import { getTerrarios, getTerrariosByCategory } from "../../services/firestore";

function ItemListContainer(props) {
  const [terrarios, setTerrarios] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  const { cat } = useParams();

  useEffect(() => {
    setTerrarios([])
    setIsLoading(true)
    if (cat === undefined) {
      getTerrarios()
        .then((respuestaDatos) => setTerrarios(respuestaDatos))
        .finally(() => setIsLoading(false))
    } else {
      getTerrariosByCategory(cat)
        .then((respuestaDatosFiltrados) => setTerrarios(respuestaDatosFiltrados))
        .finally(() => setIsLoading(false))
    }
  }, [cat]);

  return (
    <div>
      <div className='mainContainer'>
        <Main />
        <h1 onClick={() => { alert("Clickeado") }} className='productsTitle'>{props.greeting}</h1>
        <ItemList terrarios={terrarios} />
      </div>
      <div className='mainContainerLoader'>
        {
          isLoading && <Waveform
            size={40}
            lineWeight={3.5}
            speed={1}
            color="white"
          />
        }
      </div>
    </div>

  );
}
export default ItemListContainer

