module.exports = function (eleventyConfig) {
  eleventyConfig.addCollection("combinedFeed", (collection) => {
    const blog = collection.getFilteredByGlob("src/blog/blog-*.md");
    const changelog = collection.getFilteredByGlob("src/changelog/update-*.md");

    const combined = [...blog, ...changelog];

    combined.sort((a, b) => b.date - a.date);

    return combined;
  });

  eleventyConfig.addFilter("rssDate", date => {
    return new Date(date).toUTCString();
  });

  eleventyConfig.addCollection("changelog", collection =>
    collection.getFilteredByGlob("src/changelog/update-*.md").sort((a, b) => b.date - a.date)
  );

  eleventyConfig.addCollection("blog", collection =>
    collection.getFilteredByGlob("src/blog/blog-*.md").sort((a, b) => b.date - a.date)
  );

  eleventyConfig.addFilter("readableDate", date => {
    return new Date(date).toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  });

  return {
    pathPrefix: "/generated/",
    dir: {
      input: "src",
      output: "website/generated",
      includes: "_includes"
    }
  };
};
