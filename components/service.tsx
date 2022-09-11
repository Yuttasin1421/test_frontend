import Image from "next/image";

type Props = {
  imgSrc: string;
  id: string;
  name: string;
  price: number;
  onClick: () => void;
  children?: React.ReactNode;
};
const service = (props: Props) => {
  return (
    <div
      className="relative rounded-xl shadow-xl hover:shadow-2xl w-48 h-48 text-gray-800 overflow-hidden cursor-pointer"
      style={{ width: "341px", height: "270px" }}
      onClick={props.onClick}
    >
      <div className="relative w-full " style={{ height: "200px" }}>
        <Image
          loader={() => props.imgSrc}
          src={props.imgSrc}
          unoptimized={true}
          alt="service_picture"
          layout="fill"
        />
      </div>
      <div className="flex flex-row" style={{ height: "70px" }}>
        <div className="px-2 w-1/2 my-auto h-full flex items-center text-sm">
          {props.name}
        </div>
        <div className="px-2 w-1/2 my-auto h-full flex items-center justify-end text-sm gap-x-2 pr-2">
          <span className="text-yellow-500 text-md">เริ่มต้น</span>
          <span className="text-blue-500 text-xl">฿</span>
          <span className="text-blue-500 text-xl">{props.price}</span>
        </div>
      </div>
    </div>
  );
};

export default service;
