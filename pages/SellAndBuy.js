import Head from "next/head";
import React from "react";
import { Sells } from "../components";
import { client } from "../lib/client";

const SellAndBuy = ({ sellposts }) => (
  <>
    <Head>
      <title>Sell and Buy Anything Here | GleanAssist</title>
      <meta
        name="keywords"
        content="sell anything in kasese, buy online kasese, SEO tools, Graphics design Tools, Tour Advisor tools, hotel advisor tools and much more GleanAssist, Kasese News Updates, Kasese Technology, Loans in Kasese, Insurance in Kasese, Make Money Kasese, Kasese Entertainment, Free Data Kasese,how to see my ubteb results online, how to see my uneb results online,how to see my unmeb results online, Services at Free Costs in Kasese, Rwenzori tv live Rwenzori tv live streaming,"
      />
      <meta
        name="description"
        content="Sell Or Buy anything on GleanAssist, makes life easy. sell laptops, phones, cars, gadgets first or second class here, let's connect"
      />
      <meta
        property="og:title"
        content="Sell and Buy Anything Here | GleanAssist"
      />
      <link rel="icon" href="/gleanassist.png" />
    </Head>

    <div className="p-2">
      <div className=" flex flex-wrap bg-gray-300 justify-center">
        <h2 className="text-twitter font-semibold text-lg p-2">
          Best Selling Products
        </h2>
      </div>
      <div className="products-container">
        {sellposts?.map((sellpost) => (
          <Sells key={sellposts._id} sellpost={sellpost} />
        ))}
      </div>
    </div>
  </>
);

export const getServerSideProps = async () => {
  const query =
    '*[_type == "sellposts" && publishedAt < now()] | order(publishedAt desc)';
  const sellposts = await client.fetch(query);

  return {
    props: {
      sellposts,
    },
  };
};

export default SellAndBuy;
