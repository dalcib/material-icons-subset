# material-icons-subset

#### Creates a new font with a subset of icons from [Material Design Icons Webfont](https://materialdesignicons.com/)

This library uses [webfont](https://github.com/itgalaxy/webfont) to create the subset and [@mdi/svg](https://www.npmjs.com/package/@mdi/svg) as the source.

### Install

```
npm i material-icons-subset
```

### How to use

You can pass a list of icon names to be included in the font as arguments in the command line:

```
material-icons-subset camera menu account-outline email archive
```

Or, you can pass the path for a config.json file:

```
material-icons-subset font-config.json
```

The config.json file must have an array called `icons` with the name of the icons to be include in the font:

```JSON
{
   "icons": [
      "camera",
      "menu",
      "account-outline",
      "tune",
      "bookmark-outline",
      "pause",
      "arrow-left",
      "archive",
      "email"]
}
```

### Configuration

You can also use the config.json to configure:

```
{
  "formats": ["ttf"], //svg, ttf, woff, woff2
  "fontName": "Material Design Icons",
  "fontFile": "materialdesignicons",
  "dest": ".",
  "icons": [...]
```

These are the default values.

The following config.json are accepted.

```
{"icons": [...], ...}}
```

```
{"material-icons-subset": {"icons": [...], ...}}
```

```
{"extra": {"icons": [...], ...}}
```

```
{"extra": {"material-icons-subset": {"icons": [...], ...}}}
```

In this way, package.json or app.json can be used to configuration.

### Result

By default, the library will create two files:
`materialdesignicons-subset.ttf` and
`materialdesignicons-subset.json` with the GlyphMap.

The GlyphMap file can be used with libraries like [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons/) with the alias configuration in the bundler for the font and for the GlyphMap. In this library this font is called MaterialComunityIcons.
