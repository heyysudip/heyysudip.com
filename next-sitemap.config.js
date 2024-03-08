const { siteConfig } = require("./config/site");

module.exports = {
  siteUrl: siteConfig.url,
  generateRobotsTxt: true,
};
