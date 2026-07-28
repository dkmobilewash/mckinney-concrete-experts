/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://mckinneyconcreteexperts.com",
  generateRobotsTxt: true,
  changefreq: "monthly",
  priority: 0.7,
  additionalPaths: async () => {
    const serviceSlugs = [
      "driveways",
      "patios",
      "pool-decks",
      "block-walls",
      "foundations-slabs",
      "commercial-concrete",
    ];

    const areaSlugs = [
      "stonebridge-ranch",
      "craig-ranch",
      "trinity-falls",
      "tucker-hill",
      "allen",
      "fairview",
      "celina",
      "anna",
    ];

    const serviceAreaPaths = serviceSlugs.flatMap((service) =>
      areaSlugs.map((area) => ({
        loc: `/services/${service}/${area}`,
        priority: 0.8,
      }))
    );

    return [
      { loc: "/", priority: 1.0, changefreq: "weekly" },
      { loc: "/services", priority: 0.9 },
      ...serviceSlugs.map((s) => ({ loc: `/services/${s}`, priority: 0.9 })),
      ...serviceAreaPaths,
      { loc: "/gallery", priority: 0.8 },
      { loc: "/contact", priority: 0.9 },
      { loc: "/blog", priority: 0.8, changefreq: "weekly" },
      { loc: "/blog/how-long-does-concrete-driveway-last-mckinney-tx", priority: 0.7 },
      { loc: "/blog/stamped-vs-regular-concrete-patio-north-texas", priority: 0.7 },
      { loc: "/blog/concrete-maintenance-tips-texas-summer", priority: 0.7 },
      ...areaSlugs.map((a) => ({ loc: `/service-areas/${a}`, priority: 0.8 })),
    ];
  },
};
