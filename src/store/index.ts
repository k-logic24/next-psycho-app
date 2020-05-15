import { combineReducers, createStore } from 'redux'

import { updateReducer } from '@/store/reducer'

const rootReducer = combineReducers({
  update: updateReducer
})

export type RootState = ReturnType<typeof rootReducer>

const store = createStore(rootReducer)

export default store
