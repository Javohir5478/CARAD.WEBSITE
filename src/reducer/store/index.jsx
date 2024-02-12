import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "../reducers/rootReducer";
import PropTypes from "prop-types";
import { thunk } from 'redux-thunk';




export const Store = createStore(rootReducer,applyMiddleware(thunk));

  const StoreProvider = ({children}) => {

    return <Provider store={Store}> {children}</Provider>
};
StoreProvider.propTypes =  {
    children: PropTypes.node ,
};
export default StoreProvider;