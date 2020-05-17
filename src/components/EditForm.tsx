import React from "react";
import { useSelector } from "react-redux";
import { Form, Button } from "react-bootstrap";

import { DataProps, FormProps } from "@/types";
import { RootState } from "@/store";

const EditForm: React.FC<FormProps> = ({
  setTitle,
  setQuestion,
  setNormal,
  setAbnormal,
  handleClickEdit,
}) => {
  const currentData = useSelector<RootState, DataProps>(
    (state) => state.select
  );

  return (
    <>
      <Form.Group controlId="title">
        <Form.Label className="font-weight-bold">タイトル</Form.Label>
        <Form.Control
          type="text"
          defaultValue={currentData.title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
        />
      </Form.Group>
      <Form.Group controlId="question">
        <Form.Label className="font-weight-bold">内容</Form.Label>
        <Form.Control
          as="textarea"
          defaultValue={currentData.question}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setQuestion(e.target.value)
          }
        />
      </Form.Group>
      <Form.Group controlId="normal">
        <Form.Label className="font-weight-bold">一般回答</Form.Label>
        <Form.Control
          as="textarea"
          defaultValue={currentData.normal}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setNormal(e.target.value)
          }
        />
      </Form.Group>
      <Form.Group controlId="abnormal">
        <Form.Label className="font-weight-bold">サイコパス回答</Form.Label>
        <Form.Control
          as="textarea"
          defaultValue={currentData.abnormal}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setAbnormal(e.target.value)
          }
        />
      </Form.Group>
      <Button variant="primary" onClick={handleClickEdit}>
        完了
      </Button>
    </>
  );
};

export default EditForm;
