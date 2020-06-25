import React from 'react'
import { Modal, Button } from 'react-bootstrap'

import { ModalProps } from '@/types'
import { fetchData, deleteData } from '@/api'

const DeleteModal: React.FC<ModalProps> = ({
  setData,
  targetData,
  show,
  setModalShow,
}) => {
  const handleClickDelete = async () => {
    const targetId = targetData[0].id
    if (targetId) {
      await
        deleteData(targetId)
      await
        setTimeout(() => {
          fetchData().then(res => setData(res))
        }, 500)
      setModalShow(false)
    } else {
      throw new Error('削除できませんでした')
    }
  }

  return (
    <Modal
      show={show}
      onHide={() => setModalShow(false)}
      size="lg"
      aria-labelledby="delete-modal"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="delete-modal">
          {targetData && targetData[0].title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>項目を削除しますか？</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setModalShow(false)}>
          キャンセル
        </Button>
        <Button variant="danger" onClick={handleClickDelete}>
          削除
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default DeleteModal
