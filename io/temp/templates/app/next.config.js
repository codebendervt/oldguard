const data = require('./utils/urls');
const withPWA = require('next-pwa')

module.exports = withPWA({
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config



    config.module.rules.push({
      test: /\.(png|jpe?g|gif)$/i,
      use: [
        {
          loader: 'file-loader',
        },
      ],
    })

    return config
  },
  pwa: {
    dest: "public"
  },
  // async redirects() {
  //   return [
  //     {
  //       source: '/status?success',
  //       destination: '/',
  //       permanent: true,
  //     },
  //   ]
  // }
}, {
  trailingSlash: true,
  exportPathMap: async function () {
    const { projects } = data;
    const paths = {
      '/': { page: '/' },
    };

    projects.forEach((project) => {
      paths[`/${project.slug}`] = {
        page: '[path]',
        query: { path: project.slug },
      };
    });

    return paths;
  },
})

