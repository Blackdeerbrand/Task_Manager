import React, { createContext, useReducer } from 'react'

const ListTaskContext = createContext();

const ListDispatch = (state, action) =>{ 

    switch (action.type) {
        case "CHECKED":
            let list
            return state = 0
            break
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