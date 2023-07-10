# Prettier Config

> Shared prettier configuration

## Installation

To install this package, run the following command in the terminal in the root directory of your application

```sh
$ npm install @dangvanthanh/prettier-config
```

## Usage

Add the key in the your `package.json`

```json
"prettier": "@dangvanthanh/prettier-config"
```

If you don't want to use `package.json`, you can create a `.prettierrc`, `.prettierrc.json`, `.prettierrc.yml`, `.prettierrc.yaml`, `.prettierrc.json5` and export the string

```
"@dangvanthanh/prettier-config"
```

Or create a `.prettierrc.js`, `.prettierrc.cjs`, `prettier.config.js`, `prettier.config.cjs` and export the object

```javascript
module.exports = {
  ...require("@dangvanthanh/prettier-config"),
};
```

## License

MIT © [Dang Van Thanh](https://dangthanh.org)
