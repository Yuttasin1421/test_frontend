import Image from "next/image";
import housewife from "../assets/images/housewife.png";

const Banner = () => {
  return (
    <div className="relative bg-red-900 w-full h-auto">
      <div className="relative">
        <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 flex flex-col items-center justify-center md:gap-y-10">
          <p className="md:text-4xl text-gray-600">คำบรรยายต่างๆ นานา</p>
          <p className="text-center text-gray-600">
            เรามีบริการที่ครอบคลุม พร้อมที่จะช่วยเหลือคุณใน
            ทุกๆด้านอย่างที่คุณต้องการ
          </p>
        </div>
        <Image alt="banner" src={housewife} layout="responsive" />
      </div>
    </div>
  );
};

export default Banner;
