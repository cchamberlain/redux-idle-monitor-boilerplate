import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from '../reducers'
import { middleware as idleMiddleware, actions as idleActions } from './redux-idle-monitor'

export default function configureStore(initialState) {
  const logger = createLogger({
    collapsed: true,
    predicate: () =>
    process.env.NODE_ENV === 'development' // eslint-disable-line no-unused-vars
  })

  const middleware = applyMiddleware(thunkMiddleware, idleMiddleware, logger)

  const store = middleware(createStore)(rootReducer, initialState)

  console.warn('calling idle monitor start')

  store.dispatch(idleActions.start())

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }
  return store
}
