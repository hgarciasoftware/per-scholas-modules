import Form from "./Form"
import React, { useState } from 'react'
import DisplayList from './DisplayList'

import { useDispatch, useSelector } from 'react-redux'

function Groceries() {

    const dispatch = useDispatch()
    const groceries = useSelector(state => state.groceries)

    let [currentList, setCurrentList] = useState('Grocery List')
 
    const addItem = (item) => {
 
       dispatch({
           type: 'ADD_ITEM',
           payload: item
       })
    }

    const togglePurchase = (event) => {
     
        dispatch({
            type: 'TOGGLE_PURCHASE',
            payload: Number(event.target.id)
        })
    }

    const toggleList = () => {
        if (currentList === 'Grocery List')
            setCurrentList('Purchased List')
        else if (currentList === 'Purchased List')
            setCurrentList('Grocery List')
    }


    let listName = currentList === 'Grocery List' ? 'Purchase List' : 'Grocery List'
        
        return (
            <div className='content'>

                <div>
                    <button onClick={toggleList}>{listName}</button>
                </div>

                <div className='lists'>
                    <h3>{currentList}</h3>

                    <DisplayList 
                        groceries={groceries} 
                        togglePurchase={togglePurchase} 
                        currentList={currentList}
                    />
                
                </div>

                <div>
                    <Form addItem={addItem}/>
                </div>

            </div>
        )
    }


export default Groceries;



