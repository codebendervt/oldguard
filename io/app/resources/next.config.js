const path = require('path');
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
      },)
     

      // config.resolve.alias['sauveur_style'] = path.join(__dirname, 'core/styles/');
      // config.resolve.alias['sauveur_images'] = path.join('public/images/');
      // config.resolve.alias['sauveur_core'] = path.join(__dirname, 'core/technical/core/');
      // config.resolve.alias['sauveur_technical'] = path.join(__dirname, 'core/technical/');
      // config.resolve.alias['sauveur_elements'] = path.join(__dirname, 'core/technical/elements');
      // config.resolve.alias['sauveur_design'] = path.join(__dirname, 'core/design/');

    //   config.resolve.modules.push = {
         
    //         alias: {
    //             sauveur_core: path.resolve('./core/technical/core/'),
    //             sauveur_style: path.resolve('./core/styles/')
    //           }
          
      
    //     };

      // Important: return the modified config
      return config
    },
    pwa:{
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
  })

