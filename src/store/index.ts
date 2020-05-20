import {
  combineReducers,
  createStore,
  applyMiddleware,
  compose
} from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

import { selectReducer } from '@/store/reducer'

const logger = createLogger()
const middlewares = [thunk, logger]

const rootReducer = combineReducers({
  select: selectReducer,
})

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
)

export default store
