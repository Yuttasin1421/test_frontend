// import React from "react";
import { useEffect, useState, ReactNode } from "react";
import { useRouter } from "next/router";

//@ts-ignore
function Auth({ children }) {
  const [loading, setLoading] = useState(true);
  const route = useRouter();
  useEffect(() => {
    setLoading(true);
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken === null) {
      route.push("/login");
    }
    setLoading(false);
  }, [route]);
  return loading ? <div>loading...</div> : <div>{children}</div>;
}

export default Auth;
