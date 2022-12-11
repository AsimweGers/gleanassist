import React from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>About Us | Uquicks.com</title>
        <meta
          name="keywords"
          content="uquick, uquicks, uquicks.com,quicks,quick, quicks.com, Uquicks.com, Kasese News Updates, Kasese Technology, Loans in Kasese, Insurance in Kasese, Make Money Kasese, Kasese Entertainment, Free Data Kasese,how to see my ubteb results online, how to see my uneb results online,how to see my unmeb results online, Services at Free Costs in Kasese, Rwenzori tv live Rwenzori tv live streaming,"
        />
        <meta
          name="description"
          content="Uquicks is a combination of a Blog, Online Shop, and Tools Websites for Uganda. its meant to make your life easy and smart through its services like finding you jobs, latest news, shopping online, free tools like seo tool, graphics tools and much more"
        />
        <meta property="og:title" content="About Us | Uquicks.com" />
        <link rel="icon" href="/uquicks-logo.png" />
        <meta name="viewport" content="initial-scale=1,width=device-width" />
        <meta charset="utf-8" />
        <meta name="theme-color" content="#000000" />
        <meta name="msvalidate.01" content="636CB3ADD97C4DABBF11D6B5656DB622" />
        <link rel="manifest" href="/manifest.json" />
        <link href="/static/css/2.a844480a.chunk.css" rel="stylesheet" />
        <link href="/static/css/main.283a044d.chunk.css" rel="stylesheet" />
      </Head>
      <div className="transition duration-500 ease transform hover:-translate-y-1 px-2 mt-4 items-center flex flex-col">
        <div className="text-center mb-4 text-3xl justify-center transition duration-500 ease transform hover:-translate-y-1 inline-block items-center lg:items-center bg-gray-400 rounded-full px-4 py-3">
          <h1> About Uquicks </h1>
        </div>
        <div className=" transition duration-500 ease transform hover:-translate-y-1  inline-block">
          <h2 className="border-4 p-2 text-xl  mb-4">
            Uquicks.com finds its strength in giving the best help online like
            finding jobs, building free tools for you like graphics Designing
            tools, tour advisor tools for uganda, hotel advisor tools, new
            updates, tech posts, make money online posts Sports, insurance,
            finding appropriate loan apps for you and much more
          </h2>
          <div></div>
          <p className="text-xl border-4 p-2">
            Uquicks.com is a fully equiped combinatyion of Blog, ecommerce and
            tools website that provides You with all the current job updates,
            latest tech blog post, make money posts, buy and sell online tool,
            travel advisor tool, hotel advisor tool and more
          </p>
          <p className="text-xl border-4 p-2">
            Uquicks.com was created by{" "}
            <a
              style={{ color: "skyblue" }}
              href="https://joshcreativeprogrammer.netlify.app"
              target="_blank"
            >
              Bwambale Joshua
            </a>{" "}
            The C.E.O for the love of Uganda to the world.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
