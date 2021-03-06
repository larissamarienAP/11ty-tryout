module.exports = function(config) {

    config.addCollection('posts', collection => {
      return collection.getFilteredByGlob('src/site/posts/*.md');
    });

    return {
      dir: {
        input:"src/site",
        output:"dist",
        includes: "templates",
      },
      templateFormats: ["html", "md", "css"],
      htmlTemplateEngine: "liquid",
      markdownTemplateEngine: "liquid"
    };

}
