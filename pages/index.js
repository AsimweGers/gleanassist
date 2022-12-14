import React from "react";
import { client } from "../lib/client";
import { FooterBanner, Blog, Resources } from "../components";
import Sells from "../components/Sells";
import Jobs from "../components/Jobs";
import Link from "next/link";
import Slider from "../components/Slider";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Head from "next/head";

var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const options = {
  margin: 30,
  responsiveClass: true,
  nav: true,
  dots: true,
  autoplay: true,
  smartSpeed: 1000,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    600: {
      items: 2,
    },
    700: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
};

const Home = ({
  navPageData,
  latestposts,
  jobposts,
  sellposts,
  upcomingevents,
}) => (
  <div className="p-4">
    <Head>
      <title>GleanAssist | Live Better, the smart choice</title>
      <meta
        name="keywords"
        content=" GleanAssist, GleanAssist, GleanAssist, Kasese News Updates, Kasese Technology, Loans in Kasese, Insurance in Kasese, Make Money Kasese, Kasese Entertainment, Free Data Kasese,how to see my ubteb results online, how to see my uneb results online,how to see my unmeb results online, Services at Free Costs in Kasese, Rwenzori tv live Rwenzori tv live streaming,"
      />
      <meta
        name="description"
        content="Get the best Tech | Find Jobs | Sell & Buy Online | Loans | Insurance | Make Money | Free Data | All Helper Tools like SEO tools, Graphics Designing tools at Free Costs"
      />
      <meta
        property="og:title"
        content="GleanAssist | Live Better, the smart choice"
      />
      <link rel="icon" href="/gleanassist.png" />
    </Head>
    <div className="gap-2">
      <div>
        <OwlCarousel
          className="owl-theme"
          loop
          margin={2}
          nav={true}
          navText={[
            '<img src="/back.png" alt="back"/>',
            '<img src="/forward.png" alt="forward"/>',
          ]}
          dots={true}
          animateIn={true}
          {...options}
        >
          {navPageData?.map((navPage) => (
            <Slider key={navPageData._id} navPage={navPage} />
          ))}
        </OwlCarousel>
      </div>

      <div className="products-heading">
        <h2>Blog Posts</h2>
        <p>
          How to's | Insurance | Make Money Online | Jobs Alert | Top Stories |
          Electricity | Cyber Tech | Loans | Mortage | Entertainment
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        {latestposts?.map((latestpost) => (
          <Blog key={latestposts._id} latestpost={latestpost} />
        ))}
      </div>
      <Link href="https://jazzspeechlessarena.com/kyc6qduac?key=3c53c15218562921f4710f4055aebd26">
        <button className=" flex right-28 hover:transition-transform hover:translate-x-3 hover:bg-twitter absolute text-sm font-serif bg-soil px-2 py-1 rounded-2xl items-center text-white">
          View all
        </button>
      </Link>

      <div className="products-heading">
        <h2 className="mt-16">All Jobs Updates</h2>
        <p>
          Engineering Jobs | Health Services Jobs | Accountants Jobs | Abroad
          Jobs | Government Jobs | Much More
        </p>
      </div>

      <div className="flex flex-wrap justify-center">
        {jobposts?.map((jobpost) => (
          <Jobs key={jobposts._id} jobpost={jobpost} />
        ))}
      </div>
      <Link href="https://jazzspeechlessarena.com/kyc6qduac?key=3c53c15218562921f4710f4055aebd26">
        <button className=" flex right-28 hover:transition-transform hover:translate-x-3 hover:bg-twitter absolute text-sm font-serif bg-soil px-2 py-1 rounded-2xl items-center text-white">
          View all
        </button>
      </Link>

      <div className="mt-16 items-center">
        <div className="align-middle items-center flex justify-center bg-gray-300">
          <h2 className="text-twitter font-semibold text-lg p-2 w-fit">
            Best Selling Products
          </h2>
          <Link href="https://jazzspeechlessarena.com/kyc6qduac?key=3c53c15218562921f4710f4055aebd26">
            <button className="hover:transition-transform hover:translate-x-3 hover:bg-twitter absolute text-sm font-serif bg-soil px-2 py-1 rounded-2xl -mt-3 text-white right-4">
              View all
            </button>
          </Link>
        </div>
        <div className="flex flex-wrap justify-center">
          {sellposts?.map((sellpost) => (
            <Sells key={sellposts._id} sellpost={sellpost} />
          ))}
        </div>
      </div>
    </div>

    <div className="products-heading">
      <h2 className="mt-16">UpComing Events</h2>
      <p>
        Festivals | Holidays | Concerts | Programs | Business | Across the World
      </p>
    </div>
    <div className="lg:px-10">
      {upcomingevents?.map((upcomingevent) => (
        <FooterBanner key={upcomingevents._id} upcomingevent={upcomingevent} />
      ))}
    </div>
    <Link href="https://jazzspeechlessarena.com/kyc6qduac?key=3c53c15218562921f4710f4055aebd26">
      <button className=" flex right-28 hover:transition-transform hover:translate-x-3 hover:bg-twitter absolute text-sm font-serif bg-soil px-2 py-1 rounded-2xl items-center text-white">
        View all
      </button>
    </Link>
  </div>
);

export const getServerSideProps = async () => {
  const query =
    '*[_type == "latestposts" && publishedAt < now()] | order(publishedAt desc)';
  const latestposts = await client.fetch(query);

  const navPageQuery = '*[_type == "navPage"]';
  const navPageData = await client.fetch(navPageQuery);

  const jobpostsQuery =
    '*[_type == "jobposts" && publishedAt < now()] | order(publishedAt desc)';
  const jobposts = await client.fetch(jobpostsQuery);

  const resourcesQuery =
    '*[_type == "resources" && publishedAt < now()] | order(publishedAt desc)';
  const resources = await client.fetch(resourcesQuery);

  const sellpostsQuery =
    '*[_type == "sellposts" && publishedAt < now()] | order(publishedAt desc)';
  const sellposts = await client.fetch(sellpostsQuery);

  const upcomingeventsQuery =
    '*[_type == "upcomingevents" && publishedAt < now()] | order(publishedAt desc)';
  const upcomingevents = await client.fetch(upcomingeventsQuery);

  return {
    props: {
      latestposts,
      navPageData,
      jobposts,
      sellposts,
      upcomingevents,
      resources,
    },
  };
};

export default Home;
