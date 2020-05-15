import { ActionTypes } from '@/store/types/actionTypes'
import { UpdateActionTypes, DataProps } from '@/store/types'

const initialState: DataProps = {
  title: '',
  question: '',
  normal: '',
  abnormal: '',
}

export const updateReducer = (state = initialState, action: UpdateActionTypes): DataProps => {
  switch (action.type) {
    case ActionTypes.updateData:
      return { ...state, ...action }
    default:
      return state
  }
}