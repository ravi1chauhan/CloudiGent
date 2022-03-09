import Head from "next/head";
import SearchBox from "../components/SearchBox";
import FamousPlaces from "../components/FamousPlaces";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Weather App - CloudiGent</title>
      </Head>

      <div className="home">
        <div className="container">
          <SearchBox placeholder="Search for a city..." />
          <FamousPlaces />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}
