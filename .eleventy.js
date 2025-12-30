const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {
  // Copy static assets to output
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("LICENSE");
  eleventyConfig.addPassthroughCopy("LICENSE.txt");
  
  // Add syntax highlighting plugin
  eleventyConfig.addPlugin(syntaxHighlight);
  
  // Watch for CSS changes
  eleventyConfig.addWatchTarget("./assets/css/");
  
  // Create a collection for blog posts
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("_posts/*.markdown").reverse();
  });

  // Add date filter for post dates
  eleventyConfig.addFilter("date", function(date, format) {
    const d = new Date(date);
    if (format === "date_to_string") {
      return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
    }
    return d.toISOString();
  });

  // Add relative_url filter for Jekyll compatibility
  eleventyConfig.addFilter("relative_url", function(url) {
    return url;
  });

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data"
    },
    templateFormats: ["html", "md", "njk", "liquid"],
    htmlTemplateEngine: "liquid",
    markdownTemplateEngine: "liquid"
  };
};
