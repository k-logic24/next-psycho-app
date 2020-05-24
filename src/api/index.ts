import db from '@/firebase/firebaseInit'
import { DataProps } from '@/types'

export const fetchData = (): Promise<DataProps[]> => {
  return new Promise((resolve) => {
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
          resolve(dataArray)
        })
      })
  })
}

export const deleteData = (id: string) => {
  db
  .collection('information')
  .doc(id)
  .delete()
}
