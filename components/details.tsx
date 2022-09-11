import { useEffect, useReducer } from "react";

import { API_PATH } from "../env";
import Nav from "./navigationBar";
interface State {
  id: string;
  name: string;
  price: number;
  imgSrc: string;
  description: string;
}
type Props = {
  serviceId: string;
  onReserveClick: () => void;
};
type Service = {
  _id: string;
  name: string;
  price: number;
  picture: string;
  description: string;
};
type Action = { type: "data_updated"; data: Service };
function reducer(state: State, action: Action) {
  switch (action.type) {
    case "data_updated":
      console.log("dispatch");
      return {
        ...state,
        id: action.data._id,
        name: action.data.name,
        price: action.data.price,
        imgSrc: action.data.picture,
        description: action.data.description,
      };
  }
}
const Detail = (props: Props) => {
  const [state, dispatch] = useReducer(reducer, {
    id: "",
    name: "",
    price: 0,
    imgSrc: "",
    description: "",
  });
  useEffect(() => {
    fetchDetailById(props.serviceId).then((data: Service) => {
      dispatch({ type: "data_updated", data });
    });
  }, [props.serviceId]);
  return (
    <>
      <Nav />
      <div className="text-black px-8 md:px-[91px] w-screen overflow-scroll">
        <div className="text-3xl mt-10 md:text-5xl">{state.name}</div>
        <p className="text-xl mt-[14px] md:text-[32px]">฿ {state.price}</p>
        <pre className="whitespace-pre-wrap my-[24px]">{state.description}</pre>
        <button
          onClick={props.onReserveClick}
          className="px-8 py-2 bg-blue-500 text-white mt-4 cursor-pointer hover:bg-blue-400 hover:text-gray-100"
        >
          จองบริการ
        </button>
      </div>
    </>
  );
};

const fetchDetailById = async (id: string): Promise<Service> => {
  const resp = await fetch(`${API_PATH}/v1/services/${id}`);
  const json = await resp.json();
  console.log("x");
  return json;
};

export default Detail;
