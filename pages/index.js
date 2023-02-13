import axios from "axios";
import Header from "@/components/header";
import Footer from "@/components/footer";
import styles from "@/styles/Home.module.scss";

export default function Home({ country }) {
  return (
    <>
      <Header country={country} />
      <Footer country={country} />
    </>
  );
}

export async function getServerSideProps() {
  let data = await axios
    .get("https://api.ipregistry.co/?key=r208izz0q0icseks")
    .then((res) => {
      return res.data.location.country;
    })
    .catch((err) => {
      console.log(err);
    });

  return {
    props: {
      country: { name: data.name, flag: data.flag.emojitwo },
    },
  };
}
