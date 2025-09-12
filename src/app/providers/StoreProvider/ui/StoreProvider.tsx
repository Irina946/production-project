import { ReactNode } from "react"
import { Provider } from "react-redux";
import { createReduxStore } from "../config/store";
import { IStateSchema } from "../config/StateSchema";

interface IStoreProviderProps {
    children?: ReactNode,
    initialState?: Partial<IStateSchema>
}

export const StoreProvider = (props: IStoreProviderProps) => {
    const {
        children,
        initialState }
        = props;

    const store = createReduxStore(initialState as IStateSchema);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}
