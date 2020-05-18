import { ActionTypes, DataProps } from '@/types'
import { selectData } from '@/api'

export const fetchAction = (payload: DataProps) => ({
  type: ActionTypes.fetchData,
  ...payload,
})
export const thunkedFetch = (id: string): any => (dispatch: any) =>
  selectData(id).then((res) => {
    dispatch(fetchAction(res))
  })
