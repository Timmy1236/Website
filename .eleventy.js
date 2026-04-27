module.exports = function (eleventyConfig) {
  const locales = ["es", "en"];

  // Globales
  // ========
  eleventyConfig.addGlobalData("locales", locales);

  eleventyConfig.addGlobalData("eleventyComputed", {
    locale: data => data.locale || "es",

    permalink: (data) => {
      if (typeof data.permalink === "string") return data.permalink; // Si ya tiene permalink, ignoramos.

      return `${data.page.filePathStem}/index.html`;
    }
  });


  // Collection combinado (Para el RSS)
  // ==================================
  eleventyConfig.addCollection("combinedFeed", (collection) => {
    const blog = collection.getFilteredByGlob("src/eleventy/*/blog/*.md")
      .filter(item => item.data.title !== "Blog");
    const changelog = collection.getFilteredByGlob("src/eleventy/*/changelog/*.md")
      .filter(item => item.data.title !== "Changelog");

    const combined = [...blog, ...changelog];

    combined.sort((a, b) => b.date - a.date);

    return combined;
  });

  eleventyConfig.addCollection("combinedFeed_es", (collection) => {
    const blog = collection.getFilteredByGlob("src/eleventy/es/blog/*.md")
      .filter(item => item.data.title !== "Blog");
    const changelog = collection.getFilteredByGlob("src/eleventy/es/changelog/*.md")
      .filter(item => item.data.title !== "Changelog");

    const combined = [...blog, ...changelog];

    combined.sort((a, b) => b.date - a.date);

    return combined;
  });

  eleventyConfig.addCollection("combinedFeed_en", (collection) => {
    const blog = collection.getFilteredByGlob("src/eleventy/en/blog/*.md").filter(item => item.data.title !== "Blog");
    const changelog = collection.getFilteredByGlob("src/eleventy/en/changelog/*.md").filter(item => item.data.title !== "Changelog");
    const combined = [...blog, ...changelog];

    combined.sort((a, b) => b.date - a.date);

    return combined;
  });


  // Collections generales.
  // ======================
  eleventyConfig.addCollection("blog", collection =>
    collection
      .getFilteredByGlob("src/eleventy/*/blog/*.md")
      .filter(item => item.data.title !== "Blog") // Ignoramos el index.
      .sort((a, b) => b.date - a.date)
  );

  eleventyConfig.addCollection("changelog", collection =>
    collection
      .getFilteredByGlob("src/eleventy/*/changelog/*.md")
      .filter(item => item.data.title !== "Changelog") // Ignoramos el index.
      .sort((a, b) => b.date - a.date)
  );


  // Collections separado por idiomas
  // ================================
  eleventyConfig.addCollection("blog_es", collection =>
    collection
      .getFilteredByGlob("src/eleventy/es/blog/*.md")
      .filter(item => item.data.title !== "Blog")
      .sort((a, b) => b.date - a.date)
  );

  eleventyConfig.addCollection("blog_en", collection =>
    collection
      .getFilteredByGlob("src/eleventy/en/blog/*.md")
      .filter(item => item.data.title !== "Blog")
      .sort((a, b) => b.date - a.date)
  );

  eleventyConfig.addCollection("changelog_es", collection =>
    collection
      .getFilteredByGlob("src/eleventy/es/changelog/*.md")
      .filter(item => item.data.title !== "Changelog")
      .sort((a, b) => b.date - a.date)
  );

  eleventyConfig.addCollection("changelog_en", collection =>
    collection.getFilteredByGlob("src/eleventy/en/changelog/*.md")
      .filter(item => item.data.title !== "Changelog")
      .sort((a, b) => b.date - a.date)
  );


  // Filtros
  // =======
  eleventyConfig.addFilter("rssDate", date => {
    return new Date(date).toUTCString();
  });

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