import React, { createContext, useReducer } from 'react'

const ListTaskContext = createContext();

const ListDispatch = (state, action) =>{ 

    let listActive = []
    let listComplete = []

    switch (action.type) {
        case "CHECKED":
            listActive = listActive.push({task:action.payload.task, checked:true})
            return listActive
            break
        case "UNCHECKED":
            listComplete = listComplete.push({task:action.payload.task, checked:false})
            return listComplete
            break
        case "ACTIVE":
            return listActive
            break
        case "COMPLETE":
            return listComplete
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