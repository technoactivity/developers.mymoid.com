import * as path from 'path'
import externalLinks from 'remark-external-links'

const STATIC = path.resolve(__dirname, 'static')
const SRC = path.resolve(__dirname, 'src')

export default {
  title: 'Mymoid Developers',
  description: 'Some amazing slogan',
  base: '/docs',
  theme: 'src/theme/index',
  typescript: true,
  propsParser: false,
  mdPlugins: [externalLinks],
  ignore: ['**/blog/**', 'site-map.md', 'readme.md', 'src/theme/**'],
  public: './public',
  htmlContext: {
    favicon: '/public/images/favicon.png',
  },
  menu: [
    {
      name: 'Getting Started',
      menu: [
        'How mymoid works',
      ],
    },
  ],
  onCreateWebpackChain: config => {
    config.resolve.alias
      .set('@fonts', `${STATIC}/fonts`)
      .set('@images', `${STATIC}/images`)
      .set('@components', `${SRC}/theme/components`)
      .set('@styles', `${SRC}/theme/styles`)

    return config
  },
}
