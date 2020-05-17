import { ActionTypes } from '@/types'
import { selectData } from '@/api'

export const fetchAction = payload => (
  { type: ActionTypes.fetchData, ...payload }
)
export const thunkedFetch = (id: string): any =>
  (dispatch) =>
    selectData(id)
      .then(res => {
        dispatch(fetchAction(res))
      })