module.exports = function (eleventyConfig) {
  // Static assets — copied straight to _site/
  eleventyConfig.addPassthroughCopy('src/css');
  eleventyConfig.addPassthroughCopy('src/js');
  eleventyConfig.addPassthroughCopy('src/images');
  eleventyConfig.addPassthroughCopy('src/favicon.ico');

  return {
    dir: {
      input: 'src',
      includes: '_includes',
      output: '_site',
    },
  };
};
