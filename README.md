# material-icons-subset

##### Creates a new font with a subset of icons from [Material Design Icons Font](https://materialdesignicons.com/)

This library uses [webfont](https://github.com/itgalaxy/webfont) to create the subset and [@mdi/svg](https://www.npmjs.com/package/@mdi/svg) as the source.

### Install


```
git clone https://github.com/dalcib/material-icons-subset.git
cd material-icons-subset
npm install
```

### How to use

Create a `fontconfig.json` in the root with the name of the icons to be include in the font:

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
Run `node index`

### Configuration

Use the `fontconfig.json` to configure:

```JSON
{
  "formats": ["ttf"], //ttf, woff, woff2
  "fontName": "Material Design Icons",
  "fontFile": "materialdesignicons",
  "dest": ".",
  "icons": [...]
```
These are the default values.

You can customise the config-file/path:
`node index ./fonts/myconfigfont.json` 

### Result

By default, the library will create two files, `materialdesignicons-webfont.ttf` and `materialdesignicons-webfont.json` with the GlyphMap.

The GlyphMap file can be used with libraries like [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons/) with alias configuration in the bundler. This library this font is called MaterialComunityIcons.

