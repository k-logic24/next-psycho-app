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
  setData: React.Dispatch<React.SetStateAction<DataProps[]>>
  targetData: DataProps[]
  show: boolean
  setModalShow: React.Dispatch<React.SetStateAction<boolean>>
}
