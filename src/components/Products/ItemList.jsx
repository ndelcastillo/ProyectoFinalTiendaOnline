import React from 'react'
import Item from './Item';
import "./itemList.css";

function ItemList(props) {
    return (
        <div className='mainContainer'>
            {props.terrarios.map((item) => {
                return (
                    <Item
                        key={item.id}
                        id={item.id}
                        img={item.img}
                        name={item.name}
                        type={item.type}
                        plants={item.plants}
                        pot={item.pot}
                        potSize={item.potSize}
                        price={item.price}
                        dues={item.dues}
                        offer={item.offer}
                        stock={item.stock}
                        category={item.category}
                        detail={item.detail}
                    />
                );
            })}
        </div>
    )
}

export default ItemList

