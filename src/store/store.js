import {applyMiddleware, combineReducers, createStore} from "redux";
import {customReducer} from "./customerReducer";
import {cashReducer} from "./cashReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";



const rootReducer = combineReducers({
    customer: customReducer,
    cash: cashReducer
})
// непосредственно создаём store
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
// определить автоматически тип всего объекта состояния



