import { useCallback } from "react";
import useRouter from "next/router";

import Container from "../components/container";
import Banner from "../components/banner";
import Nav from "../components/navigationBar";
import Auth from "../components/Login/auth";
import Service from "../components/service";
import { API_PATH } from "../env";

type Service = {
  _id: string;
  name: string;
  price: number;
  picture: string;
  description: string;
};

type Props = {
  services: Service[];
};
export default function Home({ services }: Props) {
  const router = useRouter;
  const handleServiceClick = useCallback(
    (id: string) => {
      router.push("/services/" + id);
    },
    [router]
  );
  return (
    <>
      <Auth>
        <Container>
          <div className="absolute z-10 right-0 z-10">
            <Nav />
          </div>
          <Banner />
          <div className="md:px-20 md:pb-12">
            <div className="md:my-12 text-2xl text-gray-600">งานบริการ</div>
            <div className="grid md:grid-cols-3 gap-y-9">
              {services.map((s) => (
                <Service
                  key={s._id}
                  imgSrc={s.picture}
                  id={s._id}
                  name={s.name}
                  price={s.price}
                  onClick={() => {
                    handleServiceClick(s._id);
                  }}
                />
              ))}
            </div>
          </div>
        </Container>
      </Auth>
    </>
  );
}
export const getServerSideProps = async () => {
  const services = await getAllServices();
  return {
    props: { services },
  };
};

async function getAllServices() {
  const resp = await fetch(`${API_PATH}/v1/services`);
  const json = await resp.json();
  return json;
}
