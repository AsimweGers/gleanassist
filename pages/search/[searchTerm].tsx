import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { GoVerified } from "react-icons/go";
import Link from "next/link";
import Head from "next/head";

const Search = () => {
  const router = useRouter();
  const { searchTerm }: any = router.query;

  return (
    <>
      <Head>
        <title>Search Anything On GleanAssist</title>
        <meta
          name="keywords"
          content="search kasese GleanAssist ,SEO tools, Graphics design Tools, Tour Advisor tools, hotel advisor tools and much more GleanAssist, Kasese News Updates, Kasese Technology, Loans in Kasese, Insurance in Kasese, Make Money Kasese, Kasese Entertainment, Free Data Kasese,how to see my ubteb results online, how to see my uneb results online,how to see my unmeb results online, Services at Free Costs in Kasese, Rwenzori tv live Rwenzori tv live streaming,"
        />
        <meta
          name="description"
          content="Search what you are Looking for on GleanAssist Here"
        />
        <meta property="og:title" content="Search Anything On GleanAssist" />
        <link rel="icon" href="/gleanassist.png" />
      </Head>
      <div className="w-full px-2 ">
        <div className="flex gap-10 mb-10 border-b-2 border-gray-200 md:fixed z-50 bg-white w-full">
          <p>GleanAssist</p>
          <p>Search Results</p>
        </div>
        <div className="md:mt-16">
          <div className=" flex gap-3 p-2 cursor-pointer font-semibold rounded border-b-2 border-gray-200">
            <div>
              <div>
                <p className="flex gap-1 items-center text-lg font-bold text-primary"></p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:mt-16 flex flex-wrap gap-6 md:justify-start ">
          No Resluts Founds, Please Try Again
        </div>
      </div>
    </>
  );
};

export default Search;
