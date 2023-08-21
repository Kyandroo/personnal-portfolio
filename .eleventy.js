module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy({
    "./input/assets/styles": "styles/",
    "./input/assets/images": "/img/",
    "./input/assets/fonts": "/fonts/",
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
