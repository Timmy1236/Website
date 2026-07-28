export default async function (eleventyConfig) {
  const locales = ["es", "en"];

  // Globales
  // --------
  eleventyConfig.addGlobalData("locales", locales);

  eleventyConfig.addGlobalData("eleventyComputed", {
    locale: data => data.locale || "es",

    permalink: (data) => {
      if (typeof data.permalink === "string") return data.permalink; // Si ya tiene permalink, ignoramos.

      return `${data.page.filePathStem}/index.html`;
    }
  });

  eleventyConfig.addGlobalData("buildTime", () => {
    return new Date().toISOString().split("T")[0];
  });

  // Collection combinado
  // --------------------
  // Combinado - Español
  eleventyConfig.addCollection("combinedFeed_es", (collection) => {
    const blog = collection.getFilteredByGlob("src/library/eleventy/es/blog/*.md").filter(item => item.data.title !== "Blog");
    const changelog = collection.getFilteredByGlob("src/library/eleventy/es/changelog/*.md").filter(item => item.data.title !== "Changelog");
    const combined = [...blog, ...changelog];

    combined.sort((a, b) => b.date - a.date);

    return combined;
  });
  // Combinado - Ingles
  eleventyConfig.addCollection("combinedFeed_en", (collection) => {
    const blog = collection.getFilteredByGlob("src/library/eleventy/en/blog/*.md").filter(item => item.data.title !== "Blog");
    const changelog = collection.getFilteredByGlob("src/library/eleventy/en/changelog/*.md").filter(item => item.data.title !== "Changelog");
    const combined = [...blog, ...changelog];

    combined.sort((a, b) => b.date - a.date);

    return combined;
  });

  // Collections generales.
  // ----------------------
  eleventyConfig.addCollection("blog", collection =>
    collection
      .getFilteredByGlob("src/library/eleventy/*/blog/*.md")
      .filter(item => item.data.title !== "Blog")
      .sort((a, b) => b.date - a.date)
  );
  eleventyConfig.addCollection("changelog", collection =>
    collection
      .getFilteredByGlob("src/library/eleventy/*/changelog/*.md")
      .filter(item => item.data.title !== "Changelog")
      .sort((a, b) => b.date - a.date)
  );

  // Collections separado por idiomas
  // --------------------------------
  // Blog - Español
  eleventyConfig.addCollection("blog_es", collection =>
    collection
      .getFilteredByGlob("src/library/eleventy/es/blog/*.md")
      .filter(item => item.data.title !== "Blog")
      .sort((a, b) => b.date - a.date)
  );
  // Blog - Ingles
  eleventyConfig.addCollection("blog_en", collection =>
    collection
      .getFilteredByGlob("src/library/eleventy/en/blog/*.md")
      .filter(item => item.data.title !== "Blog")
      .sort((a, b) => b.date - a.date)
  );
  // Changelog - Español
  eleventyConfig.addCollection("changelog_es", collection =>
    collection
      .getFilteredByGlob("src/library/eleventy/es/changelog/*.md")
      .filter(item => item.data.title !== "Changelog")
      .sort((a, b) => b.date - a.date)
  );
  // Changelog - Ingles
  eleventyConfig.addCollection("changelog_en", collection =>
    collection.getFilteredByGlob("src/library/eleventy/en/changelog/*.md")
      .filter(item => item.data.title !== "Changelog")
      .sort((a, b) => b.date - a.date)
  );

  // Filtros
  // -------
  eleventyConfig.addFilter("rssDate", (date) => {
    return new Date(date).toUTCString();
  });

  eleventyConfig.addFilter("readableDate", (date) => {
    return new Date(date).toLocaleDateString();
  });

  eleventyConfig.addFilter("XMLDate", (date) => {
    return new Date(date).toISOString().split("T")[0];
  });

  // Copiar carpeta assets a la carpeta de salida
  // -------------------------------------------
  eleventyConfig.addPassthroughCopy({
    "src/library/eleventy/assets": "assets"
  });

  eleventyConfig.addFilter("uniqueTags", (posts) => {
    const allTags = posts.flatMap(post => post.data.tags || []);
    return [...new Set(allTags)];
  });

  return {
    pathPrefix: "/content/",
    dir: {
      input: "src/library/eleventy/",
      output: "public/content",
      includes: "_includes"
    }
  };
};