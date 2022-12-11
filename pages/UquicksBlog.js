import Head from "next/head";
import React from "react";
import { Blog } from "../components";
import { client } from "../lib/client";

const UquicksBlog = ({ latestposts }) => (
  <>
    <Head>
      <title>Latest Posts | Uquicks.com</title>
      <meta
        name="keywords"
        content="Welcome to avariety of Blog posts like make money online,free internet, data tricks, tech posts, quick loan tutorials, insurance, electricity, anotrny, mortage and much more, sell anything in kasese, buy online kasese, SEO tools, Graphics design Tools, Tour Advisor tools, hotel advisor tools and much more Uquicks.com, Kasese News Updates, Kasese Technology, Loans in Kasese, Insurance in Kasese, Make Money Kasese, Kasese Entertainment, Free Data Kasese,how to see my ubteb results online, how to see my uneb results online,how to see my unmeb results online, Services at Free Costs in Kasese, Rwenzori tv live Rwenzori tv live streaming,"
      />
      <meta
        name="description"
        content="Welcome to avariety of latest Blog posts like make money online,free internet, data tricks, tech posts, quick loan tutorials, insurance, electricity, anotrny, mortage and much more"
      />
      <meta property="og:title" content="Latest Posts | Uquicks.com" />
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
      <div className="products-heading">
        <h2>Recent Posts</h2>
        <p>
          How to's | Free Internet | Make Money Online | Electricity | Sports |
          Health | Science | Tech | Insurance | Loans | Mortgage | Antorny
        </p>
      </div>

      <div className="products-container">
        {latestposts?.map((latestpost) => (
          <Blog key={latestposts._id} latestpost={latestpost} />
        ))}
      </div>
    </div>
  </>
);

export const getServerSideProps = async () => {
  const query =
    '*[_type == "latestposts" && publishedAt < now()] | order(publishedAt desc)';
  const latestposts = await client.fetch(query);

  return {
    props: {
      latestposts,
    },
  };
};

export default UquicksBlog;
