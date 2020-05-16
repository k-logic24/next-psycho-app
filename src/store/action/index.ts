import { ActionTypes } from '@/store/types/actionTypes'

import {
  AddDataTypes,
  DataProps,
} from '@/store/types'
import { sendData, selectData } from '@/api'

export const addAction = (payload: DataProps): AddDataTypes => {
  sendData(payload)
  return {
    type: ActionTypes.addData,
    data: payload,
  }
}

export const fetchAction = payload => (
  { type: ActionTypes.fetchData, ...payload }
)

export const thunkedFetch = (id: string): any =>
  (dispatch) =>
    selectData(id)
      .then(res => {
        dispatch(fetchAction(res))
      })