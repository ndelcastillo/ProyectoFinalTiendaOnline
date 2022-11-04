import React, { useEffect, useState } from 'react'
import { getSingleItem } from "../../services/firestore";
import { useParams } from 'react-router-dom';
import './itemDetailContainer.css'
import ItemDetail from './ItemDetail';
import { Waveform } from '@uiball/loaders'

function ItemDetailContainer() {
  const [terrarios, setTerrarios] = useState({});
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true)

  /*
   const params = useParams ();
   const itemid = params.id;
   */

  const { id } = useParams();

  useEffect(() => {
    getSingleItem(id)
      .then((respuestaDatos) => setTerrarios(respuestaDatos))
      .catch((errormsg) => {
        setError(errormsg.message)
      })
      .finally(() => setIsLoading(false))
  }, [id]);



  if (/*!terrarios.name*/ isLoading) {
    return (
      <div className='mainContainerLoader'>
        {error ? (
          <div>
            <h2 style={{ color: "#aa0033" }}>Error obteniendo los datoos</h2>
            <p>{error}</p>
          </div>
        ) : (
          <Waveform
            size={40}
            lineWeight={3.5}
            speed={1}
            color="white"
          />
        )}
      </div>
    );
  }

  return (
    <div>
      {/*<h1 onClick={() => { alert("Clickeado") }} className='detailTitle'>{props.greeting}</h1>*/}
      <div className='mainContainer'>
        <ItemDetail terrarios={terrarios} />
        {/*<h1 className='terrarioName'>{terrarios.name}</h1>
        <h1 className='terrarioName'>{terrarios.price}</h1>*/}
      </div>
    </div>
  )
}

export default ItemDetailContainer

//uso getSingleTerrario porque quiero que me llegue un solo objeto (terrario)

