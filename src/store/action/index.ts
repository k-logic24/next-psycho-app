import { ActionTypes } from '@/store/types/actionTypes'
import { UpdateActionTypes, DataProps } from '@/store/types'
import { sendData } from '@/api'

export const updateAction = (payload: DataProps): UpdateActionTypes => {
  sendData(payload)
  return {
    type: ActionTypes.updateData,
    data: payload,
  }
}