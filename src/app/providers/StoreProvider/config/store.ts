import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { IStateSchema } from './StateSchema'
import { counterReducer } from 'entites/Counter'
import { userReducer } from 'entites/User';

export function createReduxStore(initialState?: IStateSchema) {
    const rootReducer: ReducersMapObject<IStateSchema> = {
        counter: counterReducer,
        user: userReducer
    };

    return configureStore<IStateSchema>({
        reducer: rootReducer,
        devTools: __IS_DEV__,
        preloadedState: initialState
    })
}

