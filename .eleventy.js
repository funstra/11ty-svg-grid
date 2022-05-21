const { EleventyEdgePlugin } = require("@11ty/eleventy");
/** @param {import('@11ty/eleventy/src/UserConfig')} config */
module.exports = config => {
  config.addPassthroughCopy("./src/css");

  config.addPlugin(EleventyEdgePlugin);

  config.addNunjucksFilter("rand", ([a, b]) => {
    let val = a + Math.floor(Math.random() * (b - a));
    return val;
  });

  return {
    dir: {
      input: "src",
    },
  };
};
