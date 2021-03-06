const webfont = require('webfont').default
const { writeFileSync } = require('fs')
const { join, resolve } = require('path')
const { major, minor, patch } = require('./node_modules/@mdi/svg/font-build.json').version
const userConfig = require(resolve(process.argv[2] || join(process.cwd(), 'fontconfig.json')))

const config = {
  fontFile: 'MaterialIcons',
  formats: ['ttf'],
  fontName: 'Material Design Icons',
  fileName: 'materialdesignicons',
  dest: './',
  ...userConfig,
}

const glyphMap = {}
const paths = [...new Set(config.icons)].sort().map((icon, i) => {
  glyphMap[icon] = 59905 + i
  return `./node_modules/@mdi/svg/svg/${icon}.svg`
})

webfont({
  files: paths,
  fontName: config.fontName,
  format: config.formats,
  fontHeight: 512,
  descent: 64,
  version: `${major}.${minor}.${patch}`,
})
  .then((result) => {
    writeFileSync(join(config.dest, `${config.fileName}-webfont.ttf`), result.ttf)
    writeFileSync(join(config.dest, `${config.fileName}-webfont.json`), JSON.stringify(glyphMap))
    console.log(`Generated ttf`)
    return result
  })
  .catch((error) => {
    console.error(error)
    throw error
  })
