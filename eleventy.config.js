module.exports = function (eleventyConfig) {
  // Static assets — copied straight to _site/
  eleventyConfig.addPassthroughCopy('css');
  eleventyConfig.addPassthroughCopy('js');
  eleventyConfig.addPassthroughCopy('images');
  eleventyConfig.addPassthroughCopy('favicon.ico');

  return {
    pathPrefix: '/Website/',
    dir: {
      input: 'src',
      includes: '_includes',
      output: '_site',
    },
  };
};
