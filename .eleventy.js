const markdownItEmoji = require("markdown-it-emoji");


module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/imgs");

  eleventyConfig.addFilter("renderRichTextAsHtml", (value) =>
    documentToHtmlString(value)
  );

  // Watch CSS files for changes
  eleventyConfig.setBrowserSyncConfig({
    files: './_site/css/**/*.css'
  });
  
  eleventyConfig.addPassthroughCopy("css");

  /**************** Markdown Plugins********************/
  let markdownIt = require("markdown-it");
  var markdownItAttrs = require('markdown-it-attrs');
  let options = {
    html: true,
    breaks: true,
    linkify: true
  };
  let markdownLib = markdownIt(options).use(markdownItAttrs);
  eleventyConfig.setLibrary("md", markdownLib);
  eleventyConfig.amendLibrary("md", mdLib => mdLib.use(markdownItEmoji));
  return {
    passthroughFileCopy: true,
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }

  };
  /**************** END Markdown Plugins********************/
  return {
    passthroughFileCopy: true,
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }

  };
};