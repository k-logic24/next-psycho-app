import { ActionTypes } from '@/store/types/actionTypes'
import { AddDataTypes, FetchDataTypes, DataProps } from '@/store/types'

const initialState: DataProps = {
  title: '',
  question: '',
  normal: '',
  abnormal: '',
}

export const updateReducer = (state = initialState, action: AddDataTypes): DataProps => {
  switch (action.type) {
    case ActionTypes.addData:
      return { ...state, ...action }
    default:
      return state
  }
}

export const selectReducer = (state = initialState, action: FetchDataTypes): DataProps => {
  switch (action.type) {
    case ActionTypes.fetchData:
      console.log('通ってる？')
      return { ...state, ...action }
    default:
      return state
  }
}