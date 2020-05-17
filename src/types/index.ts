// redux
import { Action } from "redux";

export const ActionTypes = {
  addData: "ADD_DATA",
  fetchData: "FETCH_DATA",
} as const;

interface AddDataProps extends Action {
  type: typeof ActionTypes.addData;
  data: DataProps;
}

interface FetchDataProps extends Action {
  type: typeof ActionTypes.fetchData;
  data: DataProps;
}

export type AddDataTypes = AddDataProps;
export type FetchDataTypes = FetchDataProps;

export type DataProps = {
  title: string;
  question: string;
  normal: string;
  abnormal: string;
  id?: string;
};

export type NewDataProps = {
  title?: string;
  question?: string;
  normal?: string;
  abnormal?: string;
  id: string | string[] | undefined;
};

// form
export type FormProps = {
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setQuestion: React.Dispatch<React.SetStateAction<string>>;
  setNormal: React.Dispatch<React.SetStateAction<string>>;
  setAbnormal: React.Dispatch<React.SetStateAction<string>>;
  handleChangeData?: (value: string, target: string) => void;
  handleClickAdd?: () => void;
  handleClickEdit?: () => void;
};

// modal
export type ModalProps = {
  targetData: DataProps[];
  show: boolean;
  setModalShow: React.Dispatch<React.SetStateAction<boolean>>;
  setData: React.Dispatch<React.SetStateAction<DataProps[]>>;
};
