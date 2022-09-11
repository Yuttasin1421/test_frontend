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
    } else {
      const jwt = parseJwt(accessToken);
      const expired = jwt.exp;
      const now = new Date();
      const isExpired = new Date(expired * 1000) < now;
      if (isExpired) {
        route.push("/login");
      }
    }

    setLoading(false);
  }, [route]);
  return loading ? <div>loading...</div> : <div>{children}</div>;
}

const parseJwt = (token: string) => {
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  const buff = Buffer.from(base64, "base64");
  const payloadinit = buff.toString("ascii");
  return JSON.parse(payloadinit);
};

export default Auth;
