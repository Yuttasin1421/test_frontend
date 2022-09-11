import { useEffect, useReducer } from "react";

import { API_PATH } from "../env";
import Nav from "./navigationBar";

interface State {
  orders: Order[];
}

type Order = {
  month: string;
  date: string;
  year: string;
  time: string;
  service: Service;
};

type Service = {
  id: string;
  name: string;
  price: number;
  imgSrc: string;
};

type Action = { type: "data_updated"; data: Order[] };
function reducer(state: State, action: Action) {
  switch (action.type) {
    case "data_updated":
      return { ...state, orders: action.data };
  }
}
const Order = () => {
  const [state, dispatch] = useReducer(reducer, {
    orders: [
      {
        date: "",
        month: "",
        year: "",
        time: "",
        service: {
          id: "",
          name: "",
          price: 0,
          imgSrc: "",
        },
      },
    ],
  });
  useEffect(() => {
    fetchMyOrder().then((orders) => {
      const constructOrder: Order[] = orders.map((order: any) => {
        const monthNames = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];
        const date = new Date(order.createdAt);
        return {
          date: date.getDate(),
          year: date.getFullYear(),
          month: monthNames[date.getMonth() - 1],
          time: date.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            hourCycle: "h23",
          }),
          service: {
            id: order.service._id,
            name: order.service.name,
            price: order.service.price,
            imgSrc: order.service.picture,
          },
        };
      });
      dispatch({ type: "data_updated", data: constructOrder });
    });
  }, []);
  return (
    <div className="min-h-screen overflow-y-auto">
      <Nav />
      <div className="text-black px-8 md:px-[176px] w-screen overflow-scroll">
        <div className="text-3xl mt-10 md:text-[48px]">รายการ</div>
        <div className="py-8">
          {state.orders.map((order: any) => (
            <div
              key={order.service.id}
              className="mt-[14px] shadow-md hover:bg-gray-50 rounded-xl py-4 px-8 border border-gray-200 cursor-pointer"
            >
              <div className="w-full flex flex-col md:flex-row text-xl md:text-2xl">
                <p>{order.service.name}</p>
                <div className="md:ml-auto flex flex-row gap-x-4">
                  <div className="text-yellow-500">ราคา</div>
                  <div className="w-24 text-blue-500">
                    ฿ {order.service.price}
                  </div>
                </div>
              </div>
              <div className="flex flex-row py-[14px]">
                <div className="flex flex-row">
                  <div className="my-auto" style={{ color: "#007aff" }}>
                    {calendar()}
                  </div>
                  <div className="mx-[10px]">
                    <span>
                      {order.date} {order.month} {order.year}
                    </span>
                  </div>
                </div>
                <div className="flex flex-row ml-[10px]">
                  <div className="my-auto" style={{ color: "#007aff" }}>
                    {clock()}
                  </div>
                  <div className="mx-[10px]">
                    <span>{order.time}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
function calendar() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15.52"
      height="15.52"
      viewBox="0 0 15.52 15.52"
    >
      <defs>
        <style></style>
      </defs>
      <path
        fill="currentColor"
        d="M16.629,4.434a2.217,2.217,0,0,0-2.217-2.217h-.554V1.678a.565.565,0,0,0-.528-.569.554.554,0,0,0-.581.554v.554H4.989V1.678a.565.565,0,0,0-.528-.569.554.554,0,0,0-.581.554v.554H3.326A2.217,2.217,0,0,0,1.109,4.434V4.85a.139.139,0,0,0,.139.139H16.49a.139.139,0,0,0,.139-.139ZM1.109,14.411a2.217,2.217,0,0,0,2.217,2.217H14.411a2.217,2.217,0,0,0,2.217-2.217V6.2a.1.1,0,0,0-.1-.1H1.213a.1.1,0,0,0-.1.1ZM13.026,7.206a.831.831,0,1,1-.831.831A.831.831,0,0,1,13.026,7.206Zm0,2.771a.831.831,0,1,1-.831.831A.831.831,0,0,1,13.026,9.977ZM10.254,7.206a.831.831,0,1,1-.831.831A.831.831,0,0,1,10.254,7.206Zm0,2.771a.831.831,0,1,1-.831.831A.831.831,0,0,1,10.254,9.977Zm0,2.771a.831.831,0,1,1-.831.831A.831.831,0,0,1,10.254,12.749ZM7.483,9.977a.831.831,0,1,1-.831.831A.831.831,0,0,1,7.483,9.977Zm0,2.771a.831.831,0,1,1-.831.831A.831.831,0,0,1,7.483,12.749ZM4.711,9.977a.831.831,0,1,1-.831.831A.831.831,0,0,1,4.711,9.977Zm0,2.771a.831.831,0,1,1-.831.831A.831.831,0,0,1,4.711,12.749Z"
        transform="translate(-1.109 -1.109)"
      />
    </svg>
  );
}
function clock() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
    >
      <defs>
        <style></style>
      </defs>
      <path
        fill="currentColor"
        d="M18,8A10,10,0,1,0,28,18,10,10,0,0,0,18,8Zm0,18.065A8.065,8.065,0,1,1,26.065,18,8.062,8.062,0,0,1,18,26.065Zm2.492-4.21-3.423-2.488a.487.487,0,0,1-.2-.391V12.355a.485.485,0,0,1,.484-.484h1.29a.485.485,0,0,1,.484.484v5.714l2.694,1.96a.484.484,0,0,1,.1.677l-.758,1.044a.487.487,0,0,1-.677.1Z"
        transform="translate(-8 -8)"
      />
    </svg>
  );
}
const fetchMyOrder = async () => {
  const jwt = localStorage.getItem("accessToken");
  const resp = await fetch(`${API_PATH}/v1/orders`, {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });
  const json = await resp.json();
  console.log(json);
  return json;
};
export default Order;
