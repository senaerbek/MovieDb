import {applyMiddleware, combineReducers, createStore} from 'redux';

export const rootReducer = combineReducers({
    
});

export const store = createStore(
    rootReducer,
    applyMiddleware(),
);
