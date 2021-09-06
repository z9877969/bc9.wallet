import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import transactions from "./transactions/transactionsReducer";

const rootReducer = combineReducers({
  transactions,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware()
    // other store enhancers if any
  )
);

export default store;
