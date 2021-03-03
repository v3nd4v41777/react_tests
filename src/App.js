import './App.css';
import Users from './pages/Users';
import { Switch, Route } from "react-router-dom";
import SinglerUser from './pages/SingleUser';
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { usersReducer } from './reducers/usersReducer';
import { loaderReducer } from './reducers/loaderReducer';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  users: usersReducer,
  loader: loaderReducer
});

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

function App() {
  return (
    <div className="App container container-fluid">
      <Provider store={store}>
        <Switch>
          <Route path="/:userId">
            <SinglerUser />
          </Route>
          <Route path="/">
            <Users />
          </Route>
        </Switch>
      </Provider>
    </div>
  );
}

export default App;
