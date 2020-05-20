import db from '@/firebase/firebaseInit'
import { DataProps, NewDataProps } from '@/types'

export const addData = (payload: DataProps) => {
  db.collection('information').add({
    ...payload,
  })
}

export const deleteData = (id: string) => {
  db.collection('information').doc(id).delete()
}

export const editData = (payload: NewDataProps) => {
  db.collection('information').doc(`${payload.id}`).update(payload)
}

export const fetchData = (): Promise<any> => {
  return new Promise(resolve => {
    db
    .collection('information')
    .get()
    .then((querySnapShot) => {
      const dataArray: DataProps[] = []

      querySnapShot.forEach((info) => {
        const base = info.data()

        const dataObj = {
          title: base.title,
          question: base.question,
          normal: base.normal,
          abnormal: base.abnormal,
          id: info.id,
        }

        dataArray.push(dataObj)
      })

      resolve(dataArray)
    })
  })
}

export const selectData = (id: string): Promise<any> => {
  return db
    .collection('information')
    .doc(id)
    .get()
    .then((result) => result.data())
    .catch((error) => {
      console.log('failed...', error)
    })
}
