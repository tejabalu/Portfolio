module.exports = {
  images: {
    domains: [
      "dl.airtable.com",
      "images.unsplash.com",
      "s3.us-west-2.amazonaws.com",
      "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/",
      "raw.githubusercontent.com",
      "https://github.com/tejabalu/Portfolio/blob/master/blogimages",
      "github.com",
    ],
    minimumCacheTTL: 31536000,
  },

  module: {
    loaders: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
    ],

    preLoaders: [
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { test: /\.js$/, loader: "source-map-loader" },
    ],
  },
  // webpack: (config, { isServer }) => {
  //   // console.log({ config });
  //   // Fixes npm packages that depend on `fs` module
  //   if (!isServer) {
  //     config.node = { fs: "empty" };
  //   }
  //   return config;
  // },
};
