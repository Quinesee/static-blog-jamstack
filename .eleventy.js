const { DateTime } = require('luxon');

module.exports = function(eleventyConfig) {
  //move css over to build folder
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/style.css");
  eleventyConfig.addPassthroughCopy("src/admin");

  //https://11ty.rocks/eleventyjs/dates/
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  eleventyConfig.addShortcode("imageWithCaption", (imageUrl, caption) => {
    return `
    <figure>
    <img src="${imageUrl}">
    <figcaption>${caption}</figcaption>
    </figure>
    `;
  });

  //post date filter
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};