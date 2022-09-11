import React, { useCallback } from "react";
import { useRouter } from "next/router";

import { API_PATH } from "../../env";
import Auth from "../../components/Login/auth";
import Detail from "../../components/details";

export default function DisplayDetail() {
  const router = useRouter();
  const [serviceId, setId] = React.useState("");
  const [pageReady, setPageReady] = React.useState(false);

  React.useEffect(() => {
    setId(router.query.id as string);
    setPageReady(true);
  }, [router]);
  const handleReserve = useCallback(async () => {
    console.log("serviceId Reserve", serviceId);
    const jwt = localStorage.getItem("accessToken");
    const resp = await fetch(`${API_PATH}/v1/services/${serviceId}/booking`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    const json = await resp.json();

    if (resp.status !== 200) {
      alert("booking error");
    } else {
      router.push("/orders");
    }
    console.log("json", json);
  }, [serviceId, router]);
  return (
    <>
      {!pageReady ? null : (
        <Auth>
          <Detail onReserveClick={handleReserve} serviceId={serviceId} />
        </Auth>
      )}
    </>
  );
}
