module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("imgs");

  eleventyConfig.addFilter("renderRichTextAsHtml", (value) =>
    documentToHtmlString(value)
  );
};