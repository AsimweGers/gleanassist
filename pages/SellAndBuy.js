import Head from "next/head";
import React from "react";
import { Sells } from "../components";
import { client } from "../lib/client";

const SellAndBuy = ({ sellposts }) => (
  <>
    <Head>
      <title>Sell and Buy Anything Here | Uquicks.com</title>
      <meta
        name="keywords"
        content="sell anything in kasese, buy online kasese, SEO tools, Graphics design Tools, Tour Advisor tools, hotel advisor tools and much more Uquicks.com, Kasese News Updates, Kasese Technology, Loans in Kasese, Insurance in Kasese, Make Money Kasese, Kasese Entertainment, Free Data Kasese,how to see my ubteb results online, how to see my uneb results online,how to see my unmeb results online, Services at Free Costs in Kasese, Rwenzori tv live Rwenzori tv live streaming,"
      />
      <meta
        name="description"
        content="Sell Or Buy anything on uquicks, makes life easy. sell laptops, phones, cars, gadgets first or second class here, let's connect"
      />
      <meta
        property="og:title"
        content="Sell and Buy Anything Here | Uquicks.com"
      />
      <link rel="icon" href="/uquicks-logo.png" />
      <meta name="viewport" content="initial-scale=1,width=device-width" />
      <meta charset="utf-8" />
      <meta name="theme-color" content="#000000" />
      <meta name="msvalidate.01" content="636CB3ADD97C4DABBF11D6B5656DB622" />
      <link rel="manifest" href="/manifest.json" />
      <link href="/static/css/2.a844480a.chunk.css" rel="stylesheet" />
      <link href="/static/css/main.283a044d.chunk.css" rel="stylesheet" />
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
