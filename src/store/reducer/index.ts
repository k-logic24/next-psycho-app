import { ActionTypes, FetchDataTypes, DataProps } from '@/types'

const initialState: DataProps = {
  title: '',
  question: '',
  normal: '',
  abnormal: '',
}

export const selectReducer = (state = initialState, action: FetchDataTypes): DataProps => {
  switch (action.type) {
    case ActionTypes.fetchData:
      return { ...state, ...action }
    default:
      return state
  }
}