module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy({
    "./input/assets/styles": "styles/",
    "./input/assets/images": "/img/",
    "./input/assets/fonts": "/fonts/",
    "./input/js": "/js/",
  });

  return {
    dir: {
      input: "./input/pages/",
      output: "output",
      includes: "../_partials",
      layouts: "../_layouts",
      data: "../_data",
    },
  };
};
