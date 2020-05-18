import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

import { selectReducer } from '@/store/reducer'

const logger = createLogger()
const middlewares = [thunk, logger]

const rootReducer = combineReducers({
  select: selectReducer,
})

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store
