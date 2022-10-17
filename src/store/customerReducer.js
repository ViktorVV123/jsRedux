const defaultState = {
    customer: []
}

const ADD_CUSTOMER = 'ADD_CUSTOMER'
const REMOVE_CUSTOMER = 'REMOVE_CUSTOMER'
const ADD_MANY_CUSTOMERS = 'ADD_MANY_CUSTOMERS'

export const customReducer = (state = defaultState, action) => {
    switch (action.type){
        case ADD_CUSTOMER:

            return { ...state, customer: [...state.customer, action.payload ] } //тк добавляем новый объект мы писваиваем новый массив

        case REMOVE_CUSTOMER:

            return {...state, customer:state.customer.filter(customers => customers.id !== action.payload)}
        case ADD_MANY_CUSTOMERS:
            return {...state, customer: [...state.customer,...action.payload]}
        default:
            return state
    }

}

export const addCustomerAction = (payload) => ({type: ADD_CUSTOMER, payload})
export const removeCustomerAction = (payload) => ({type: REMOVE_CUSTOMER, payload})
export const addCustomerMany = (payload) => ({type: ADD_MANY_CUSTOMERS, payload})

