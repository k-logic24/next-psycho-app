// redux
import { Action } from 'redux'

export const ActionTypes = {
  addData: 'ADD_DATA',
  fetchData: 'FETCH_DATA',
} as const

interface AddDataProps extends Action {
  type: typeof ActionTypes.addData
  data: DataProps
}

interface FetchDataProps extends Action {
  type: typeof ActionTypes.fetchData
  data: DataProps
}

export type AddDataTypes = AddDataProps
export type FetchDataTypes = FetchDataProps

export type DataProps = {
  title: string
  question: string
  normal: string
  abnormal: string
  id?: string
}

export type NewDataProps = {
  title: string
  question: string
  normal: string
  abnormal: string
}

// modal
export type ModalProps = {
  targetData: DataProps
  show: boolean
  setModalShow: React.Dispatch<React.SetStateAction<boolean>>
}
