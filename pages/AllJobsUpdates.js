import Head from "next/head";
import React from "react";
import { Jobs } from "../components";
import { client } from "../lib/client";

const AllJobsUpdates = ({ jobposts }) => (
  <>
    <Head>
      <title>Find Your Dream Job Here | GleanAssist</title>
      <meta
        name="keywords"
        content="GleanAssist, Jobs in Uganda,Jobs in Kampala, GleanAssist,quicks,quick, quicks.com, GleanAssist, Kasese News Updates, Kasese Technology, Loans in Kasese, Insurance in Kasese, Make Money Kasese, Kasese Entertainment, Free Data Kasese,how to see my ubteb results online, how to see my uneb results online,how to see my unmeb results online, Services at Free Costs in Kasese, Rwenzori tv live Rwenzori tv live streaming,"
      />
      <meta
        name="description"
        content="Get the latest job opportunities in Uganda. Find your dream with your profile in front of the right employer here at GleanAssist"
      />
      <meta
        property="og:title"
        content="Find Your Dream Job Here | GleanAssist"
      />
      <link rel="icon" href="/gleanassist.png" />
    </Head>
    <div className="p-2">
      <div className="products-heading">
        <h2 className="">All Jobs Updates</h2>
        <p>
          Engineering Jobs | Health Services Jobs | Accountants Jobs | Abroad
          Jobs | Government Jobs | Much More
        </p>
      </div>

      <div className="products-container">
        {jobposts?.map((jobpost) => (
          <Jobs key={jobposts._id} jobpost={jobpost} />
        ))}
      </div>
    </div>
  </>
);

export const getServerSideProps = async () => {
  const query =
    '*[_type == "jobposts" && publishedAt < now()] | order(publishedAt desc)';
  const jobposts = await client.fetch(query);

  return {
    props: {
      jobposts,
    },
  };
};

export default AllJobsUpdates;
