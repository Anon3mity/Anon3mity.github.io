workbox generateSW workbox-config.jsmodule.exports = {
  "globDirectory": "_site/",
  "globPatterns": [
    "**/*.{html,css,jpeg,png,js,xml,json,txt}"
  ],
  "swDest": "_site/sw.js"
};