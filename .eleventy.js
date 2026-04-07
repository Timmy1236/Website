module.exports = function (eleventyConfig) {
  // Combinamos todo las entradas del blog y changelog en uno solo para el feed
  eleventyConfig.addCollection("combinedFeed", (collection) => {
    const blog = collection.getFilteredByGlob("src/eleventy/blog/blog-*.md");
    const changelog = collection.getFilteredByGlob("src/eleventy/changelog/update-*.md");

    const combined = [...blog, ...changelog];

    combined.sort((a, b) => b.date - a.date);

    return combined;
  });

  eleventyConfig.addFilter("rssDate", date => {
    return new Date(date).toUTCString();
  });

  // * Changelog
  eleventyConfig.addCollection("changelog", collection =>
    collection.getFilteredByGlob("src/eleventy/changelog/update-*.md").sort((a, b) => b.date - a.date)
  );

  // * Blog
  eleventyConfig.addCollection("blog", collection =>
    collection.getFilteredByGlob("src/eleventy/blog/blog-*.md").sort((a, b) => b.date - a.date)
  );

  // Convertir fechas en fechas legibles para las entradas en changelog y blogs
  eleventyConfig.addFilter("readableDate", date => {
    return new Date(date).toLocaleDateString();
  });

  return {
    pathPrefix: "/content/",
    dir: {
      input: "src/eleventy/",
      output: "public/content",
      includes: "_includes"
    }
  };
};
