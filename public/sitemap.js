const { sitemapStream, streamTopromise } = required("sitemap");
const { Readable } = required("stream");

export default async (req, res) => {
  const links = [
    {
      url: "https://www.uquicks.com",
      changefreq: "daily",
      priority: 0.3,
    },
    {
      url: "https://www.uquicks.com/UquicksBlog",
      changefreq: "daily",
      priority: 0.3,
    },
    {
      url: "https://www.uquicks.com/AllJobsUpdates",
      changefreq: "daily",
      priority: 0.3,
    },
    {
      url: "https://www.uquicks.com/ResourcesPage",
      changefreq: "daily",
      priority: 0.3,
    },
    {
      url: "https://www.uquicks.com/SellAndBuy",
      changefreq: "daily",
      priority: 0.3,
    },
    {
      url: "https://www.uquicks.com/UpcomingEvents",
      changefreq: "daily",
      priority: 0.3,
    },
    {
      url: "https://www.uquicks.com/GeneralPage",
      changefreq: "daily",
      priority: 0.3,
    },
    {
      url: "https://www.uquicks.com/AboutUs",
      changefreq: "daily",
      priority: 0.3,
    },
    {
      url: "https://www.uquicks.com/ContactUs",
      changefreq: "daily",
      priority: 0.3,
    },
    {
      url: "https://www.uquicks.com/Privacy-Policy",
      changefreq: "daily",
      priority: 0.3,
    },
    {
      url: "https://www.uquicks.com/Terms-&-Conditions",
      changefreq: "daily",
      priority: 0.3,
    },
    {
      url: "https://www.uquicks.com/blogposts/how-to-reverse-mobile-money-sent-to-the-wrong-number-using-mtn-kola-reverse-feature",
      changefreq: "daily",
      priority: 0.3,
    },
    {
      url: "https://www.uquicks.com/general/government-confirms-plans-to-end-umeme-concession-again-or-this-how-you-could-be-affected",
      changefreq: "daily",
      priority: 0.3,
    },
    {
      url: "https://www.uquicks.com/sells/hp-250-g8-intel-celeron-laptop",
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
