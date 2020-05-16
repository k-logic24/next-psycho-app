import { Action } from 'redux'

import { ActionTypes } from '@/store/types/actionTypes'

// stateの型
export type DataProps = {
  title: string
  question: string
  normal: string
  abnormal: string
  id?: string
}

interface AddDataProps extends Action {
  type: typeof ActionTypes.addData,
  data: DataProps
}

interface FetchDataProps extends Action {
  type: typeof ActionTypes.fetchData,
  data: DataProps
}

export type AddDataTypes = AddDataProps
export type FetchDataTypes = FetchDataProps