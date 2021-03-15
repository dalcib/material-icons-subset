#!/usr/bin/env node
const webfont = require('webfont').default
const { writeFileSync } = require('fs')
const { join, resolve } = require('path')
const { major, minor, patch } = require('./node_modules/@mdi/svg/font-build.json').version
if (process.argv.length === 2) {
  console.error('Error: Expected a path for a fontconfig.json file or a list of the name of icons')
  process.exit(1)
}
let userConfig = { icons: [] }
if (process.argv[2].endsWith('.json')) {
  userConfig = require(resolve(process.argv[2]))
} else {
  userConfig.icons = process.argv.slice(2)
}

const MIS = 'material-icons-subset'
if (!userConfig.icons) {
  if (userConfig[MIS] && userConfig[MIS].icons) userConfig = userConfig[MIS]
  else if (userConfig.extra) {
    if (userConfig.extra.icons) userConfig = userConfig.extra
    if (userConfig.extra[MIS] && userConfig.extra[MIS].icons) userConfig = userConfig.extra[MIS]
  }
  if (userConfig.icons === []) {
    console.error(
      'Error: The config.json must have a "icon" property with an array of the name of icons'
    )
    process.exit(1)
  }
}

const config = {
  format: 'ttf',
  fontName: 'Material Design Icons',
  fontFile: 'materialicons-subset',
  dest: '.',
  ...userConfig,
}

const glyphMap = {}
const paths = [...new Set(config.icons)].sort().map((icon, i) => {
  glyphMap[icon] = 59905 + i
  return `${__dirname}/node_modules/@mdi/svg/svg/${icon}.svg`
})

webfont({
  files: paths,
  fontName: config.fontName,
  format: [config.format],
  fontHeight: 512,
  descent: 64,
  version: `${major}.${minor}.${patch}`,
})
  .then((result) => {
    writeFileSync(
      join(process.cwd(), config.dest, `${config.fontFile}-subset.${config.format}`),
      result[config.format]
    )
    writeFileSync(
      join(process.cwd(), config.dest, `${config.fontFile}-subset.json`),
      JSON.stringify(glyphMap)
    )
    console.log(`Generated ${config.format}`)
    return result
  })
  .catch((error) => {
    console.error(error)
    throw error
  })
