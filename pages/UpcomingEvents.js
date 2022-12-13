import Head from "next/head";
import React from "react";
import { FooterBanner } from "../components";
import { client } from "../lib/client";

const UpcomingEventsPage = ({ upcomingevents }) => (
  <>
    <Head>
      <title>Upcoming Events | GleanAssist</title>
      <meta
        name="keywords"
        content="Welcome to Latest and upcoming events in uganda - rwenzori region and abroad events, Welcome to avariety of Blog posts like make money online,free internet, data tricks, tech posts, quick loan tutorials, insurance, electricity, anotrny, mortage and much more, sell anything in kasese, buy online kasese, SEO tools, Graphics design Tools, Tour Advisor tools, hotel advisor tools and much more GleanAssist, Kasese News Updates, Kasese Technology, Loans in Kasese, Insurance in Kasese, Make Money Kasese, Kasese Entertainment, Free Data Kasese,how to see my ubteb results online, how to see my uneb results online,how to see my unmeb results online, Services at Free Costs in Kasese, Rwenzori tv live Rwenzori tv live streaming,"
      />
      <meta
        name="description"
        content="Welcome to Latest and upcoming events in uganda - rwenzori region and abroad events"
      />
      <meta property="og:title" content="Upcoming Events | GleanAssist" />
      <link rel="icon" href="/gleanassist.png" />
      <meta name="viewport" content="initial-scale=1,width=device-width" />
      <meta charset="utf-8" />
      <meta name="theme-color" content="#000000" />
      <meta name="msvalidate.01" content="636CB3ADD97C4DABBF11D6B5656DB622" />
      <link rel="manifest" href="/manifest.json" />
      <link href="/static/css/2.a844480a.chunk.css" rel="stylesheet" />
      <link href="/static/css/main.283a044d.chunk.css" rel="stylesheet" />
    </Head>
    <div className="p-2 flex flex-col items-center">
      <div className="products-heading">
        <h2 className="">UpComing Events</h2>
        <p>
          Festivals | Holidays | Concerts | Programs | Business | Across the
          World
        </p>
      </div>

      <div className="products-container">
        {upcomingevents?.map((upcomingevent) => (
          <FooterBanner
            key={upcomingevents._id}
            upcomingevent={upcomingevent}
          />
        ))}
      </div>
    </div>
  </>
);

export const getServerSideProps = async () => {
  const query =
    '*[_type == "upcomingevents" && publishedAt < now()] | order(publishedAt desc)';
  const upcomingevents = await client.fetch(query);

  return {
    props: {
      upcomingevents,
    },
  };
};

export default UpcomingEventsPage;
