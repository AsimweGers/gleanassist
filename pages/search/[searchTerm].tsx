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
        <title>Search Anything On Uquicks.com</title>
        <meta
          name="keywords"
          content="search kasese uquicks ,SEO tools, Graphics design Tools, Tour Advisor tools, hotel advisor tools and much more Uquicks.com, Kasese News Updates, Kasese Technology, Loans in Kasese, Insurance in Kasese, Make Money Kasese, Kasese Entertainment, Free Data Kasese,how to see my ubteb results online, how to see my uneb results online,how to see my unmeb results online, Services at Free Costs in Kasese, Rwenzori tv live Rwenzori tv live streaming,"
        />
        <meta
          name="description"
          content="Search what you are Looking for on uquicks.com Here"
        />
        <meta property="og:title" content="Search Anything On Uquicks.com" />
        <link rel="icon" href="/uquicks-logo.png" />
        <meta name="viewport" content="initial-scale=1,width=device-width" />
        <meta name="theme-color" content="#000000" />
        <meta name="msvalidate.01" content="636CB3ADD97C4DABBF11D6B5656DB622" />
        <link rel="manifest" href="/manifest.json" />
        <link href="/static/css/2.a844480a.chunk.css" rel="stylesheet" />
        <link href="/static/css/main.283a044d.chunk.css" rel="stylesheet" />
      </Head>
      <div className="w-full px-2 ">
        <div className="flex gap-10 mb-10 border-b-2 border-gray-200 md:fixed z-50 bg-white w-full">
          <p>Uquicks.com</p>
          <p>Search Results</p>
        </div>
        <div className="md:mt-16">
          <div className=" flex gap-3 p-2 cursor-pointer font-semibold rounded border-b-2 border-gray-200">
            <div></div>
            <div>
              <div>
                <p className="flex gap-1 items-center text-lg font-bold text-primary"></p>
                <p className="capitalize text-gray-400 text-sm"></p>
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
