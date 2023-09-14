const sortItems = (arr) => {
  const sortedArray = arr.sort((a, b) => {
    return a.data.nav.order - b.data.nav.order;
  });

  return sortedArray;
};

module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy({
    "./input/assets/styles": "/styles/",
    "./input/assets/images": "/img/",
    "./input/assets/fonts": "/fonts/",
    "./input/js": "/js/",
  });

  eleventyConfig.addFilter("sortByOrder", sortItems);

  return {
    dir: {
      input: "./input/pages/",
      output: "output",
      includes: "../_partials",
      layouts: "../_layouts",
      data: "../_data",
      // pathPrefix: "/output/",
    },
  };
};
