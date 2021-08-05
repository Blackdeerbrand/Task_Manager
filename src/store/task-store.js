import React, { createContext, useState, useReducer } from 'react'

const ListTaskContext = createContext();

const ListDispatch = (state, action) =>{ 

    switch (action.type) {
        case "ALL_TASKS":
            state = 1
            break;
        default:
            return state
            break;
    }
}

const ListStatus = props =>{
    const [results, dispatch] = useReducer(ListDispatch, '')
    return(
        <ListTaskContext.Provider value = {{
            listResults: results,
            listDispatch: dispatch,
            }}>
                {props.children}
        </ListTaskContext.Provider>
    )
}

export { ListStatus, ListTaskContext}