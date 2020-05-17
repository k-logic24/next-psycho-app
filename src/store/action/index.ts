import { ActionTypes } from '@/types'

import {
  AddDataTypes,
  DataProps,
} from '@/types'
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