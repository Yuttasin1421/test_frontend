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
  //    call but got 500 error
  const resp = await fetch(`${API_PATH}/v1/auth/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: "test_seekster",
      password: "test_seekster",
    }),
  });
  const json = await resp.json();
  console.log("json", json);
  return json.accessToken;
};
