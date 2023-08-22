module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/imgs");

  eleventyConfig.addFilter("renderRichTextAsHtml", (value) =>
    documentToHtmlString(value)
  );

  module.exports = function(eleventyConfig) {
    // Watch CSS files for changes
    eleventyConfig.setBrowserSyncConfig({
      files: './_site/css/**/*.css'
    });
  };
};