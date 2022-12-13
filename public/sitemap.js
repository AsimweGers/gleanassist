const { sitemapStream, streamTopromise } = required("sitemap");
const { Readable } = required("stream");

export default async (req, res) => {
  const links = [
    {
      url: "https://www.gleanassist.xyz",
      changefreq: "daily",
      priority: 0.3,
    },
    {
      url: "https://www.gleanassist.xyz/UquicksBlog",
      changefreq: "daily",
      priority: 0.3,
    },
    {
      url: "https://www.gleanassist.xyz/AllJobsUpdates",
      changefreq: "daily",
      priority: 0.3,
    },
    {
      url: "https://www.gleanassist.xyz/ResourcesPage",
      changefreq: "daily",
      priority: 0.3,
    },
    {
      url: "https://www.gleanassist.xyz/SellAndBuy",
      changefreq: "daily",
      priority: 0.3,
    },
    {
      url: "https://www.gleanassist.xyz/UpcomingEvents",
      changefreq: "daily",
      priority: 0.3,
    },
    {
      url: "https://www.gleanassist.xyz/GeneralPage",
      changefreq: "daily",
      priority: 0.3,
    },
    {
      url: "https://www.gleanassist.xyz/AboutUs",
      changefreq: "daily",
      priority: 0.3,
    },
    {
      url: "https://www.gleanassist.xyz/ContactUs",
      changefreq: "daily",
      priority: 0.3,
    },
    {
      url: "https://www.gleanassist.xyz/Privacy-Policy",
      changefreq: "daily",
      priority: 0.3,
    },
    {
      url: "https://www.gleanassist.xyz/Terms-&-Conditions",
      changefreq: "daily",
      priority: 0.3,
    },
    {
      url: "https://www.gleanassist.xyz/blogposts/how-to-reverse-mobile-money-sent-to-the-wrong-number-using-mtn-kola-reverse-feature",
      changefreq: "daily",
      priority: 0.3,
    },
    {
      url: "https://www.gleanassist.xyz/general/government-confirms-plans-to-end-umeme-concession-again-or-this-how-you-could-be-affected",
      changefreq: "daily",
      priority: 0.3,
    },
    {
      url: "https://www.gleanassist.xyz/sells/hp-250-g8-intel-celeron-laptop",
      changefreq: "daily",
      priority: 0.3,
    },
  ];

  const stream = new sitemapStream({ hostname: `https://${req.headers.host}` });

  res.writHead(200, {
    "content-Type": "application/xml",
  });

  const xmlString = await streamTopromise(
    Readable.from(links).pipe(stream)
  ).then((data) => data.toString());

  res.end(xmlString);
};
