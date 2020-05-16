import db from '@/firebase/firebaseInit'
import { DataProps } from '@/store/types'

export const sendData = (payload: DataProps) => {
  db.collection('information')
    .add({
      ...payload
    })
}

export const fetchData = (): Promise<any> => {
  return db.collection('information')
    .get()
    .then(querySnapShot => {
      const dataArray = []

      querySnapShot.forEach(info => {
        const base = info.data()

        const dataObj = {
          title: base.title,
          question: base.question,
          normal: base.normal,
          abnormal: base.abnormal,
          id: info.id
        }

        dataArray.push(dataObj)
      })

      return dataArray
    })
}

export const selectData = (id: string): Promise<any> => {
  return db.collection('information')
    .doc(id)
    .get()
    .then(result => result.data())
    .catch(error => {
      console.log('failed...', error)
    })
}