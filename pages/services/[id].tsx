import React from "react";
import { useRouter } from "next/router";

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

  return (
    <>
      {!pageReady ? null : (
        <Auth>
          <Detail serviceId={serviceId} />
        </Auth>
      )}
    </>
  );
}
