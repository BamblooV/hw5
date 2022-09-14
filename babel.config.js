module.exports = function (api) {
  api.cache.using(() => process.env.NODE_ENV);

  const presets = [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-typescript",
    "mobx",
  ];
  const plugins = [
    process.env.NODE_ENV === "development" && "react-refresh/babel",
    "@babel/plugin-proposal-optional-chaining",
  ].filter(Boolean);

  return {
    presets,
    plugins,
  };
};
