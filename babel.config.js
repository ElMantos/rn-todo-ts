module.exports = function(api) {
  api.cache(true);
  return {
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "~": "./src"
          }
        }
      ]
    ],
    presets: ["@babel/preset-typescript", "babel-preset-expo"]
  };
};
