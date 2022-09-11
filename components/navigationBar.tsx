import Link from "next/link";
const navigationBar = () => {
  return (
    <div className="right-0 z-10 flex flex-row justify-end items-center gap-x-10 mr-4 mt-4 md:mr-[184px] md:mt-10 cursor-pointer">
      <Link href="/">
        <p style={{ color: "#17204d" }}>บริการ</p>
      </Link>
      <Link href="/orders">
        <p style={{ color: "#17204d" }}>รายการ</p>
      </Link>
    </div>
  );
};

export default navigationBar;
