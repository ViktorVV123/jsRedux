import {addCustomerMany} from "../store/customerReducer";


export const fetchCustomers = () => {
    return dispatch => { //можно написать function (dispatch) =>
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => dispatch(addCustomerMany(json)))
    }
}