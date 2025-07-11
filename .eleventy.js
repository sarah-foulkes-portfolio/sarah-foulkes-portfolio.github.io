const addTranslationFilter = (key, lang) => {
  const translations = {
    en: {
      about_content: 'Some information about Sarah Foulkes.',
      profession: "Filmmaker, writer",
    },
    fr: {
      profession: "Cinéaste, écrivaine",
      about_content: 'Quelques infos à propos de Sarah Foulkes.',
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
