import { combineReducers } from 'redux'

const polizaReducer = () => {
    return [
        {
            numero: "1",
            description: "Poliza 1"
        },
        {
            numero: "2",
            author: "Poliza 2"
        },
        {
            name: "3",
            author: "Poliza 3"
        }
    ]
}

const selectedPolizaReducer = (selectedPoliza = null, action) => {
    if(action.type == 'POLIZA_SELECTED'){
        return action.payload
    }
    else{
        return selectedPoliza
    }
}

export default combineReducers({
    list: polizaReducer,
    polizaSelected: selectedPolizaReducer
})