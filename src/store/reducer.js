import { createStore } from "redux"

const initialState = {
    products : [],
    users : []
}

const reducer = (state = initialState, action) => {
    switch(action.type){

        case "ADD_PRODUCT":
            return {
                ...state,
                products : [...state.products, action.payload]
            }

        default :
        return state
    }
}

export default createStore(reducer)

// closures example -

// const couter = () => {let i = 0; return () => i++}
// undefined
// count = counter()
// VM313:1 Uncaught ReferenceError: counter is not defined
//     at <anonymous>:1:1
// (anonymous) @ VM313:1
// count = couter()
// () => i++
// count()
// 0
// count()
// 1
// count()
// 2
// count()
// 3
// count()
// 4
// count()
// 5
// count()
// 6
// count()
// 7