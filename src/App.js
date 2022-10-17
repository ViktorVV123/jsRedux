import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {v1} from "uuid";
import {addCustomerAction, removeCustomerAction} from "./store/customerReducer";
import {addCashAction, getCashAction} from "./store/cashReducer";
import {fetchCustomers} from "./asyncAction/customers";

function App() {

    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash.cash)
    const customer = useSelector(state => state.customer.customer)


    const addMoneyHandler = (cash) => {
        dispatch(addCashAction(cash))
    }
    const getMoneyHandler = (cash) => {
        dispatch(getCashAction(cash))
    }

    const addCustomer = (name) => {
        const customerNew = {
            name,
            id: v1(),
        }
        dispatch(addCustomerAction(customerNew))
    }
    const removeCustomerHandler = (customer) => {
        dispatch(removeCustomerAction(customer.id))
    }
    console.log(removeCustomerHandler)
    return (
        <div className={'App'}>
            <div style={{fontSize: '3rem',marginBottom: 10}}>{cash}</div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <button onClick={() => addMoneyHandler(Number(prompt()))}> Пополнить счет</button>
                <button onClick={() => getMoneyHandler(Number(prompt()))}>Снять со счета</button>
                <button onClick={() => addCustomer(prompt())}>Добавить клиента</button>
                <button onClick={() => dispatch(fetchCustomers())}>Получить клиентов из базы</button>

            </div>

            {customer.length > 0 ?
                <div>
                    {customer.map(customer =>
                        <div onClick={() => removeCustomerHandler(customer)}
                             style={{fontSize: '2rem', border: '1px solid black', padding: '10px', marginTop: 5}}>
                            {customer.name}
                            <button onClick={() => removeCustomerHandler(customer)}>delete</button>
                        </div>
                    )}

                </div>
                :
                <div style={{fontSize: '2rem', marginTop: 20}}>
                    клиенты отсутствуют
                </div>

            }

        </div>
    );
}

export default App;
