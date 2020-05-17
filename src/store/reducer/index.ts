import { ActionTypes } from '@/types'
import { AddDataTypes, FetchDataTypes, DataProps } from '@/types'

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
      return { ...state, ...action }
    default:
      return state
  }
}