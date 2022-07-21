import { configureStore } from '@reduxjs/toolkit'
import reducers from './reducers/index';

const prodStore = configureStore({   
    reducer: reducers,
    
}); // 2nd param is the state

export default prodStore;