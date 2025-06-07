const addTranslationFilter = (key, lang) => {
  const translations = {
    en: {
      profession: "Filmmaker, writer",
    },
    fr: {
      profession: "Cinéaste, écrivaine", 
    }
  };
  return translations[lang] && translations[lang][key] ? translations[lang][key] : key;
};

module.exports = (eleventyConfig) => {
  eleventyConfig.addFilter('t', addTranslationFilter);
  eleventyConfig.addPassthroughCopy("styles.css");
  eleventyConfig.addPassthroughCopy("media/");
  eleventyConfig.addPassthroughCopy("build/");
  
  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
