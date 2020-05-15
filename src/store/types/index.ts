import { Action } from 'redux'

import { ActionTypes } from '@/store/types/actionTypes'

// stateの型
export type DataProps = {
  title: string
  question: string
  normal: string
  abnormal: string
}

// Actionの型 Actionを継承
interface UpdateData extends Action {
  type: typeof ActionTypes.updateData,
  data: DataProps
}

export type UpdateActionTypes = UpdateData