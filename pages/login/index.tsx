import { useEffect } from "react";
import { useRouter } from "next/router";

import { API_PATH } from "../../env";
export default function Login() {
  const route = useRouter();
  // without login page
  useEffect(() => {
    loginCall()
      .then((t) => {
        console.log("set accessToken");
        localStorage.setItem("accessToken", t);
        route.push("/");
      })
      .catch((err: Error) => {
        console.error("login Err", err);
      });
    console.log("login calling");
  }, [route]);
  return <div>this is login page</div>;
}
const loginCall = async () => {
  //  call but got 500 error
  //   const resp = await fetch(`${API_PATH}/v1/auth/register`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       fullName: "seekster",
  //       username: "seekster",
  //       password: "seekster",
  //     }),
  //   });
  //   const json = await resp.json();
  //   console.log("json", json);
  return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzFjZTVlYjI0M2MzMmIwMDhiMmQwNDIiLCJpYXQiOjE2NjI4MzgyNTEsImV4cCI6MTY2Mjg3NDI1MX0.0b2ldFkVzeAMdaCHV6ax_t0k0nGUq3DCUWz4Ta9nCDQ";
};
