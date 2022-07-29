import React from "react";
import {Provider} from 'react-redux'
import { createStore } from "redux";

import reducers from './reducers';
import initalState from './store';

const UserProvider = ({children}) => {
    const store = createStore(reducers, initalState)
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default UserProvider;